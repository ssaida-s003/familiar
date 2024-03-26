package com.ssaida.backend.common.bucket;

import java.io.IOException;
import java.util.concurrent.CompletableFuture;
import org.springframework.web.multipart.MultipartFile;

public interface BucketClient {

	String createPreAuthenticatedURL();

	String uploadImage(MultipartFile file) throws IOException;
}
