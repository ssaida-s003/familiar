package com.ssaida.backend.common.prompt.impl;

import com.ssaida.backend.common.prompt.PromptGenerator;
import com.ssaida.backend.common.prompt.records.Part;
import com.ssaida.backend.common.prompt.records.request.*;
import com.ssaida.backend.common.prompt.records.response.GeminiResponse;
import com.ssaida.backend.common.traslator.LanguageTranslator;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RequiredArgsConstructor
@Component
public class PromptGeneratorImpl implements PromptGenerator {

    @Value("${gemini.api-key}")
    private String apiKey;

    private final LanguageTranslator languageTranslator;

    private final String MAINPROMPT = "입력하는 일기 문단에 해당하는 내용으로 Stable Diffusion 이미지를 생성할 수 있게 영어로 Prompt를 생성해 줘.\n" +
            "Prompt는 영어로, 내용을 키워드 별로 끊어서 쉼표로 연결해서 만들어 줘.\n" +
            "최대한 구체적이게 단어들을 끊어 주고, 세부적으로 묘사해야 해.\n" +
            "다른 문자열 없이, prompt만 제공해 줘.";

    private final Double TEMPERATURE = 0.2;

    private final Integer examplesCount = 0;

    private final List<String> inputExamples = List.of(

    );
    private final List<String> outputExamples = List.of(

    );


    @Override
    public String generateConvertDrawingPrompt(String title, String artStyle) {

        String translatedTitle = languageTranslator.translateToEnglish(title);

        return "((" + translatedTitle + "))" + ", ((" + artStyle + "))";
    }

    @Override
    public String generateConvertHaruPrompt(Integer memberId, String content) {
        String translatedContent = languageTranslator.translateToEnglish(content);
        return "a photo of sks, person, " + translatedContent + ", best quality, 4k, uhd";
    }

    private GeminiResponse getPrompt(String inputText) {
        GeminiRequest request = buildRequest(inputText, TEMPERATURE);

        WebClient webClient = WebClient.create("https://generativelanguage.googleapis.com");

        return webClient.post()
                .uri(uriBuilder -> uriBuilder
                        .path("/v1beta/models/gemini-1.0-pro:generateContent")
                        .queryParam("key", apiKey)
                        .build())
                .body(BodyInserters.fromValue(request))
                .retrieve()
                .bodyToMono(GeminiResponse.class)
                .block();
    }

    private GeminiRequest buildRequest(String inputText, double temperature) {
        GenerationConfig generationConfig = new GenerationConfig(temperature, 1, 1, 2048, Collections.emptyList());

        List<SafetySetting> safetySettings = List.of(
                new SafetySetting("HARM_CATEGORY_HARASSMENT", "BLOCK_MEDIUM_AND_ABOVE"),
                new SafetySetting("HARM_CATEGORY_HATE_SPEECH", "BLOCK_MEDIUM_AND_ABOVE"),
                new SafetySetting("HARM_CATEGORY_SEXUALLY_EXPLICIT", "BLOCK_MEDIUM_AND_ABOVE"),
                new SafetySetting("HARM_CATEGORY_DANGEROUS_CONTENT", "BLOCK_MEDIUM_AND_ABOVE"));

        List<Part> partList = new ArrayList<>();
        partList.add(new Part(MAINPROMPT));
        for (int i = 0; i < examplesCount; i++) {
            partList.add(new Part("input: " + inputExamples.get(i)));
            partList.add(new Part("output: " + outputExamples.get(i)));
        }
        partList.add(new Part("input: " + inputText));

        RequestContent content = new RequestContent(partList);

        return new GeminiRequest(List.of(content), generationConfig, safetySettings);
    }


}
