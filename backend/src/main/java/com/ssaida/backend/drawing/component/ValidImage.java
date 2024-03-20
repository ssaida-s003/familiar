package com.ssaida.backend.drawing.component;

import static java.lang.annotation.ElementType.METHOD;
import static java.lang.annotation.ElementType.PARAMETER;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

@Documented
@Target(PARAMETER)
@Retention(RUNTIME)
@Constraint(validatedBy = ImageValidator.class)
public @interface ValidImage {
	String message() default "Only PNG images are allowed";

	Class<?>[] groups() default {};

	Class<? extends Payload>[] payload() default {};
}