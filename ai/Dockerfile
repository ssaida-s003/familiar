#FROM datajoint/miniconda3:latest

#RUN apt-get update && apt-get install -y python3-pip
#RUN apt-get update
#RUN apt-get -y install libgl1-mesa-glx

##Miniconda installing
#RUN mkdir -p ~/miniconda3 && \
#    wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh && \
#    bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3 && \
#    rm -rf ~/miniconda3/miniconda.sh && \
#    ~/miniconda3/bin/conda init bash \
#    ~/miniconda3/bin/conda init zsh

##conda install
#RUN conda install -y anaconda::cudatoolkit anaconda::cudnn
#RUN conda install -c conda-forge diffusers
#
##pip install
#RUN pip install --upgrade pip
#RUN pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118

FROM pytorch/pytorch:2.2.1-cuda11.8-cudnn8-devel

RUN apt-get update && apt-get install -y pkg-config build-essential libmysqlclient-dev

COPY . /ai
WORKDIR /ai

RUN pip3 install -U xformers --index-url https://download.pytorch.org/whl/cu118 # xformers 설치
RUN pip3 install -U peft # LCM 위함
RUN pip install diffusers["torch"] transformers

RUN pip install -r requirements.txt
RUN conda install -c conda-forge diffusers

EXPOSE 3002
CMD ["python", "main.py"]