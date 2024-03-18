package com.ssaida.backend.haru.controller;

import com.ssaida.backend.haru.dto.CreateRecordRequest;
import com.ssaida.backend.haru.service.HaruService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/haru")
@RequiredArgsConstructor
@Slf4j
public class HaruController {

    final HaruService haruService;
    @PostMapping("/record")
    @Operation(summary = "하루 일상 기록 생성")
    ResponseEntity<Void> createRecord(
            @Parameter(description = "멤버 ID, 하루일상공유 내용") @RequestBody
            CreateRecordRequest createRecordRequest)
    {
        log.info("createRecord 입력 : {}",createRecordRequest);
        try{
            haruService.createRecord(createRecordRequest);
        }catch (Exception e)
        {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
