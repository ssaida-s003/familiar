import gc

from PIL.Image import Image
from clip_interrogator import Config, Interrogator

from database import Configs


class CLIP(object):
    def __init__(self, config: Configs.Config):
        self.config = config

    def set_clip_interrogator(self):
        caption_model_name = 'git-large-coco'  # @param ["blip-base", "blip-large", "git-large-coco"]
        clip_model_name = 'ViT-L-14/openai'  # @param ["ViT-L-14/openai", "ViT-H-14/laion2b_s32b_b79k"]
        config = Config()
        config.clip_model_name = clip_model_name
        config.caption_model_name = caption_model_name
        # interrogator
        self.ci = Interrogator(config)

    # 프롬프트 생성
    def get_prompt(self, image: Image, artStyle : str):
        self.artStyle = artStyle
        # clip interrogartor 설정하기
        self.set_clip_interrogator()

        # 그림으로 부터 설명 추출
        if self.config.fast_inference:
            preprompt = self.ci.interrogate_fast(image)
        else:
            preprompt = self.ci.interrogate(image, min_flavors=4, max_flavors=4)

        pp = self.artStyle + ', ' + 'painting, ' if self.artStyle != '3dmm' else '3d, '
        prompt = pp + ','.join(preprompt.split(',')[0:4]) + " high, super, hyper, best quality, finely detailed, (4k, 8k, high_resolution), perfect_finger"

        # # 생성된 interrogator 삭제
        # del self.ci
        # gc.collect()
        # self.ci = None

        return prompt  # 정제한 프롬프트 생성