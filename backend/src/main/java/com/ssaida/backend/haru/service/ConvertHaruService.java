package com.ssaida.backend.haru.service;

import com.ssaida.backend.haru.dto.ConvertRecordRequest;

public interface ConvertHaruService {
    byte[] convertHaru(ConvertRecordRequest convertRecordRequest);
}
