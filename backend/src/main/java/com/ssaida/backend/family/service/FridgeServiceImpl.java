package com.ssaida.backend.family.service;

import com.ssaida.backend.common.ErrorCode;
import com.ssaida.backend.common.NotFoundException;
import com.ssaida.backend.family.dto.GetFridgeColorResponse;
import com.ssaida.backend.family.entity.Fridge;
import com.ssaida.backend.family.repository.FridgeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FridgeServiceImpl implements FridgeService {

    final private FridgeRepository fridgeRepository;

    @Override
    public GetFridgeColorResponse getFridgeColor(int familyId) {
        Fridge fridge = fridgeRepository.findById(familyId).orElseThrow(() -> new NotFoundException(ErrorCode.FridgeNotFoundException));
        return new GetFridgeColorResponse(fridge);
    }
}
