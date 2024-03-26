from diffusers import AutoencoderKL
from sampler.schedulers import scheduler
from base import BaseModel
from ..database.Configs import Config
#RV 2.0
class RV2_0(BaseModel):
    def __init__(self, config : Config):
        super().__init__(config)
    def inference(self, input):
        super().inference(input)
