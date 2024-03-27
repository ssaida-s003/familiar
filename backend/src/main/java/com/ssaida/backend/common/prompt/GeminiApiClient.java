package com.ssaida.backend.common.prompt;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.service.annotation.HttpExchange;
import org.springframework.web.service.annotation.PostExchange;

@HttpExchange(url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.0-pro:generateContent")
public interface GeminiApiClient {

//    @PostExchange
//    @ResponseBody
//    GeminiResponse getGeminiPrompt(@RequestParam)


}
