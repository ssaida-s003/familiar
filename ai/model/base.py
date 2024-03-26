import os

from diffusers import StableDiffusionPipeline, LCMScheduler
from model import InferenceParameter
from sampler.schedulers import scheduler
from model import base_model, available_model
import torch
from huggingface_hub import login, hf_hub_download, snapshot_download

class BaseModel():
    def __init__(self, config):
        self.config = config
        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        self.model = base_model

        # 사용할 모델이 존재하는지 확인하기
        if not os.path.exists(config.model_path): # 만약 모델이 없다면 다운로드를 수행한다.
            access_token = os.environ.get('HUGGINGFACE_TOKEN')
            login(token=access_token) # API 토큰 삽입

            # 모델을 다운로드한다.
            snapshot_download(
                repo_id=config.repo_id,
                repo_type="dataset",
                local_dir_use_symlinks=False,
                local_dir=config.model_path
            )

        #파이프라인 생성
        self.pipe = StableDiffusionPipeline.from_pretrained(
            config.model_path, dtype=torch.float16,
        ).to(self.device)

        # 추론 속도 상승 - RoLA 적용
        if self.config.fast_inference:
           # set scheduler
            self.pipe.scheduler = LCMScheduler.from_config(self.pipe.scheduler.config)
            # load LCM-LoRA
            self.pipe.load_lora_weights("latent-consistency/lcm-lora-sdv1-5")
        else:
            # 일반 스케쥴러 등록
            self.pipe.scheduler = scheduler[self.config.scheduler].from_config(self.pipe.scheduler.config)

        #최적화 여부
        if self.config.xformer:
            self.pipe.enable_xformers_memory_efficient_attention()

        if self.config.offload:
            self.pipe.enable_sequential_cpu_offload()

    #추론 실행
    def inference(self, input: InferenceParameter):
        with torch.inference_mode():
            sample = self.pipe(prompt=input.prompt,
                          negative_prompt=input.negative_prompt,
                          guidance_scale=self.config.CFG,
                          seed=self.config.seed,
                          num_inference_steps=self.config.num_inference_steps,
                          safety_checker=None)
            return sample.images[0]