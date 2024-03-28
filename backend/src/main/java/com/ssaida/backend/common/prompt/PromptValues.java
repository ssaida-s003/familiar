package com.ssaida.backend.common.prompt;

import java.util.List;

public class PromptValues {

    public static final String MAIN_PROMPT = "입력하는 일기 문단에 해당하는 내용으로 Stable Diffusion 이미지를 생성할 수 있게 Prompt를 생성해 줘.\n" +
            "Prompt는 영어로 생성해 줘.\n" +
            "행동을 묘사한다기 보다는, 일기에 대한 분위기와 장소를 중점적으로 만들어 줘.\n" +
            "문장보다는 키워드 별로 끊어서 만들어 줘.\n" +
            "피사체는 한 명으로 고정해 줘.\n" +
            "다른 문자열 없이, prompt만 제공해 줘.";

    public static final Double TEMPERATURE = 0.2;

    public static final Integer examplesCount = 6;

    public static final List<String> inputExamples = List.of(
            "girl : 오늘 친구와 피자를 먹었어.",
            "man : 오늘 회사 동료들과 회식을 했어.",
            "girl : 오늘은 공원에서 산책을 했어. 날씨가 너무 좋았어.",
            "girl : 오늘은 영화관에서 영화를 봤어. 팝콘이 맛있었어.",
            "girl : 친구와 치킨집에서 후라이드 치킨과 맥주를 먹었어.",
            "girl : 오늘은 계속 학원에만 있었어."
    );

    public static final List<String> outputExamples = List.of(
            "solitary girl, cozy dining atmosphere, pizza on table, warm indoor lighting, feeling of contentment, casual setting",
            "solitary man, corporate dinner setting, warm ambient lighting, table with various dishes, feeling of camaraderie, formal dining atmosphere",
            "peaceful park, sunny day, walking alone, clear blue sky, cheerful mood, outdoor leisure, beautiful nature scene",
            "solitary girl, movie theater ambiance, dim lighting, popcorn in hand, cinematic experience, feeling of excitement, casual entertainment setting",
            "solitary girl, fried chicken and beer on table, chicken restaurant ambiance, casual dining, enjoyment, warm indoor lighting, friendly atmosphere",
            "solitary girl, educational setting, indoor classroom, focused atmosphere, academic environment, study materials on desk, quiet ambiance"
    );

    public static final String POST_PROMPT = ", best quality, studio lighting, makeup, 8k uhd, high quality, dramatic, cinematic, 200mm 1.4f macro shot, beautiful, professional, highly detailed, photography very realist";

}
