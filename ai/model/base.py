from diffusers import StableDiffusionPipeline, LCMScheduler
from model import InferenceParameter
from sampler.schedulers import scheduler
import torch

class BaseModel():
    def __init__(self, config):
        self.config = config
        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

        # LCM-LoRA
        # set scheduler
        if self.config.LCM_LoRA :
            self.pipe.scheduler = LCMScheduler.from_config(self.pipe.scheduler.config)
            # load LCM-LoRA
            self.pipe.load_lora_weights("latent-consistency/lcm-lora-sdxl")

        #파이프라인 생성
        self.pipe = StableDiffusionPipeline.from_pretrained(
            config.model_path, dtype=torch.float16,
        ).to(self.device)

        #스케쥴러 등록
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