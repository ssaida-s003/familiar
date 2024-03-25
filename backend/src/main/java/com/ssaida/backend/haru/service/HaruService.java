package com.ssaida.backend.haru.service;

import com.ssaida.backend.haru.dto.CreateRecordRequest;
import com.ssaida.backend.haru.dto.GetRecordRequest;

import java.util.Map;

public interface HaruService {
    void createRecord(CreateRecordRequest createRecordRequest);

}
