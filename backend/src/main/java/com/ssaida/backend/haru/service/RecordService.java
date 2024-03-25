package com.ssaida.backend.haru.service;

import com.ssaida.backend.haru.dto.ConvertRecordRequest;
import com.ssaida.backend.haru.dto.CreateRecordRequest;

public interface RecordService {
    void createRecord(CreateRecordRequest createRecordRequest);

    void deleteRecord(long recordId);


}
