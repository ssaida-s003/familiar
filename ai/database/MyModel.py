
from sqlmodel import JSON, SQLModel, Field, Column, String
class MyModel(SQLModel, table=True):
    __tablename__ = "models"

    id: int  = Field(default=None, primary_key=True)
    model_path: str | None = Column(String, default="")