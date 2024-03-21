base_config = dict(
    model_path = "SG161222/Realistic_Vision_V2.0",
    scheduler = "Euler",
    CFG = 7.0,
    inference_step = 20,
    xformer = True,
    offload = True,
    LCM_LoRA = True,
)

class BaseConfig():
    def __init__(self, config=None):
        if config is None:
            config = base_config

        self.model_path = config["model_path"]
        self.scheduler = config["scheduler"]
        self.CFG = config["CFG"]
        self.inference_step = config["inference_step"]
        self.xformer = config["xformer"]
        self.offload = config["offload"]
        self.LCMLoRA = config["LCM_LoRA"]