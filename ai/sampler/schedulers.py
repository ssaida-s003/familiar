from diffusers import *

scheduler = {
    "Euler" : EulerDiscreteScheduler,
    "Euler a" : EulerAncestralDiscreteScheduler,
    "DPM++ 2M" : DPMSolverMultistepScheduler,
    "DPM++ 2M Karras" : DPMSolverMultistepScheduler(use_karras_sigmas=True),
    "DPM++ 2M SDE" : DPMSolverMultistepScheduler(algorithm_type="sde-dpmsolver++"),
    "DPM++ 2M SDE Karras" : DPMSolverMultistepScheduler(algorithm_type="sde-dpmsolver++",use_karras_sigmas=True),
    "DPM++ SDE" : DPMSolverSinglestepScheduler,
    "DPM++ SDE Karras": DPMSolverSinglestepScheduler(use_karras_sigmas=True),
    "DPM2": KDPM2DiscreteScheduler,
    "DPM2 Karras": KDPM2DiscreteScheduler(use_karras_sigmas=True),
    "DPM2 a": KDPM2AncestralDiscreteScheduler,
    "DPM2 a Karras": KDPM2AncestralDiscreteScheduler(use_karras_sigmas=True),
    "Heun" : HeunDiscreteScheduler,
    "LMS" : LMSDiscreteScheduler,
    "LMS Karras": LMSDiscreteScheduler(use_karras_sigmas=True),
}