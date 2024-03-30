FROM pytorch/pytorch:2.2.1-cuda11.8-cudnn8-devel

RUN --mount=target=/var/cache/apt,type=cache,sharing=locked \
    apt-get update &&  \
    apt-get install -y pkg-config build-essential libmysqlclient-dev libgl1-mesa-glx

COPY . /ai
WORKDIR /ai

RUN  --mount=type=cache,target=/root/.cache/pip pip3 install --no-cache-dir  -U xformers --index-url https://download.pytorch.org/whl/cu118 # xformers 설치
RUN  --mount=type=cache,target=/root/.cache/pip pip3 install --no-cache-dir -U peft # LCM 위함
RUN  --mount=type=cache,target=/root/.cache/pip pip install --no-cache-dir  diffusers["torch"]

RUN --mount=type=cache,target=/root/.cache/pip pip install --no-cache-dir  -r requirements.txt

EXPOSE 3002
CMD ["python", "main.py"]