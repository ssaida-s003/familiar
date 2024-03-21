

__all__ = ["RV2_0", "RV6_0"]

class InferenceParameter():
    def __init__(self, input: dict):
        self.prompt = input.get("prompt", None)
        self.negative_prompt = input.get("negative_prompt", None)
        self.input_image = input.get("input_image", None)