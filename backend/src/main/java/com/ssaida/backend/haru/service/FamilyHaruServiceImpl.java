package com.ssaida.backend.haru.service;

import com.ssaida.backend.common.BadRequestException;
import com.ssaida.backend.common.ErrorCode;
import com.ssaida.backend.haru.dto.*;
import com.ssaida.backend.haru.entity.DailyRecord;
import com.ssaida.backend.haru.entity.Question;
import com.ssaida.backend.haru.repository.AnswerRepository;
import com.ssaida.backend.haru.repository.QuestionRepository;
import com.ssaida.backend.haru.repository.RecordRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.YearMonth;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class FamilyHaruServiceImpl implements FamilyHaruService {
    private final RecordRepository recordRepository;
    private final QuestionRepository questionRepository;


    @Override
    public List<GetMonthlyHaruResponse> getMonthlyHaru(int familyId, String month) {
        //입력값 검증
        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM");
        YearMonth yearMonth = null;
        try {
            yearMonth = YearMonth.parse(month);
        } catch (DateTimeParseException e) {
            // 예외가 발생하면 잘못된 형식으로 간주
            throw new BadRequestException(ErrorCode.InvalidMonthFormatException);
        }

        Map<LocalDate, MonthlyContentDto> contentMap = new HashMap<>();

        //기록,질문,답변을 따로 조회하여 날짜를 기준으로 갯수 모으기
        //기록 조회

        List<DailyRecord> recordCount = recordRepository.findAllByMonthAndFamilyId(familyId, yearMonth.getYear(), yearMonth.getMonthValue());
        Map<LocalDate, List<DailyRecord>> recordMap = recordCount.stream().collect(Collectors.groupingBy(dailyRecord -> dailyRecord.getCreatedAt().toLocalDate()));
        log.info("월간 record 조회 : {}", recordMap);

        //조회 결과를 MonthlyContentDto에 넣기
        for (Map.Entry<LocalDate, List<DailyRecord>> entry : recordMap.entrySet()) {
            MonthlyContentDto monthlyContentDto = new MonthlyContentDto();
            monthlyContentDto.setRecordCount(entry.getValue().size());
            // 기록이 있으면 질문,답변이 없으므로 첫번째 기록의 url 저장
            monthlyContentDto.setUrl(entry.getValue().get(0).getUrl());
            contentMap.put(entry.getKey(), monthlyContentDto);
        }

        //질문 조회
        // TODO: 질문,답변 결과 받기
        List<Question> questionCount = questionRepository.findAllByMonthAndFamilyId(familyId, yearMonth.getYear(), yearMonth.getMonthValue());

        log.info("월간 question 조회 : {}", questionCount);

        //질문, 질문에 대한 답변 조회 결과를 MonthlyContentDto에 넣기
        for (Question question : questionCount) {
            MonthlyContentDto monthlyContentDto = new MonthlyContentDto();
            monthlyContentDto.setQuestionCount(1);
            monthlyContentDto.setAnswerCount(question.getAnswers().size());
            if (question.getAnswers().size() > 0) {
                monthlyContentDto.setUrl(question.getAnswers().get(0).getUrl());
            }
            contentMap.put(question.getCreatedAt().toLocalDate(), monthlyContentDto);
        }


        List<GetMonthlyHaruResponse> resultList = contentToMonthlyResult(contentMap);

        return resultList;
    }

    private List<GetMonthlyHaruResponse> contentToMonthlyResult(Map<LocalDate, MonthlyContentDto> content) {
        List<GetMonthlyHaruResponse> result = new ArrayList<>();
        for (Map.Entry<LocalDate, MonthlyContentDto> entry : content.entrySet()) {
            result.add(new GetMonthlyHaruResponse(entry.getKey(), entry.getValue()));
        }
        return result;
    }

    @Override
    public List<GetRecordResponse> getFamilyRecord(GetRecordRequest getRecordRequest) {
        return recordRepository.findAllByDateAndFamilyId(getRecordRequest.getFamilyId(), getRecordRequest.getDate());
    }


}
