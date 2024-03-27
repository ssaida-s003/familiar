from pydantic import BaseModel

class DrawingRequestDto(BaseModel):
    title: str
    artStyle: str #이름
    image: str # base64