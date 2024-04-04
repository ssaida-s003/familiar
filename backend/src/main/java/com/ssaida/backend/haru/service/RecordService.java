package com.ssaida.backend.haru.service;

import com.ssaida.backend.haru.dto.ConvertRecordRequest;
import com.ssaida.backend.haru.dto.CreateRecordRequest;

import java.io.IOException;

public interface RecordService {
    void createRecord(CreateRecordRequest createRecordRequest);

    void deleteRecord(long recordId);


}
