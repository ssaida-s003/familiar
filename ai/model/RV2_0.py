import torch
from diffusers import LCMScheduler, StableDiffusionPipeline

from database.Configs import Config
from database.Models import Models
from .base import BaseModel


#RV 2.0
class RV2_0(BaseModel):
    def __init__(self, model_info : Models, config : Config):
        super().__init__(model_info, config)
    def inference(self, input):
        input.prompt = "RAW photo, " + input.prompt + ", (high detailed skin:1.2), 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3"
        input.negative_prompt = "(deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime:1.4), text, close up, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck"
        return super().inference(input)
