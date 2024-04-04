package com.ssaida.backend.haru.controller;


import com.ssaida.backend.haru.dto.GetRecordRequest;
import com.ssaida.backend.haru.dto.QuestionDto;
import com.ssaida.backend.haru.entity.Question;
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

    @GetMapping("/monthly")
    @Operation(summary = "월별 일상공유(기록,질문,답변) 조회")
    public ResponseEntity<List> getMonthlyHaru(@Parameter(description = "가족 ID") @PathVariable("familyId") int familyId,
                                               @Parameter(description = "조회연월 yyyy-MM") @RequestParam("month") String month) {
        log.info("getMonthlyHaru 입력: {} {}", familyId, month);

        return new ResponseEntity<>(familyHaruService.getMonthlyHaru(familyId, month), HttpStatus.OK);
    }

    @GetMapping("/records")
    @Operation(summary = "하루 기록 조회")
    public ResponseEntity<List> getRecords(@Parameter(description = "가족 ID") @PathVariable("familyId") int familyId,
                                           @Parameter(description = "조회일자 yyyy-MM-dd") @RequestParam("date") LocalDate date) {
        log.info("getFamilyRecords 입력: {} {}", familyId, date);
        GetRecordRequest getRecordRequest = GetRecordRequest.builder()
                .familyId(familyId)
                .date(date).build();
        return new ResponseEntity<>(familyHaruService.getFamilyRecord(getRecordRequest), HttpStatus.OK);
    }

    @GetMapping("/questions")
    @Operation(summary = "하루 질문 조회")
    public ResponseEntity<QuestionDto.Response> getQuestion(
            @Parameter(description = "가족Id") @PathVariable("familyId") int familyId,
            @Parameter(description = "조회일자 yyyy-MM-dd") @RequestParam("date") LocalDate date) {
        log.info("getQuestion 입력: {} {}", familyId, date);
        return new ResponseEntity<>(familyHaruService.getQuestion(familyId, date), HttpStatus.OK);
    }


}
