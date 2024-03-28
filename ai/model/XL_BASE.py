
import os

import torch
from diffusers import StableDiffusionXLPipeline, AutoencoderKL, DiffusionPipeline
from huggingface_hub import login, snapshot_download

from database.Configs import Config
from database.Models import Models
from .base import BaseModel


#XL 모델 - 1.0base 기반 Lora로 개인화
class XLBase(BaseModel):
    def __init__(self, model_info : Models, config : Config):
        super().__init__(model_info, config)
        self.base_model = 'sdxl'
        self.fuse_lora_weights()

    def model_download(self):

        # 사용할 모델이 존재하는지 확인하기
        if not os.path.exists(self.config.model_path+ ".safetensors"):  # 만약 모델이 없다면 다운로드를 수행한다.
            access_token = os.environ.get('HUGGINGFACE_TOKEN')
            login(token=access_token)  # API 토큰 삽입

            # Lora는 본인 위치도 포함하기 때문에 저장 위치는 거기서 뒤로 뺀다.
            local_path = self.model_info.model_path[:-(len(self.model_info.lora_filename) + 1)]

            # 모델을 다운로드한다.
            snapshot_download(
                repo_id=self.model_info.model_repo,
                repo_type="dataset",
                cache_dir="cache",
                local_dir=local_path
            )
    def make_pipeline(self):
        # 파이프라인 생성
        vae = AutoencoderKL.from_pretrained("madebyollin/sdxl-vae-fp16-fix", torch_dtype=torch.float16)

        self.pipe = DiffusionPipeline.from_pretrained(
            "stabilityai/stable-diffusion-xl-base-1.0",
            torch_dtype=torch.float16,
            variant='fp16',
            vae=vae,
            safety_checker=None,
            use_safetensors=True
        ).to(self.device)

        # 사람 Lora 붙이기
        self.attach_person_lora()

    # 사람 로라 붙이는 로직
    def attach_person_lora(self):
        local_path = self.model_info.model_path[:-(len(self.model_info.lora_filename)+1)]
        self.pipe.load_lora_weights(local_path, weight_name=self.model_info.lora_filename+".safetensors", adapter_name="person")

    # LCM과 합하는 로직
    def fuse_lora_weights(self):
        if self.config.fast_inference:
            self.pipe.set_adapters(['fast', 'person'], adapter_weights=[1.0, 1.0])

    def inference(self, input):
        # input.prompt = "a photo of " + input.prompt + ", best quality, studio lighting, makeup, 8k uhd, high quality, dramatic, cinematic, 200mm 1.4f macro shot, beautiful, professional, highly detailed, photography very realist"
        input.negative_prompt = "text, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck, bad face"
        input.height = 1024
        input.width = 1024
        return super().inference(input)
