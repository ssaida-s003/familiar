package com.ssaida.backend.haru.service;

import com.ssaida.backend.haru.dto.GetMonthlyHaruResponse;
import com.ssaida.backend.haru.dto.GetRecordRequest;
import com.ssaida.backend.haru.dto.GetRecordResponse;

import java.util.List;
import java.util.Map;


public interface FamilyHaruService {
    List<GetMonthlyHaruResponse> getMonthlyHaru(int familyId, String date);

    List<GetRecordResponse> getFamilyRecord(GetRecordRequest getRecordRequest);

}
