package com.ssaida.backend.family.controller;

import com.ssaida.backend.family.dto.GetFridgeColorResponse;
import com.ssaida.backend.family.service.FridgeService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/families/{familyId}/fridge")
@RequiredArgsConstructor
@Slf4j
public class FridgeController {

    final private FridgeService fridgeService;

    @GetMapping
    @Operation(summary = "냉장고 색상 조회")
    public ResponseEntity<GetFridgeColorResponse> getFridgeColor(@Parameter(description = "가족Id") @PathVariable("familyId") int familyId) {
        log.info("getFridgeColor 입력 : {}", familyId);
        return new ResponseEntity(fridgeService.getFridgeColor(familyId), HttpStatus.OK);
    }
}
