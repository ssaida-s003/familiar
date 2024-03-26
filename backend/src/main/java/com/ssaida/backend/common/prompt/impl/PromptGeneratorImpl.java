package com.ssaida.backend.common.prompt.impl;

import com.ssaida.backend.common.prompt.PromptGenerator;
import com.ssaida.backend.common.traslator.LanguageTranslator;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class PromptGeneratorImpl implements PromptGenerator {

    @Value("${gemini.api-key}")
    private String apiKey;

    private final LanguageTranslator languageTranslator;

    @Override
    public String generateConvertDrawingPrompt(String title, String artStyle) {

        String translatedTitle = languageTranslator.translateToEnglish(title);

        return "((" + translatedTitle + "))" + ", ((" + artStyle + "))";
    }

    @Override
    public String generateConvertHaruPrompt(String content) {
        String translatedContent = languageTranslator.translateToEnglish(content);
        return "a photo of sks, person, " + translatedContent + ", best quality, 4k, uhd";
    }
}
