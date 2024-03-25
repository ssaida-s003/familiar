package com.ssaida.backend.common.bucket.config;

import com.oracle.bmc.ConfigFileReader;
import com.oracle.bmc.ConfigFileReader.ConfigFile;
import com.oracle.bmc.Region;
import com.oracle.bmc.auth.AuthenticationDetailsProvider;
import com.oracle.bmc.auth.SimpleAuthenticationDetailsProvider;
import com.oracle.bmc.auth.SimplePrivateKeySupplier;
import com.oracle.bmc.objectstorage.ObjectStorage;
import com.oracle.bmc.objectstorage.ObjectStorageClient;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.Objects;
import java.util.function.Supplier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ObjectStorageConfig {


	@Bean
	public AuthenticationDetailsProvider authenticationDetailsProvider() throws IOException {
		ClassLoader classLoader = ObjectStorageConfig.class.getClassLoader();
		File tempConfigFile = new File(
			Objects.requireNonNull(classLoader.getResource("config/config")).getFile());
		File tempOCIAPIKey = new File(
			Objects.requireNonNull(classLoader.getResource("config/SSAIDA.pem")).getFile());

		ConfigFile config = ConfigFileReader.parse(tempConfigFile.getPath(), "DEFAULT");

		Supplier<InputStream> privateKeySupplier = new SimplePrivateKeySupplier(tempOCIAPIKey.getPath());

		return SimpleAuthenticationDetailsProvider.builder()
			.tenantId(config.get("tenancy")).userId(config.get("user")).fingerprint(config.get("fingerprint"))
			.privateKeySupplier(privateKeySupplier).region(Region.AP_CHUNCHEON_1).build();
	}

	@Bean
	public ObjectStorage objectStorage(AuthenticationDetailsProvider authenticationDetailsProvider){
		return ObjectStorageClient.builder()
			.region(Region.AP_CHUNCHEON_1) // 자신이 사용하는 리전을 선택
			.build(authenticationDetailsProvider);
	}


}