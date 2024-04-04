package com.ssaida.backend.common.prompt;

import com.ssaida.backend.common.prompt.records.response.GeminiResponse;

public interface PromptGenerator {

    String generateConvertDrawingPrompt(String title, String artStyle);

    String generateConvertHaruPrompt(Integer memberId, String content);

    GeminiResponse getPrompt(String inputText);
}
