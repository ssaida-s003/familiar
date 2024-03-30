import os

import torch
from PIL.Image import Image
from clip_interrogator import Config, Interrogator
from controlnet_aux import HEDdetector
from diffusers import StableDiffusionControlNetPipeline, ControlNetModel
from huggingface_hub import login, snapshot_download

import database.Configs as Configs
from model import InferenceParameter
from sampler.schedulers import scheduler


class ControlNet(object):
    def __init__(self, config : Configs.Config):
        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        self.config = config
        self.artStyle = None

        # 로라 종류
        self.lora_path = {
            "watercolor" : "weights/lora/watercolor.safetensors",
            "oil" : "weights/lora/bichu-v0612.safetensors",
            "crayon" : "weights/lora/crayon-v1.1-000005.safetensors",
            '3dmm':"weights/lora/3DMM_V12.safetensors",
        }
        #lora_download
        self.lora_download()

        # 파이프라인 설정
        self.make_pipeline()

        #Scheduler 달기
        self.pipe.scheduler = scheduler[self.config.scheduler].from_config(self.pipe.scheduler.config)


        # clip interrogartor 설정하기
        self.set_clip_interrogator()

        # # 최적화 여부
        # if self.config.xformer:
        #     self.pipe.enable_xformers_memory_efficient_attention()

        # 메모리 오프로드 설정
        if self.config.offload:
            self.pipe.enable_model_cpu_offload()



    def lora_download(self):
        model_repo = "fangdol888/my-dreambooth-lora"
        local_dir="weights/lora"

        # 사용할 모델이 존재하는지 확인하기
        if not os.path.exists(local_dir):  # 만약 모델이 없다면 다운로드를 수행한다.
            access_token = os.environ.get('HUGGINGFACE_TOKEN')
            login(token=access_token)  # API 토큰 삽입

            # 모델을 다운로드한다.
            snapshot_download(
                repo_id=model_repo,
                repo_type="dataset",
                cache_dir="cache",
                local_dir=local_dir
            )
    def make_pipeline(self):

        self.hed = HEDdetector.from_pretrained('lllyasviel/ControlNet')

        self.controlnet = ControlNetModel.from_pretrained(
            "lllyasviel/sd-controlnet-scribble"
        )

        self.pipe = StableDiffusionControlNetPipeline.from_pretrained(
            self.config.model_path,
            controlnet=self.controlnet,
        ).to(self.device)


    def set_clip_interrogator(self):
        caption_model_name = 'blip-large'  # @param ["blip-base", "blip-large", "git-large-coco"]
        clip_model_name = 'ViT-L-14/openai'  # @param ["ViT-L-14/openai", "ViT-H-14/laion2b_s32b_b79k"]
        config = Config()
        config.clip_model_name = clip_model_name
        config.caption_model_name = caption_model_name

        # interrogator
        self.ci = Interrogator(config)

    # 프롬프트 생성
    def get_prompt(self, image : Image):
        # 그림으로 부터 설명 추출
        if self.config.fast_inference:
            preprompt = self.ci.interrogate_fast(image)
        else:
            preprompt = self.ci.interrogate(image, min_flavors=4, max_flavors=4)


        pp = self.artStyle +', '+ 'painting, ' if self.artStyle != '3dmm' else '3d, '
        prompt = pp + preprompt + " high, super, hyper, best quality, finely detailed, (4k, 8k, high_resolution), perfect_finger"
        return prompt # 정제한 프롬프트 생성

    # 본인이 가진 로라를 적용한다.
    def set_style_lora(self,  artStyle: str):
        # lora 떼기
        self.detach_lora()

        # lora path 가지고 오기
        lora_path = self.lora_path.get(artStyle, None)

        # state 불러오기
        state_dict, network_alphas = self.pipe.lora_state_dict(
            lora_path,
            unet_config=self.pipe.unet.config,
        )

        # 불러온 state 기반으로 붙이기
        self.pipe.load_lora_into_unet(
            state_dict,
            network_alphas=network_alphas,
            unet=self.pipe.unet
        )
        self.artStyle = artStyle

    def detach_lora(self):
        self.pipe.unload_lora_weights()

    def inference(self, input: InferenceParameter):
        # 만약 시드를 사용한다면
        if self.config.use_seed:
            self.generator = torch.Generator(device=self.device).manual_seed(self.config.seed)
        else:
            seed = int.from_bytes(os.urandom(4), byteorder="big") % 1000000
            # Generator 생성
            self.generator = torch.manual_seed(seed)

        # controlnet으로 한번 정제
        image = self.hed(input.input_image, scribble=True)

        # 프롬프트 추출
        input.prompt = self.get_prompt(input.input_image)

        with torch.inference_mode():
            sample = self.pipe(prompt=input.prompt,
                               negative_prompt=input.negative_prompt,
                               image=image,
                               guidance_scale=self.config.cfg,
                               generator=self.generator,
                               num_inference_steps=self.config.inference_step,
                               safety_checker=None,
                               height=input.height,
                               width=input.width,
                               )
        return sample.images[0]