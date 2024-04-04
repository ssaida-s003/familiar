package com.ssaida.backend.common.ai;

public record Txt2ImgRequest(
        int memberId,
        String prompt
) {

}
