package com.ssaida.backend.family.service;

import com.ssaida.backend.family.dto.GetFridgeColorResponse;

public interface FridgeService {
    public GetFridgeColorResponse getFridgeColor(int familyId);
}
