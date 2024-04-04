import os

import torch
from torch import autocast
from diffusers import (StableDiffusionPipeline, LCMScheduler)
from huggingface_hub import login, snapshot_download

from database.Configs import Config
from database.Models import Models
from model import InferenceParameter
from model import base_model
from sampler.schedulers import scheduler


class BaseModel(object):
    def __init__(self, model_info : Models, config: Config):
        self.config = config
        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        self.model_info = model_info
        self.model = base_model

        # 모델 다운 로직
        self.model_download()

        #모델 파이프라인 생성
        self.make_pipeline()

        # 빠른 추론 설정 및 스케쥴러 설정
        # 추론 속도 상승 - RoLA 적용
        if self.config.fast_inference:
            self.set_fast_inference()
        else:
            # 일반 스케쥴러 등록
            self.pipe.scheduler = scheduler[self.config.scheduler].from_config(self.pipe.scheduler.config)

        # 최적화 여부
        if self.config.xformer:
            self.pipe.enable_xformers_memory_efficient_attention()

        # 메모리 오프로드 설정
        if self.config.offload:
            self.pipe.enable_sequential_cpu_offload()

    def set_fast_inference(self):
        if self.config.model_version == 'sd1.5':
           # LCM lora 적용 및 스케쥴러 설정
           self.set_LCM_Lora()
        elif self.config.model_version == 'sdxl':
            # SDXL Lightening LoRA 적용
            self.pipe.load_lora_weights("ByteDance/SDXL-Lightning", weight_name="sdxl_lightning_8step_lora.safetensors", adapter_name='fast')
            self.pipe.scheduler = scheduler[self.config.scheduler].from_config(self.pipe.scheduler.config)
            self.config.cfg = 1.0
            self.config.inference_step = 8

    # LCM 적용
    def set_LCM_Lora(self):
        if self.config.model_version == 'sd1.5':
            # load LCM-LoRA
            self.pipe.load_lora_weights("latent-consistency/lcm-lora-sdv1-5", adapter_name='fast')
        elif self.config.model_version == 'sdxl':
            # SDXL Lightening LoRA 적용
            self.pipe.load_lora_weights("latent-consistency/lcm-lora-sdxl", adapter_name='fast')
        # set scheduler
        self.pipe.scheduler = LCMScheduler.from_config(self.pipe.scheduler.config)

    # 파이프라인 생성
    def make_pipeline(self):
        # 파이프라인 생성
        self.pipe = StableDiffusionPipeline.from_pretrained(
            self.config.model_path,
            torch_dtype=torch.float16,
            variant='fp16',
            safety_checker=None,
            use_safetensors=True
        ).to(self.device)


    def model_download(self):
        # 사용할 모델이 존재하는지 확인하기
        if not os.path.exists(self.config.model_path):  # 만약 모델이 없다면 다운로드를 수행한다.
            access_token = os.environ.get('HUGGINGFACE_TOKEN')
            login(token=access_token)  # API 토큰 삽입

            # 모델을 다운로드한다.
            snapshot_download(
                repo_id=self.model_info.model_repo,
                repo_type="dataset",
                cache_dir="cache",
                local_dir=self.config.model_path
            )

    # 추론 실행
    def inference(self, input: InferenceParameter):
        # 만약 시드를 사용한다면
        if self.config.use_seed:
            self.generator = torch.Generator(device=self.device).manual_seed(self.config.seed)
        else:
            seed = int.from_bytes(os.urandom(4), byteorder="big") % 1000000
            # Generator 생성
            self.generator = torch.manual_seed(seed)

        with autocast("cuda"), torch.inference_mode():
            sample = self.pipe(prompt=input.prompt,
                               negative_prompt=input.negative_prompt,
                               guidance_scale=self.config.cfg,
                               generator=self.generator,
                               num_inference_steps=self.config.inference_step,
                               safety_checker=None,
                               height=input.height,
                               width=input.width,
                               )
        return sample.images[0]
