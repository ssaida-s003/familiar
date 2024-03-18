package com.ssaida.backend.haru.service;

import com.ssaida.backend.family.entity.Member;
import com.ssaida.backend.haru.dto.CreateRecordRequest;
import com.ssaida.backend.haru.entity.DailyRecord;
import com.ssaida.backend.haru.repository.RecordRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class HaruServiceImpl implements HaruService{

    private final RecordRepository recordRepository;
    @Override
    @Transactional
    public void createRecord(CreateRecordRequest createRecordRequest) throws Exception {

//        DailyRecord dailyRecord =new DailyRecord(createRecordRequest.getMemeberId(),createRecordRequest.getContent());
//        recordRepository.save(dailyRecord);
//        //TODO: FASTAPI 연결 필요
//        String url = "test_url";
//        dailyRecord.updateUrl(url);
    }
}
