package com.ssaida.backend.haru.dto;

import com.ssaida.backend.family.entity.Member;
import com.ssaida.backend.haru.entity.Answer;
import com.ssaida.backend.haru.entity.Question;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


public class QuestionDto {
    @Getter
    @NoArgsConstructor
    public static class Response {
        private Long questionId;
        private int memberId;
        private String content;
        private List<AnswerDto> answers = new ArrayList<>();

        public Response(Question question) {
            this.questionId = question.getId();
            this.memberId = question.getMember().getId();
            this.content = question.getContent();
            this.answers = question.getAnswers().stream()
                    .map(answer -> new AnswerDto(answer))
                    .collect(Collectors.toList());
        }
    }

    @Getter
    public static class AnswerDto {
        private Long id;

        private int memberId;

        private String url;

        public AnswerDto(Answer answer) {
            this.id = answer.getId();
            this.memberId = answer.getMember().getId();
            this.url = answer.getUrl();
        }
    }
}