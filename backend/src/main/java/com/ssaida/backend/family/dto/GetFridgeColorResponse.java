package com.ssaida.backend.family.dto;

import com.ssaida.backend.family.entity.Color;
import com.ssaida.backend.family.entity.Fridge;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class GetFridgeColorResponse {
    String topLeft;
    String topRight;
    String bottomLeft;
    String bottomRight;

    public GetFridgeColorResponse(Fridge fridge) {
        this.topLeft = fridge.getTopLeft().getColorCode();
        this.topRight = fridge.getTopRight().getColorCode();
        this.bottomLeft = fridge.getBottomLeft().getColorCode();
        this.bottomRight = fridge.getBottomRight().getColorCode();
    }
}
