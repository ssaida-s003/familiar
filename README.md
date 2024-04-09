# SSAFY 10기 & DA사업부 전자 연계 프로젝트 - Familiar

<!--프로젝트 대문 이미지-->
[![서비스 소개](./docs/서비스소개.png)](https://www.youtube.com/watch?v=DGH4enc_nlA)
<!-- <a href="https://www.youtube.com/watch?v=DGH4enc_nlA"><img src="https://github.com/ssaida-s003/familiar/tree/master/docs/%EC%84%9C%EB%B9%84%EC%8A%A4%EC%86%8C%EA%B0%9C.png" width="70%" height="70%"/></a> -->

<small>_해당 이미지를 클릭하면 티저영상으로 이동됩니다._</small>

>👑 **삼성 청년 SW 아카데미 10기 & 삼성전자 DA사업부 연계 프로젝트 1등 수상**👑
<!--목차-->
# 🎈 Table of Contents
- [1️⃣ 프로젝트 소개](#1️⃣-프로젝트-소개)
  - [Features](#features)
  - [Technologies](#technologies)
  - [Architecture](#architecture)
- [2️⃣ 상세 기능 소개](#2️⃣-상세-기능-소개)
- [3️⃣ 팀 소개](#3️⃣-팀-소개)
- [4️⃣ 레퍼런스](#4️⃣-레퍼런스)

<br>

# 1️⃣ 프로젝트 소개

> 이미지 생성형 AI을 활용한 삼성 비스포크 패밀리허브 가족 소통 서비스




## Features

- **가족들 간 하루 일상 공유 기능**
  - 음성 인식을 통해 냉장고에서도 손쉬운 입력
  - 인물 모델로 화자의 얼굴이 들어가도록 하여 사진을 찍지않아도 개인화된 이미지 생성
  - **하루 공유, 질문과 답변** 두 가지 방법으로 소통 가능

- **Dream Painter**
  - 화이트보드에 그린 낙서를 AI를 통해 퀄리티 높은 작품으로 완성
  - 부모가 주방에 있는 동안에도 아이와 부모를 연결
  - 비스포크 패밀리허브에 탑재된 미러링 기능을 통해 태블릿, 스마트폰 등 어떤 기기를 통해 그려도 주방에서 확인 가능


## Technologies
### Version Info
**FRONTEND**
- [React]

**BACKEND**
- [Java](https://www.java.com/ko/) 17
- [Gradle](https://gradle.org/) 8.6
- [MySQL](https://www.mysql.com/) 8.0
- [Spring](https://spring.io/) 3.2.3

**AI**
- [CUDA](https://developer.nvidia.com/cuda-toolkit) 11.8.0
- [cuDNN](https://developer.nvidia.com/cudnn) 9.0.0
- [Python](https://www.python.org/) 3.10.6
- [PyTorch](https://pytorch.org/) 2.2.1

## Architecture
![Architecture](docs/Architecture.png)

<br>

# 2️⃣ 상세 기능 소개
### 비스포크 패밀리허브 색상에 따른 배경 변경

![색상 선택](./docs/비스포크-색상선택.gif)
<small>색상을 선택할 수 있는 비스포크 패밀리허브의 특성에 맞춰 서비스의 배경색이 변경됩니다.</small>


### 가족 간 하루 일상 공유 & 질문 
![하루 공유](./docs/하루공유_질문.gif)
<small>
음성을 통해 하루 일상이나 질문을 남기면, 가족의 얼굴을 학습한 Stable Diffusio 모델 기반으로 생성된 이미지가 생성되고 이를 통해 시간에 제약받지 않으며 가족과 소통할 수 있습니다.
</small>

### Dream Painter
![드림 페인터](./docs/드림페인터.gif)
<small>그림을 그리고 화풍을 선택하면 화풍에 따른 LoRA를 이용하여 그림을 더 좋은 퀄리티로 바꾸어줍니다.
</small>

<br>

# 3️⃣ 팀 소개

**SSAFY + AI + DA = 🥤SSAIDA 팀**
<!-- <center>
<table>
    <tr height="160px">
        <td align="center" width="200px">
            <a href="https://github.com/yeaaaaahhhhh"><img height="150" width="100" src="https://file.notion.so/f/f/160592ad-dc63-481b-8566-2afbd2df9f93/b7e00f7c-1971-4c21-98fd-28e18f28e230/Untitled.png?id=95b815a7-865a-4708-9d3d-63a90b9d52e5&table=block&spaceId=160592ad-dc63-481b-8566-2afbd2df9f93&expirationTimestamp=1712282400000&signature=lihyj5b4H9gVaoh7OCsbcorWxbMb9Dhlg0khLq9KOxk&downloadName=Untitled.png"/></a>
            <br />
            <a href="https://github.com/yeaaaaahhhhh">김예현</a>
        </td>
        <td align="center" width="200px">
            <a href="https://github.com/KINHYEONJI"><img height="150" width="100px" src="https://file.notion.so/f/f/160592ad-dc63-481b-8566-2afbd2df9f93/d48b1d41-9428-480a-b9b1-4dcad278e54e/Untitled.png?id=f7eba59a-9657-4b50-b4c9-27d274677d36&table=block&spaceId=160592ad-dc63-481b-8566-2afbd2df9f93&expirationTimestamp=1712282400000&signature=tmYelULG-S_piP0IpnY3rNLbCvqLIY0qZ_Je0iAwMcA&downloadName=Untitled.png"/></a>
            <br />
            <a href="https://github.com/KINHYEONJI">김현지</a>
        </td>
        <td align="center" width="200px">
            <a href="https://github.com/Jaeseon95"><img height="150px" width="100px" src="https://file.notion.so/f/f/160592ad-dc63-481b-8566-2afbd2df9f93/13879bd8-fcd4-4655-9142-9a2352b78c98/Untitled.png?id=27017017-96b3-4d69-86a2-d7f44d05006c&table=block&spaceId=160592ad-dc63-481b-8566-2afbd2df9f93&expirationTimestamp=1712282400000&signature=VusIK4gMdpRLIy5O7wFGO2GnqO0Hn2ZlB7neGMZXblU&downloadName=Untitled.png"/></a>
            <br />
            <a href="https://github.com/Jaeseon95">박재선</a>
        </td>
    </tr>
    <tr height="30px">
        <td align="center">
            Back-End
            <br />
        </td>
        <td align="center">
            Front-End    
        </td>
        <td align="center">
            AI Modeling
        <br>
        </td>
    </tr>
    <tr height="160px">
        <td align="center" width="200px">
            <a href="https://github.com/fangdol888"><img height="150" width="100" src="https://file.notion.so/f/f/160592ad-dc63-481b-8566-2afbd2df9f93/5c60b1b8-92c1-4bc9-9121-fc25b1c64923/Untitled.png?id=4f9e3fac-2c1e-41b4-920f-cf98ed3c29a6&table=block&spaceId=160592ad-dc63-481b-8566-2afbd2df9f93&expirationTimestamp=1712282400000&signature=zRijfhxtPaN8T83fBQxA-vf_Kenm0s3namhHu7TCiws&downloadName=Untitled.png"/></a>
            <br />
            <a href="https://github.com/fangdol888">백승윤</a>
        </td>
        <td align="center" width="200px">
            <a href="https://github.com/dokuny"><img height="150" width="100px" src="https://file.notion.so/f/f/160592ad-dc63-481b-8566-2afbd2df9f93/bd3d1918-c534-4ced-8872-58436bd624c3/Untitled.png?id=19a688bc-e3c5-4ed7-8b0c-10832964402d&table=block&spaceId=160592ad-dc63-481b-8566-2afbd2df9f93&expirationTimestamp=1712282400000&signature=cEZV2y5J3UW9vnZHRlhMCL4zlAvCKGfq0-ICnKPHFF0&downloadName=Untitled.png"/></a>
            <br />
            <a href="https://github.com/dokuny">이도훈</a>
        </td>
        <td align="center" width="200px">
            <a href="https://github.com/sejinnnnnn"><img height="150px" width="100px" src="https://file.notion.so/f/f/160592ad-dc63-481b-8566-2afbd2df9f93/9a1f854e-b922-4e06-891e-ca91e78ad3f1/Untitled.png?id=3fbf6dc8-cf0a-4bcc-bb78-0a4b1623e7b4&table=block&spaceId=160592ad-dc63-481b-8566-2afbd2df9f93&expirationTimestamp=1712282400000&signature=TVw8h3GwigRX74FIC0Ll1hCDK15R4lCxHB7oLWLCOiU&downloadName=Untitled.png"/></a>
            <br />
            <a href="https://github.com/sejinnnnnn">천세진</a>
        </td>
    </tr>
    <tr height="30px">
        <td align="center">
            CI/CD
            <br />
            Model Serving
        </td>
        <td align="center">
            Back-End
            <br />
            Prompt Engineering
        </td>
        <td align="center">
            CI/CD
           <br />
            Prompt Engineering
        </td>
    </tr>
<table>
</center> -->

| ![김예현](./docs/예현.png) | ![김현지](./docs/현지.png) | ![박재선](./docs/재선.png) |
|:---:|:---:|:---:|
| [김예현](https://github.com/yeaaaaahhhhh) | [김현지](https://github.com/KINHYEONJI) | [박재선](https://github.com/Jaeseon95) |
| Back-End | Front-End | AI Modeling |


| ![백승윤](./docs/승윤.png) | ![이도훈](./docs/도훈.png) | ![천세진](./docs/세진.png) |
|:---:|:---:|:---:|
| [백승윤](https://github.com/fangdol888) | [이도훈](https://github.com/dokuny) | [천세진](https://github.com/sejinnnnnn) |
| CI/CD<br/>Model Serving | Back-End<br/>Prompt Engineering | CI/CD<br/>Prompt Engineering |

<br>

# 4️⃣ 레퍼런스
[Huggingface - diffusers](https://huggingface.co/docs/diffusers/index)  
[DreamBooth: Fine Tuning Text-to-Image Diffusion Models for Subject-Driven Generation](https://dreambooth.github.io/)  
[LoRA: Low-Rank Adaptation of Large Language Models](https://github.com/microsoft/LoRA)  
[clip-interrogator](https://github.com/pharmapsychotic/clip-interrogator)


<!--URLS-->
[license-url]: LICENSE.md
[contribution-url]: CONTRIBUTION.md
[readme-eng-url]: ../README.md
