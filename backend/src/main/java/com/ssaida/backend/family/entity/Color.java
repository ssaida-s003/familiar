package com.ssaida.backend.family.entity;

import com.ssaida.backend.common.ErrorCode;
import com.ssaida.backend.common.NotFoundException;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

import java.util.Arrays;

@Getter
@RequiredArgsConstructor
@ToString
public enum Color {

    BEIGE("D1C7BE", false ),
    SKYBLUE("9DC1D1", false ),
    PINK("EDD7DA", false ),
    YELLOW("EDBD76", false ),
    PEACH("F1BBAF", false ),
    FERNGREEN("D1DFC5", false ),
    WHITE ("F0EFED", true ),
    VANILLA("F1E2C3", false ),
    GREENERY("597568", false ),
    NAVY("00264B", true ),
    MARIN("7A96BF", false ),
    TAUPE("AB9B90", false ),
    PEBBLE("CFCCC9", false ),
    GRAY("848081", false ),
    CHARCOAL("212121", false);

    private final String hex;
    private final boolean canApplyOnDisplay;

    public static Color of(String hex)
    {
        if(hex.startsWith("#"))
        {
            hex=hex.substring(1,7);
        }
        final String hexCode=hex;
        return Arrays.stream(values())
                .filter(value->value.hex.equals(hexCode))
                .findAny()
                .orElseThrow(()-> {
                    throw new NotFoundException(ErrorCode.ColorNotFoundException);});
    }

}
