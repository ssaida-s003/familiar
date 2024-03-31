import binascii
import gc
import os

import uvicorn
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from torchvision.transforms import transforms

from dto.DiaryRequestDto import DiaryRequestDto
from dto.DrawingRequestDto import DrawingRequestDto
from model.CLIP import CLIP
from model.ControlNet import ControlNet

os.environ['KMP_DUPLICATE_LIB_OK']='True'

from database.Configs import Config
from database.Models import Models
from database import database
from model import InferenceParameter
from model.model_selector import model_selector
from PIL import Image
import argparse
import io, base64

app = FastAPI()

origins = [
    "https://ssaida-back.duckdns.org",
    "http://localhost:8081",
    "http://127.0.0.1:8081"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# DB 세팅
db = database.Database()

#모델 로딩 - 가족 모델, 다이어리 모델
models = {}
#
# ## 가족 일기 모델
# models['diary']  = None
#
# ## 스케치 그림 생성 모델
# models['drawing'] = None

app.loaded_model = None
app.clip = None
def delete_model():
    del app.loaded_model
    del app.clip
    gc.collect()
    app.loaded_model=None
    app.clip=None


@app.get("/")
async def read_root():
    return {"message": "Hello, World"}

#가족 이미지 생성 API
@app.post("/diaries")
async def make_diary_image(requestDto : DiaryRequestDto):
    try:
        model_info : Models = db.get_model_info(requestDto.memberId) # 맴버에 맞는 모델 불러오기
        config: Config = db.get_configs(model_info.model_path) # 모델에 맞는 설정 파일 들고 오기
    except:
        return {"error_code": "400", "message": "요청이 잘못되거나 없는 데이터입니다."}

    #추론 수행 모델 불러오기 및 추론 수행
    if app.loaded_model == None or app.loaded_model.config.model_path != config.model_path : # 만약 현재 수행 중인 모델이 없거나 현재 모델이 아니라면
        delete_model()

        # 같은 xl 모델이면 로라를 바꾸기만 한다.
        if app.loaded_model != None and app.loaded_model.config.model_version == "sdxl" and config.model_version == 'sdxl':
            app.loaded_model.change_lora(model_info,config,'person')
        else:
            myModel = model_selector[config.base_model]
            app.loaded_model = myModel(model_info, config) #모델 정보 불러오기

    input : InferenceParameter = InferenceParameter({'prompt': requestDto.prompt})
    result : Image = app.loaded_model.inference(input) # 모델 추론 결과

    # PIL 이미지를 바이트로 변환
    img_byte_array = io.BytesIO()
    result.save(img_byte_array, format="JPEG")
    img_byte_array.seek(0)

    return { "image" : base64.b64encode(img_byte_array.read()) }

# 스케치로 그림 생성 API
@app.post("/drawing/style-transfer")
async def drawing_by_ai(requestDto : DrawingRequestDto):
    # hard coding
    height = 512
    width = 512
    negative_prompt = "nsfw, bad-hands-5, negative_hand-neg, easynegative, mutated, ugly, disfigured, bad hand"
    guidance_scale = 5
    num_inference_steps = 30
    model_path = "lykon/dreamshaper-8"

    # 입력 값 설정
    input: InferenceParameter = InferenceParameter({})
    input.height = height
    input.width = width
    input.negative_prompt = negative_prompt
    data = base64.b64decode(requestDto.image)
    image = Image.open(io.BytesIO(data)) # base64 -> PIL.Image 변환

    # 혹시 모를 transforms 수행
    resize_transform = transforms.Resize((512, 512))
    input.input_image = resize_transform(image)

    # 추론 설정
    config = Config()
    config.inference_step = num_inference_steps
    config.cfg = guidance_scale
    config.model_path = model_path
    config.model_version = 'sd1.5'
    config.use_seed = False
    config.offload = False
    # config.offload = False
    config.xformer = False
    config.fast_inference = False
    config.scheduler = 'Euler'

    # CLIP으로 prompt 추출
    app.clip = CLIP(config)  # CLIP 생성
    input.prompt = app.clip.get_prompt(input.input_image, artStyle=requestDto.artStyle)

    del app.clip
    gc.collect()
    app.clip = None

    # 한번도 로딩이 안되어 있었거나 같은 모델이 아니라면
    if app.loaded_model == None or app.loaded_model.config.model_path != model_path:
        delete_model()

        app.loaded_model = ControlNet(config) # 불러오기
    try:
        # 스타일에 따른 로라 적용
        app.loaded_model.set_style_lora(requestDto.artStyle)

    # 잘못된 요청이면 예외 처리한다.
    except TypeError | binascii.Error as e:
        return {"error_code": "400", "message": "요청이 잘못되거나 없는 데이터입니다."}

    # #프롬프트 추출하기 - Interroagtor 이용
    # input.prompt = app.loaded_model.get_prompt(input.input_image)
    # input.prompt = app.clip.get_prompt(input.input_image, artStyle=requestDto.artStyle)
    # 여기까지 20초 소요

    # 추론하기
    result: Image = app.loaded_model.inference(input)  # 모델 추론 결과
    # 추론만 50초 소요

    # PIL 이미지를 바이트로 변환
    img_byte_array = io.BytesIO()
    result.save(img_byte_array, format="JPEG")
    img_byte_array.seek(0)

    return {"image": base64.b64encode(img_byte_array.read())}

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('--reload', action='store_true', help=' : debug mode', default=False)
    args = parser.parse_args()
    uvicorn.run("main:app", host="0.0.0.0", port=3002 , reload=args.reload)