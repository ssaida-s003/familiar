package com.ssaida.backend.family.service;

import com.ssaida.backend.common.ErrorCode;
import com.ssaida.backend.common.NotFoundException;
import com.ssaida.backend.family.dto.GetFridgeColorResponse;
import com.ssaida.backend.family.dto.PutFridgeColorRequest;
import com.ssaida.backend.family.entity.Color;
import com.ssaida.backend.family.entity.Family;
import com.ssaida.backend.family.entity.Fridge;
import com.ssaida.backend.family.repository.FamilyRepository;
import com.ssaida.backend.family.repository.FridgeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
@RequiredArgsConstructor
public class FridgeServiceImpl implements FridgeService {

    final private FridgeRepository fridgeRepository;
    final private FamilyRepository familyRepository;

    @Override
    public GetFridgeColorResponse getFridgeColor(int familyId) {
        Fridge fridge = fridgeRepository.findById(familyId).orElseGet(() -> {
            Optional<Family> family = familyRepository.findById(familyId);
            if (family.isPresent()) {
                Fridge newFridge = Fridge.builder()
                        .family(family.get())
                        .topLeft(Color.WHITE)
                        .topRight(Color.WHITE)
                        .bottomLeft(Color.WHITE)
                        .bottomRight(Color.WHITE)
                        .build();
                return fridgeRepository.save(newFridge);
            } else {
                throw new NotFoundException(ErrorCode.FamilyNotFoundException);
            }
        });

        return new GetFridgeColorResponse(fridge);
    }

    @Override
    @Transactional
    public String putFridgeColor(int familyId, PutFridgeColorRequest putFridgeColorRequest) {

        Color[] colors = {Color.of(putFridgeColorRequest.getTopLeft()), Color.of(putFridgeColorRequest.getTopRight())
                , Color.of(putFridgeColorRequest.getBottomLeft()), Color.of(putFridgeColorRequest.getBottomRight())};
        Fridge fridge;
        if (!fridgeRepository.findById(familyId).isPresent()) {
            fridge = Fridge.builder()
                    .family(familyRepository.findById(familyId).orElseThrow(() -> new NotFoundException(ErrorCode.MemberNotFoundException)))
                    .topLeft(colors[0])
                    .topRight(colors[1])
                    .bottomLeft(colors[2])
                    .bottomRight(colors[3])
                    .build();
            fridgeRepository.save(fridge);
        } else {
            fridge = fridgeRepository.findById(familyId).get();
            fridge.updateColor(colors);
        }
        return findMatchingColor(colors);
    }

    private String findMatchingColor(Color[] colors) {

        if (Arrays.equals(colors, new Color[]{Color.WHITE, Color.WHITE, Color.SKYBLUE, Color.SKYBLUE})) {
            return "418EB0";
        }

        HashMap<Color, Integer> count = new HashMap<>();
        for (Color color : colors) {
            count.put(color, count.getOrDefault(color, 0) + 1);
        }
        Optional<Map.Entry<Color, Integer>> maxColor = count.entrySet().stream()
                .max(Map.Entry.comparingByValue());
        return maxColor.get().getKey().getHex();
    }

}
