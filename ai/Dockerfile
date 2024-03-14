FROM python:3.10

RUN apt-get update && apt-get install -y python3-pip
RUN apt-get -y install libgl1-mesa-glx

RUN pip install --upgrade pip

RUN pip install -r requirements.txt

EXPOSE 3002
CMD ["python ", "main.py"]