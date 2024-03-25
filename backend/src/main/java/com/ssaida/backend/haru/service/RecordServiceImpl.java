package com.ssaida.backend.haru.service;

import com.ssaida.backend.common.NotFoundException;
import com.ssaida.backend.common.ErrorCode;
import com.ssaida.backend.common.ai.StableDiffusionApiClient;
import com.ssaida.backend.common.prompt.PromptGenerator;
import com.ssaida.backend.family.entity.Member;
import com.ssaida.backend.family.repository.MemberRepository;
import com.ssaida.backend.haru.dto.ConvertRecordRequest;
import com.ssaida.backend.haru.dto.CreateRecordRequest;
import com.ssaida.backend.haru.entity.DailyRecord;
import com.ssaida.backend.haru.repository.RecordRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class RecordServiceImpl implements RecordService {

    private final RecordRepository recordRepository;
    private final MemberRepository memberRepository;

    @Override
    @Transactional
    public void createRecord(CreateRecordRequest createRecordRequest) {
        Member member = memberRepository.findById(createRecordRequest.getMemberId())
                .orElseThrow(() -> new NotFoundException(ErrorCode.MemberNotFoundException));

        DailyRecord dailyRecord = createRecordRequest.toEntity(member);
        recordRepository.save(dailyRecord);
    }

    @Override
    public void deleteRecord(long recordId) {
        recordRepository.deleteById(recordId);
    }

}
