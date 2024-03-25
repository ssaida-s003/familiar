package com.ssaida.backend.haru.service;

import com.ssaida.backend.common.NotFoundException;
import com.ssaida.backend.common.ErrorCode;
import com.ssaida.backend.family.entity.Member;
import com.ssaida.backend.family.repository.MemberRepository;
import com.ssaida.backend.haru.dto.CreateRecordRequest;
import com.ssaida.backend.haru.dto.GetRecordRequest;
import com.ssaida.backend.haru.dto.GetRecordResponse;
import com.ssaida.backend.haru.entity.DailyRecord;
import com.ssaida.backend.haru.repository.RecordRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class HaruServiceImpl implements HaruService {

    private final RecordRepository recordRepository;
    private final MemberRepository memberRepository;

    @Override
    @Transactional
    public void createRecord(CreateRecordRequest createRecordRequest) {
        Member member = memberRepository.findById(createRecordRequest.getMemberId())
                .orElseThrow(() -> new NotFoundException(ErrorCode.MemberNotExistException));

        DailyRecord dailyRecord = DailyRecord.builder()
                .member(member)
                .content(createRecordRequest.getContent()).build();
        recordRepository.save(dailyRecord);
        //TODO: FASTAPI 연결 필요
        String url = "test_url";
        dailyRecord.updateUrl(url);
    }
}
