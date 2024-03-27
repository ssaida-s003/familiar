package com.ssaida.backend.family.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Setter
@Getter
@ToString
public class PutFridgeColorRequest {
    private String topLeft;
    private String topRight;
    private String bottomLeft;
    private String bottomRight;
}
