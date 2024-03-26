import uvicorn
from fastapi import FastAPI, UploadFile, File, Form
from starlette.middleware.cors import CORSMiddleware

from database.Configs import Config
from database.MyModel import MyModel
from database import database
from model import InferenceParameter
from .model.RV2_0 import RV2_0
from PIL import Image

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
async def make_diary_image(memberId: int, prompt: str = None):
    model_path : MyModel = db.get_model_path(memberId) # 맴버에 맞는 모델 불러오기
    config: Config = db.get_configs(model_path) # 모델에 맞는 설정 파일 들고 오기

    #추론 수행 모델 불러오기 및 추론 수행
    if models['diary'] != config.model_path : # 만약 현재 수행 중인 모델이 현재 모델이 아니라면
        models['diary'] = RV2_0(config) #모델 정보 불러오기

    input : InferenceParameter = InferenceParameter({'prompt': prompt})
    result : Image = models['diary'].inference(input) # 모델 추론 결과

    return result


# 스케치로 그림 생성 API
@app.post("drawing/style-transfer")
async def drawing_by_ai(title: str = Form(...), artStyle: str = Form(...), file: UploadFile = File(...)):

    pass

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=3002)