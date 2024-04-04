
from sqlmodel import JSON, SQLModel, Field, Column, String
class Models(SQLModel, table=True):
    __tablename__ = "models"
    model_path: str = Field(max_length=1000, description='모델 로컬 위치', primary_key=True)
    member_id: int = Field(description='맴버 아이디')
    model_repo: str = Field(max_length=1000, description='모델 레포지토리 주소')
    gen_keyword : str = Field(max_length=50, description='드림부스 생성 키워드')
    is_lora: bool = Field(default=False, description='LoRA 모델 인지 확인')
    lora_filename: str = Field(max_length=100,description='로라 파일이름')
