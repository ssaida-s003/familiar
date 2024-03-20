package com.ssaida.backend.haru.service;

import com.ssaida.backend.common.NotFoundException;
import com.ssaida.backend.haru.dto.CreateRecordRequest;

public interface HaruService {
    void createRecord(CreateRecordRequest createRecordRequest);
}
