package com.ssaida.backend.common.bucket.impl;

import com.oracle.bmc.objectstorage.ObjectStorage;
import com.oracle.bmc.objectstorage.model.CreatePreauthenticatedRequestDetails;
import com.oracle.bmc.objectstorage.model.PreauthenticatedRequest;
import com.oracle.bmc.objectstorage.requests.CreatePreauthenticatedRequestRequest;
import com.oracle.bmc.objectstorage.requests.PutObjectRequest;
import com.oracle.bmc.objectstorage.responses.CreatePreauthenticatedRequestResponse;
import com.oracle.bmc.objectstorage.responses.PutObjectResponse;
import com.ssaida.backend.common.bucket.BucketClient;
import com.ssaida.backend.common.bucket.config.ObjectStorageProps;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.CompletableFuture;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Slf4j
@RequiredArgsConstructor
@Component
public class OracleBucketClient implements BucketClient {

	private final ObjectStorageProps props;
	private final ObjectStorage objectStorage;

	@Override
	public String createPreAuthenticatedURL() {
		CreatePreauthenticatedRequestDetails details =
			CreatePreauthenticatedRequestDetails.builder()
				.name("SSAIDA")
				.bucketListingAction(PreauthenticatedRequest.BucketListingAction.ListObjects)
				.accessType(CreatePreauthenticatedRequestDetails.AccessType.AnyObjectWrite)
				.timeExpires(Timestamp.valueOf(LocalDateTime.now().plusMinutes(1))).build();

		CreatePreauthenticatedRequestRequest request = CreatePreauthenticatedRequestRequest.builder()
			.namespaceName(props.bucketNameSpace())
			.bucketName(props.bucketName())
			.createPreauthenticatedRequestDetails(details)
			.build();

		CreatePreauthenticatedRequestResponse response =
			objectStorage.createPreauthenticatedRequest(request);

		log.info(response.getPreauthenticatedRequest().getAccessUri());

		return props.regionUrl() + response.getPreauthenticatedRequest().getAccessUri();
	}

	@Override
	public String uploadImage(MultipartFile file) throws IOException {
		Map<String, String> metadata = new HashMap<>();

		String objectName =
			new SimpleDateFormat("yyyy-MM-dd").format(new Date()) + "/" + UUID.randomUUID();

		try (InputStream is = file.getInputStream()) {
			PutObjectRequest request = PutObjectRequest.builder()
				.bucketName(props.bucketName())
				.namespaceName(props.bucketNameSpace())
				.objectName(objectName)
				.contentType(file.getContentType())
				.contentLength(file.getSize())
				.opcMeta(metadata)
				.putObjectBody(is)
				.build();

			CompletableFuture.runAsync(() -> objectStorage.putObject(request));
		} catch (Exception e) {
			log.error("이미지 업로드 실패");
		}

		return getObjectUrl(objectName);
	}

	private String getObjectUrl(String objectName) {
		return props.readOnlyUrl() + objectName;
	}

}
