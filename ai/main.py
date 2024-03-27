import uvicorn
from fastapi import FastAPI, UploadFile, File, Form
from starlette.middleware.cors import CORSMiddleware

import os

from dto.DiaryRequestDto import DiaryRequestDto
from dto.DrawingRequestDto import DrawingRequestDto

os.environ['KMP_DUPLICATE_LIB_OK']='True'

from database.Configs import Config
from database.Models import Models
from database import database
from model import InferenceParameter
from model.model_selector import model_selector
from model.RV2_0 import RV2_0
from PIL import Image
import argparse, sys
from fastapi.responses import StreamingResponse
import io

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

## 가족 일기 모델
models['diary']  = None

## 스케치 그림 생성 모델
models['drawing'] = None

@app.get("/")
async def read_root():
    return {"message": "Hello, World"}

#가족 이미지 생성 API
@app.post("/diarys")
async def make_diary_image(requestDto : DiaryRequestDto):
    model_info : Models = db.get_model_info(requestDto.memberId) # 맴버에 맞는 모델 불러오기
    config: Config = db.get_configs(model_info.model_path) # 모델에 맞는 설정 파일 들고 오기

    #추론 수행 모델 불러오기 및 추론 수행
    if models['diary'] == None or models['diary'].config.model_path != config.model_path : # 만약 현재 수행 중인 모델이 없거나 현재 모델이 아니라면
        myModel = model_selector[config.base_model]
        models['diary'] = myModel(model_info, config) #모델 정보 불러오기

    input : InferenceParameter = InferenceParameter({'prompt': requestDto.prompt})
    result : Image = models['diary'].inference(input) # 모델 추론 결과

    # PIL 이미지를 바이트로 변환
    img_byte_array = io.BytesIO()
    result.save(img_byte_array, format="JPEG")
    img_byte_array.seek(0)

    return StreamingResponse(img_byte_array, media_type="image/jpeg")

# 스케치로 그림 생성 API
@app.post("drawing/style-transfer")
async def drawing_by_ai(requestDto : DrawingRequestDto):

    pass

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('--reload', action='store_true', help=' : debug mode', default=False)
    args = parser.parse_args()
    uvicorn.run("main:app", host="0.0.0.0", port=3002 , reload=args.reload)