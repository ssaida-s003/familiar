from diffusers import StableDiffusionPipeline

from database.Configs import Config
from database.Models import Models
from model.BaseModel import BaseModel


class BaseLoraModel(BaseModel):
    def __init__(self, model_info : Models,  config: Config):
        super().__init__(model_info, config)

    def attach_lora(self, adpater_name:str = "person"):
        local_path = self.model_info.model_path[:-(len(self.model_info.lora_filename) + 1)]
        self.pipe.load_lora_weights(local_path, weight_name=self.model_info.lora_filename + ".safetensors", adapter_name=adpater_name)
    def detach_lora(self):
        self.pipe.unload_lora_weights()