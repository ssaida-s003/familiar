package com.ssaida.backend.haru.service;

import com.ssaida.backend.haru.dto.CreateQuestionRequest;

public interface QuestionService {
    void createQuestion(CreateQuestionRequest createQuestionRequest);
    void deleteQuestion(Long questionId);
}
