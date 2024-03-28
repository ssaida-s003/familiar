package com.ssaida.backend.common.prompt.impl;

import com.ssaida.backend.common.ErrorCode;
import com.ssaida.backend.common.NotFoundException;
import com.ssaida.backend.common.prompt.PromptGenerator;
import com.ssaida.backend.common.prompt.PromptValues;
import com.ssaida.backend.common.prompt.records.Part;
import com.ssaida.backend.common.prompt.records.request.*;
import com.ssaida.backend.common.prompt.records.response.GeminiResponse;
import com.ssaida.backend.common.traslator.LanguageTranslator;
import com.ssaida.backend.family.entity.Member;
import com.ssaida.backend.family.repository.MemberRepository;
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

    private final MemberRepository memberRepository;

    private String MAIN_PROMPT = PromptValues.MAIN_PROMPT;
    private final Double TEMPERATURE = PromptValues.TEMPERATURE;
    private final Integer examplesCount = PromptValues.examplesCount;
    private final List<String> inputExamples = PromptValues.inputExamples;
    private final List<String> outputExamples = PromptValues.outputExamples;


    @Override
    public String generateConvertDrawingPrompt(String title, String artStyle) {

        String translatedTitle = languageTranslator.translateToEnglish(title);

        return "((" + translatedTitle + "))" + ", ((" + artStyle + "))";
    }

    @Override
    public String generateConvertHaruPrompt(Integer memberId, String content) {
        String generatedPrompt = getPrompt(content)
                .candidates().get(0)
                .content()
                .parts().get(0)
                .text();

        Member member = memberRepository.getMemberById(memberId).orElseThrow(RuntimeException::new);

        StringBuilder haruPromptBuilder = new StringBuilder();
        haruPromptBuilder.append("a photo of ")
                .append(member.getUniqueToken()).append(" ").append(member.getClassToken()).append(", ")
                .append(generatedPrompt).append(", ")
                .append(PromptValues.POST_PROMPT);

        return haruPromptBuilder.toString();
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
