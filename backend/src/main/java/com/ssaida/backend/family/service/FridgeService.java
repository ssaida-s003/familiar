package com.ssaida.backend.family.service;

import com.ssaida.backend.family.dto.GetFridgeColorResponse;
import com.ssaida.backend.family.dto.PutFridgeColorRequest;

public interface FridgeService {
    String getFridgeColor(int familyId);

    String putFridgeColor(int familyId, PutFridgeColorRequest putFridgeColorRequest);
}
