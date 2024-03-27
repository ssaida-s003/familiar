package com.ssaida.backend.haru.service;

import com.ssaida.backend.common.ai.StableDiffusionApiClient;
import com.ssaida.backend.common.prompt.PromptGenerator;
import com.ssaida.backend.haru.dto.ConvertRecordRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ConvertHaruServiceImpl implements ConvertHaruService {
    private final PromptGenerator promptGenerator;
    private final StableDiffusionApiClient stableDiffusionApiClient;

    @Override
    public String convertHaru(ConvertRecordRequest convertRecordRequest) {

        String prompt = promptGenerator.generateConvertHaruPrompt(convertRecordRequest.getContent());

        return stableDiffusionApiClient.convertHaru(convertRecordRequest.getMemberId(), prompt);
    }
}
