package com.ssaida.backend.common.ai;

public record Img2ImgRequest (
	String image,
	String title,
	String artStyle
){

}
