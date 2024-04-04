package com.ssaida.backend.haru.service;

import com.ssaida.backend.common.ai.StableDiffusionApiClient;
import com.ssaida.backend.common.ai.Txt2ImgRequest;
import com.ssaida.backend.common.prompt.PromptGenerator;
import com.ssaida.backend.haru.dto.ConvertRecordRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class ConvertHaruServiceImpl implements ConvertHaruService {
    private final PromptGenerator promptGenerator;
    private final StableDiffusionApiClient stableDiffusionApiClient;

    @Override
    public String convertHaru(ConvertRecordRequest convertRecordRequest) {

        String prompt = promptGenerator.generateConvertHaruPrompt(convertRecordRequest.getMemberId(), convertRecordRequest.getContent());
        log.info(prompt);
        String image=stableDiffusionApiClient.convertHaru(new Txt2ImgRequest(convertRecordRequest.getMemberId(), prompt));
//        log.info(image);

        return image;
    }
}
