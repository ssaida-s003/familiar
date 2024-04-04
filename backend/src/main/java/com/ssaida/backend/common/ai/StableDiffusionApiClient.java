package com.ssaida.backend.common.ai;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.service.annotation.HttpExchange;
import org.springframework.web.service.annotation.PostExchange;

@HttpExchange(url = "https://ssaida-ai.duckdns.org")
public interface StableDiffusionApiClient {

    @PostExchange(url = "/drawing/style-transfer")
    String convertImage(@RequestBody Img2ImgRequest request);

    @PostExchange(url = "/diaries")
    String convertHaru(@RequestBody Txt2ImgRequest request);

}

