package com.ssaida.backend.common.prompt.impl;

import com.ssaida.backend.common.prompt.PromptGenerator;
import com.ssaida.backend.common.prompt.records.Part;
import com.ssaida.backend.common.prompt.records.request.*;
import com.ssaida.backend.common.prompt.records.response.GeminiResponse;
import com.ssaida.backend.common.traslator.LanguageTranslator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RequiredArgsConstructor
@Component
@Slf4j
public class PromptGeneratorImpl implements PromptGenerator {

    @Value("${gemini.api-key}")
    private String apiKey;

    private final LanguageTranslator languageTranslator;

    private final String MAIN_PROMPT = "입력하는 일기 문단에 해당하는 내용으로 Stable Diffusion 이미지를 생성할 수 있게 Prompt를 생성해 줘.\n" +
            "Prompt는 영어로 생성해 줘.\n" +
            "행동을 묘사한다기 보다는, 일기에 대한 분위기와 장소를 중점적으로 만들어 줘.\n" +
            "문장보다는 키워드 별로 끊어서 만들어 줘.\n" +
            "피사체는 한 명으로 고정해 줘.\n" +
            "다른 문자열 없이, prompt만 제공해 줘.";

    private final Double TEMPERATURE = 0.2;

    private final Integer examplesCount = 6;

    private final List<String> inputExamples = List.of(
            "girl : 오늘 친구와 피자를 먹었어.",
            "man : 오늘 회사 동료들과 회식을 했어.",
            "girl : 오늘은 공원에서 산책을 했어. 날씨가 너무 좋았어.",
            "girl : 오늘은 영화관에서 영화를 봤어. 팝콘이 맛있었어.",
            "girl : 친구와 치킨집에서 후라이드 치킨과 맥주를 먹었어.",
            "girl : 오늘은 계속 학원에만 있었어."
    );

    private final List<String> outputExamples = List.of(
            "solitary girl, cozy dining atmosphere, pizza on table, warm indoor lighting, feeling of contentment, casual setting",
            "solitary man, corporate dinner setting, warm ambient lighting, table with various dishes, feeling of camaraderie, formal dining atmosphere",
            "peaceful park, sunny day, walking alone, clear blue sky, cheerful mood, outdoor leisure, beautiful nature scene",
            "solitary girl, movie theater ambiance, dim lighting, popcorn in hand, cinematic experience, feeling of excitement, casual entertainment setting",
            "solitary girl, fried chicken and beer on table, chicken restaurant ambiance, casual dining, enjoyment, warm indoor lighting, friendly atmosphere",
            "solitary girl, educational setting, indoor classroom, focused atmosphere, academic environment, study materials on desk, quiet ambiance"
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

    public GeminiResponse getPrompt(String inputText) {
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
        partList.add(new Part(MAIN_PROMPT));
        for (int i = 0; i < examplesCount; i++) {
            partList.add(new Part("input: " + inputExamples.get(i)));
            partList.add(new Part("output: " + outputExamples.get(i)));
        }
        partList.add(new Part("input: " + inputText));

        RequestContent content = new RequestContent(partList);

        return new GeminiRequest(List.of(content), generationConfig, safetySettings);
    }


}
