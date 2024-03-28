package com.ssaida.backend.haru.service;

import com.ssaida.backend.common.BadRequestException;
import com.ssaida.backend.common.ConflictException;
import com.ssaida.backend.common.ErrorCode;
import com.ssaida.backend.common.NotFoundException;
import com.ssaida.backend.common.bucket.BucketClient;
import com.ssaida.backend.family.entity.Member;
import com.ssaida.backend.family.repository.MemberRepository;
import com.ssaida.backend.haru.dto.CreateAnswerRequest;
import com.ssaida.backend.haru.entity.Answer;
import com.ssaida.backend.haru.entity.DailyRecord;
import com.ssaida.backend.haru.entity.Question;
import com.ssaida.backend.haru.repository.AnswerRepository;
import com.ssaida.backend.haru.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Service
@RequiredArgsConstructor
public class AnswerServiceImpl implements AnswerService {
    final private AnswerRepository answerRepository;
    final private QuestionRepository questionRepository;
    final private MemberRepository memberRepository;
    final private BucketClient bucketClient;
    @Override
    public void createAnswer(CreateAnswerRequest createAnswerRequest) {

        if (answerRepository.findByMemberIdAndCreatedAtBetween(createAnswerRequest.getMemberId(), LocalDate.now().atStartOfDay(), LocalDate.now().atTime(LocalTime.MAX))
                .isPresent()) {
            throw new ConflictException(ErrorCode.AnswerAlreadyExistsException);
        }

        Member member = memberRepository.findById(createAnswerRequest.getMemberId())
                .orElseThrow(() -> new NotFoundException(ErrorCode.MemberNotFoundException));
        Question question = questionRepository.findById(createAnswerRequest.getQuestionId())
                .orElseThrow(() -> new NotFoundException(ErrorCode.QuestionNotFoundException));


        MockMultipartFile image =
                new MockMultipartFile("answer", "answer.jpg",
                        MediaType.IMAGE_JPEG_VALUE,
                        org.apache.commons.codec.binary.Base64.decodeBase64(createAnswerRequest.getImage()));
        try {
            String imageUrl = bucketClient.uploadImage(image);

            Answer answer = Answer.builder()
                    .member(member)
                    .question(question)
                    .url(imageUrl)
                    .build();
            answerRepository.save(answer);
        } catch (IOException e) {
            throw new BadRequestException(ErrorCode.ImageNotAvailableException);
        }
    }

    @Override
    public void deleteAnswer(Long answerId) {
        answerRepository.deleteById(answerId);
    }
}
