package com.ssaida.backend.drawing.component;

import static com.ssaida.backend.drawing.exception.ErrorCode.EMPTY_FILE;
import static com.ssaida.backend.drawing.exception.ErrorCode.NO_PNG_IMAGE;

import com.ssaida.backend.drawing.exception.DrawingException;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import java.util.Objects;
import org.springframework.http.MediaType;
import org.springframework.web.multipart.MultipartFile;

public class ImageValidator implements ConstraintValidator<ValidImage, MultipartFile> {

	@Override
	public boolean isValid(MultipartFile multipartFile,
		ConstraintValidatorContext context) {

		if (multipartFile.isEmpty()) {
			throw new DrawingException(EMPTY_FILE);
		}

		if (!Objects.equals(multipartFile.getContentType(), MediaType.IMAGE_PNG_VALUE)) {
			throw new DrawingException(NO_PNG_IMAGE);
		}

		return true;
	}
}
