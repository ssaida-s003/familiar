from fastapi import FastAPI
import uvicorn

app = FastAPI()

#모델 로딩

@app.get("/")
async def read_root():
    return {"message": "Hello, World"}

@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}

#가족 이미지 생성 API


# 스케치로 그림 생성 API

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=3002)