from fastapi import FastAPI, UploadFile, File, Form
import uvicorn

app = FastAPI()

#모델 로딩

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