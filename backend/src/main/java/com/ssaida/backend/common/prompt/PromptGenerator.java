package com.ssaida.backend.common.prompt;

public interface PromptGenerator {

    String generateConvertDrawingPrompt(String title, String artStyle);

    String generateConvertHaruPrompt(String content);
}
