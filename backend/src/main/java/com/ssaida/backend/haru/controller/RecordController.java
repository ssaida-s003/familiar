package com.ssaida.backend.haru.controller;

import com.ssaida.backend.haru.dto.ConvertRecordRequest;
import com.ssaida.backend.haru.dto.CreateRecordRequest;
import com.ssaida.backend.haru.service.RecordService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/haru/records")
@RequiredArgsConstructor
@Slf4j
public class RecordController {

    final RecordService recordService;

    @PostMapping
    @Operation(summary = "하루 기록 생성")
    ResponseEntity<Void> createRecord(
            @Parameter(description = "멤버 ID, 하루일상공유 내용") @RequestBody CreateRecordRequest createRecordRequest) {
        log.info("createRecord 입력 : {}", createRecordRequest);
        recordService.createRecord(createRecordRequest);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{recordId}")
    @Operation(summary = "하루 기록 삭제")
    ResponseEntity<Void> deleteRecord(
            @Parameter(description = "삭제할 기록 Id") @PathVariable("recordId") long recordId
    ) {
        log.info("deleteRecord 입력 : {}", recordId);
        recordService.deleteRecord(recordId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
