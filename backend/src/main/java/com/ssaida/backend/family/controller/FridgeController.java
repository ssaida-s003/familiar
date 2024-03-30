package com.ssaida.backend.family.controller;

import com.ssaida.backend.family.dto.GetFridgeColorResponse;
import com.ssaida.backend.family.dto.PutFridgeColorRequest;
import com.ssaida.backend.family.service.FridgeService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/families/{familyId}/fridge")
@RequiredArgsConstructor
@Slf4j
public class FridgeController {

    final private FridgeService fridgeService;

    @GetMapping
    @Operation(summary = "냉장고 매칭 색상 조회")
    public ResponseEntity<String> getFridgeColor(@Parameter(description = "가족Id") @PathVariable("familyId") int familyId) {
        log.info("getFridgeColor 입력 : {}", familyId);
        return new ResponseEntity(fridgeService.getFridgeColor(familyId), HttpStatus.OK);
    }

    @PutMapping
    @Operation(summary = "냉장고 색상 입력, 매칭되는 배경화면 색 출력")
    public ResponseEntity<String> putFridgeColor(@Parameter(description = "가족Id") @PathVariable("familyId") int familyId,
                                                 @Parameter(description = "위치별 색상코드") @RequestBody PutFridgeColorRequest putFridgeColorRequest)
    {
        log.info("putFridgeColor 입력 : {} {}", familyId,putFridgeColorRequest);
        return new ResponseEntity<>(fridgeService.putFridgeColor(familyId,putFridgeColorRequest),HttpStatus.OK);
    }
}
