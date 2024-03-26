package com.ssaida.backend.haru.controller;


import com.ssaida.backend.haru.dto.CreateQuestionRequest;
import com.ssaida.backend.haru.service.QuestionService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/haru/questions")
@RequiredArgsConstructor
@Slf4j
public class QuestionController {
    final private QuestionService questionService;

    @PostMapping
    @Operation(summary = "질문 생성")
    public ResponseEntity<Void> createQuestion(
            @Parameter(description = "멤버Id,질문 내용") @RequestBody CreateQuestionRequest createQuestionRequest) {
        log.info("createQuestion 입력 : {}", createQuestionRequest);

        questionService.createQuestion(createQuestionRequest);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{questionId}")
    @Operation(summary = "질문 삭제")
    public ResponseEntity<Void> deleteQuestion(
            @Parameter(description = "질문 Id") @PathVariable("questionId") long questionId
    ) {
        log.info("deleteQuestion 입력 : {}",questionId);
        questionService.deleteQuestion(questionId);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
