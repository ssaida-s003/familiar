package com.ssaida.backend.haru.controller;


import com.ssaida.backend.haru.dto.GetRecordRequest;
import com.ssaida.backend.haru.service.FamilyHaruService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/families/{familyId}/haru")
@RequiredArgsConstructor
@Slf4j
public class FamilyHaruController {
    final FamilyHaruService familyHaruService;

    @GetMapping
    @Operation(summary = "월별 일상공유(기록,질문,답변) 조회")
    public ResponseEntity<List> getMonthlyHaru(@Parameter(description = "가족 ID") @PathVariable("familyId") int familyId,
                                               @RequestParam("연월 YYYY-MM") String month) {
        log.info("getMonthlyHaru 입력: {} {}", familyId, month);

        return new ResponseEntity<>(familyHaruService.getMonthlyHaru(familyId, month), HttpStatus.OK);
    }

    @GetMapping("/records")
    @Operation(summary = "하루 기록 조회")
    public ResponseEntity<List> getRecords(@Parameter(description = "가족 ID") @PathVariable("familyId") int familyId,
                                           @RequestParam("date") LocalDate date) {
        //TODO: String으로 바꾸고 date 포맷 안맞으면 400 발생시키기
        log.info("getFamilyRecords 입력: {} {}", familyId, date);
        GetRecordRequest getRecordRequest = GetRecordRequest.builder()
                .familyId(familyId)
                .date(date).build();
        return new ResponseEntity<>(familyHaruService.getFamilyRecord(getRecordRequest), HttpStatus.OK);
    }


}
