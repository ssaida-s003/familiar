package com.ssaida.backend.haru.service;

import com.ssaida.backend.common.ConflictException;
import com.ssaida.backend.common.ErrorCode;
import com.ssaida.backend.common.NotFoundException;
import com.ssaida.backend.family.entity.Member;
import com.ssaida.backend.family.repository.MemberRepository;
import com.ssaida.backend.haru.dto.CreateQuestionRequest;
import com.ssaida.backend.haru.entity.Question;
import com.ssaida.backend.haru.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class QuestionServiceImpl implements QuestionService {
    final private QuestionRepository questionRepository;
    final private MemberRepository memberRepository;

    @Override
    public void createQuestion(CreateQuestionRequest createQuestionRequest) {

        Member member = memberRepository.findById(createQuestionRequest.getMemberId())
                .orElseThrow(() -> new NotFoundException(ErrorCode.MemberNotFoundException));

        if (questionRepository.findByFamilyIdAndDate(member.getFamily().getId(), LocalDate.now()).isPresent()) {
            throw new ConflictException(ErrorCode.QuestionAlreadyExistsException);
        }

        Question question = Question.builder()
                .member(member)
                .content(createQuestionRequest.getContent())
                .build();
        questionRepository.save(question);
    }

    @Override
    public void deleteQuestion(Long questionId) {
        questionRepository.deleteById(questionId);
    }
}
