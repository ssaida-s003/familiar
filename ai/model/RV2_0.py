from diffusers import AutoencoderKL
from sampler.schedulers import scheduler
from base import BaseModel

#RV 2.0
class RV2_0(BaseModel):
    def __init__(self, config):
        super().__init__(config)
    def inference(self, input):
        super().inference(input)
