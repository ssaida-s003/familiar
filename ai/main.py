import uvicorn
from fastapi import FastAPI, UploadFile, File, Form
from starlette.middleware.cors import CORSMiddleware

from database import database

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

#모델 로딩
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

    pass

# 스케치로 그림 생성 API
@app.post("drawing/style-transfer")
async def drawing_by_ai(title: str = Form(...), artStyle: str = Form(...), file: UploadFile = File(...)):

    pass

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=3002)