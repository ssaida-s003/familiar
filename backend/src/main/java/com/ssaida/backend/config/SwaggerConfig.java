package com.ssaida.backend.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import lombok.RequiredArgsConstructor;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

//Swagger 주소 : http://localhost:8080/api/swagger-ui/index.html
@OpenAPIDefinition(
        info = @Info(title = "S10P21S003",
                description = "SSDC Generative AI Image Project for Samsung FamilyHub",
                version = "v1"))
@RequiredArgsConstructor
@Configuration
public class SwaggerConfig {

    @Bean
    public GroupedOpenApi chatOpenApi() {
        String[] paths = {"/**"};

        return GroupedOpenApi.builder()
                .group("S10P21S003 API v1")
                .pathsToMatch(paths)
                .build();
    }
}