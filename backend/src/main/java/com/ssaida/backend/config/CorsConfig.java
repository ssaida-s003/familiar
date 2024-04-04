//package com.ssaida.backend.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//import org.springframework.web.filter.CorsFilter;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//import java.util.Collections;
//import java.util.List;
//
//@Configuration
//public class CorsConfig {
//
//	@Bean
//	public CorsFilter corsFilter() {
//
//		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//		CorsConfiguration config = new CorsConfiguration();
//
//		config.setAllowedOrigins(
//				List.of("http://localhost:3000", "http://localhost:5173", "https://ssaida-front.duckdns.org"));
//		config.setAllowedOriginPatterns(
//				List.of("http://localhost:3000/**", "http://localhost:5173/**", "https://ssaida-front.duckdns.org/**"));
//		config.setAllowedMethods(Collections.singletonList("*"));
//		config.setAllowedHeaders(Collections.singletonList("*"));
//
//		config.setAllowCredentials(true);
////		config.addAllowedOriginPattern("*");
////		config.addAllowedHeader("*");
////		config.addAllowedMethod("*");
//		config.setMaxAge(3600L);
//
//		source.registerCorsConfiguration("/**", config);
//
//		return new CorsFilter(source);
//
//	}
//
//}
