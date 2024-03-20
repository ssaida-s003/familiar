package com.ssaida.backend.haru.controller;


import com.ssaida.backend.haru.dto.GetRecordRequest;
import com.ssaida.backend.haru.service.HaruService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@RestController
@RequestMapping("/families/{family_id}/haru")
@RequiredArgsConstructor
@Slf4j
public class FamilyHaruController {
    final HaruService haruService;

    @GetMapping("/records")
    @Operation(summary = "하루 일기 조회")
    public ResponseEntity<Map> getRecords(@Parameter(description = "가족 ID") @PathVariable("family_id") int familyId,
                                                @RequestParam("date") LocalDate date) {
        log.info("getFamilyRecords 입력 : {} {}", familyId, date);
        GetRecordRequest getRecordRequest = GetRecordRequest.builder()
                .familyId(familyId)
                .date(date).build();
        Map<String, Object> resultMap = haruService.getFamilyRecord(getRecordRequest);
        return new ResponseEntity<>(resultMap, HttpStatus.OK);
    }
}
