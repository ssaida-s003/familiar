package com.ssaida.backend.haru.controller;

import com.ssaida.backend.haru.dto.CreateAnswerRequest;
import com.ssaida.backend.haru.service.AnswerService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/haru/answers")
@RequiredArgsConstructor
@Slf4j
public class AnswerController {

    final private AnswerService answerService;

    @PostMapping
    @Operation(summary = "답변 생성")
    public ResponseEntity<Void> createAnswer(
            @Parameter(description = "멤버Id,질문Id,url") @RequestBody CreateAnswerRequest createAnswerRequest
    ) {
        log.info("createAnswer 입력 : {}", createAnswerRequest);
        answerService.createAnswer(createAnswerRequest);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{answerId}")
    @Operation(summary = "답변 삭제")
    public ResponseEntity<Void> deleteAnswer(
            @Parameter(description = "답변Id") @PathVariable("answerId") Long answerId
    ) {
        log.info("deleteAnswer 입력 : {} ", answerId);
        answerService.deleteAnswer(answerId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
