package com.ssaida.backend.common.bucket.impl;

import com.oracle.bmc.objectstorage.ObjectStorage;
import com.oracle.bmc.objectstorage.model.CreatePreauthenticatedRequestDetails;
import com.oracle.bmc.objectstorage.model.PreauthenticatedRequest;
import com.oracle.bmc.objectstorage.requests.CreatePreauthenticatedRequestRequest;
import com.oracle.bmc.objectstorage.responses.CreatePreauthenticatedRequestResponse;
import com.ssaida.backend.common.bucket.BucketClient;
import com.ssaida.backend.common.bucket.config.ObjectStorageProps;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

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
}
