
from sqlmodel import JSON, SQLModel, Field, Column, String
class Config(SQLModel, table=True):
    __tablename__ = "configs"

    id: int = Field(primary_key=True, index=True)
    model_path: str = Field(max_length=1000)
    scheduler: str = Field(max_length=50, default="euler")
    cfg: float = Field(default=7)
    inference_step: int = Field(default=20)
    xformer: bool = Field(default=True)
    offload: bool = Field(default=True)
    model_version: str = Field(max_length=20, default="sd1.5")
    fast_inference: bool = Field(default=True)
    use_seed: bool = Field(default=False)
    seed: int = Field(default=0)
    base_model: str = Field(default="RV2_0")
