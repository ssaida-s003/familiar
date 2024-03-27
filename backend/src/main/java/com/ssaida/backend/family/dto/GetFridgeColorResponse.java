package com.ssaida.backend.family.dto;

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
        this.topLeft = fridge.getTopLeft().getHex();
        this.topRight = fridge.getTopRight().getHex();
        this.bottomLeft = fridge.getBottomLeft().getHex();
        this.bottomRight = fridge.getBottomRight().getHex();
    }
}
