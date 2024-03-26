package com.ssaida.backend.common.ai;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.service.annotation.HttpExchange;
import org.springframework.web.service.annotation.PostExchange;

@HttpExchange(url = "http://localhost:8000")
public interface StableDiffusionApiClient {

    @PostExchange(url = "/drawing/style-transfer")
    String convertImage(@RequestBody Img2ImgRequest request);

    @PostExchange(url = "/diaries")
    byte[] convertHaru(@RequestParam("memberId") int memberId, @RequestParam("prompt") String prompt);

}

