available_model = {
    'sd1.5' : True,
    'sdxl' : True
}
base_model = 'sd1.5'

__all__ = ["RV2_0", "RV6_0"]

class InferenceParameter():
    def __init__(self, input: dict):
        self.prompt = input.get("prompt", None)
        self.negative_prompt = input.get("negative_prompt", None)
        self.input_image = input.get("input_image", None)
        self.height = input.get("height", 512)
        self.width = input.get("width", 512)