from pydantic import BaseModel

class DiaryRequestDto(BaseModel):
    memberId: int
    prompt: str = None