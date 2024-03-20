package com.ssaida.backend;

import lombok.extern.log4j.Log4j;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
@Slf4j
public class BackendApplication {

	@Value("${mysql.host}")
	private static String mysqlHost;

	@Value("${mysql.username}")
	private static String userName;

	@Value("${mysql.password}")
	private static String password;

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
		log.info("MYSQL : {}, {}, {}", mysqlHost, userName, password);
	}

}
