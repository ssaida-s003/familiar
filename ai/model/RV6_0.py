from diffusers import AutoencoderKL
from sampler.schedulers import scheduler
from base import BaseModel

#RV 6.0
class RV6_0(BaseModel):
    def __init__(self, config):
        super().__init__(config)

        #vae 인코더 새로 달아주기
        vae = AutoencoderKL.from_pretrained(self.config.model_path).to(self.device)
        self.pipe.vae = vae
    def inference(self, input):
        super().inference(input)




