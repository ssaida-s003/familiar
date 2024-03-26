
from sqlmodel import JSON, SQLModel, Field, Column, String
class MyModel(SQLModel, table=True):
    __tablename__ = "models"
    model_path: str = Field(max_length=1000, description='모델 로컬 위치', primary_key=True)
    member_id: int = Field(description='맴버 아이디')
    model_repo: str = Field(max_length=1000, description='모델 레포지토리 주소')
