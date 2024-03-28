package com.ssaida.backend.haru.controller;

import com.ssaida.backend.common.prompt.PromptGenerator;
import com.ssaida.backend.common.prompt.records.response.GeminiResponse;
import com.ssaida.backend.haru.dto.ConvertRecordRequest;
import com.ssaida.backend.haru.service.ConvertHaruService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/haru/convert")
@RequiredArgsConstructor
@Slf4j
public class ConvertHaruController {
    final private ConvertHaruService convertHaruService;

    private final PromptGenerator promptGenerator;


    @PatchMapping
    @Operation(summary = "일상공유(기록,답변) 그림 변환")
    ResponseEntity<String> convertRecord(
            @Parameter(description = "기록 혹은 답변을 한 멤버Id, 내용") @RequestBody ConvertRecordRequest convertRecordRequest
    ) {
        log.info("convertRecord 입력 : {}", convertRecordRequest);
        return new ResponseEntity<>(convertHaruService.convertHaru(convertRecordRequest), HttpStatus.OK);
    }


    @GetMapping("/test")
    @Operation(summary = "Gemini 프롬프트 생성 테스트")
    public ResponseEntity<GeminiResponse> testPrompt(@RequestParam String inputText) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(promptGenerator.getPrompt(inputText));
    }
    
    @GetMapping("/final-prompt")
    @Operation(summary = "DreamBooth 키워드 + 생성 프롬프트 + Post 프롬프트 테스트")
    public ResponseEntity<String> testFullPrompt(@RequestParam Integer memberId, @RequestParam String inputText) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(promptGenerator.generateConvertHaruPrompt(memberId, inputText));
    }
    
    
}
