package com.ssaida.backend.common.ai;

import static org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE;

import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.service.annotation.HttpExchange;
import org.springframework.web.service.annotation.PostExchange;

@HttpExchange(url = "http://localhost:8000")
public interface StableDiffusionApiClient {

	@PostExchange(url = "/files/multipart", contentType = MULTIPART_FORM_DATA_VALUE)
	byte[] convertImage(
		@RequestPart(name = "image") MultipartFile image,
		@RequestPart(name = "request") Img2ImgRequest request);

}

