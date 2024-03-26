package com.ssaida.backend.common.bucket.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "oci.object-storage")
public record ObjectStorageProps(
	String bucketName,
	String bucketNameSpace,
	String regionUrl,
	String readOnlyUrl

) {
}