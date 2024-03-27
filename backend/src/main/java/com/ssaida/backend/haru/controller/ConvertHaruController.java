package com.ssaida.backend.haru.controller;

import com.ssaida.backend.haru.dto.ConvertRecordRequest;
import com.ssaida.backend.haru.service.ConvertHaruService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/haru/convert")
@RequiredArgsConstructor
@Slf4j
public class ConvertHaruController {
    final private ConvertHaruService convertHaruService;

    @PatchMapping
    @Operation(summary = "일상공유(기록,답변) 그림 변환")
    ResponseEntity<String> convertRecord(
            @Parameter(description = "기록 혹은 답변을 한 멤버Id, 내용") @RequestBody ConvertRecordRequest convertRecordRequest
    ) {
        log.info("convertRecord 입력 : {}", convertRecordRequest);
        return new ResponseEntity<>(convertHaruService.convertHaru(convertRecordRequest), HttpStatus.OK);
    }
}
