package com.ssaida.backend.haru.service;

import com.ssaida.backend.common.BadRequestException;
import com.ssaida.backend.common.NotFoundException;
import com.ssaida.backend.common.ErrorCode;
import com.ssaida.backend.common.ai.StableDiffusionApiClient;
import com.ssaida.backend.common.bucket.BucketClient;
import com.ssaida.backend.common.prompt.PromptGenerator;
import com.ssaida.backend.family.entity.Member;
import com.ssaida.backend.family.repository.MemberRepository;
import com.ssaida.backend.haru.dto.ConvertRecordRequest;
import com.ssaida.backend.haru.dto.CreateRecordRequest;
import com.ssaida.backend.haru.entity.DailyRecord;
import com.ssaida.backend.haru.repository.RecordRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class RecordServiceImpl implements RecordService {

    private final RecordRepository recordRepository;
    private final MemberRepository memberRepository;
    private final BucketClient bucketClient;

    @Override
    @Transactional
    public void createRecord(CreateRecordRequest createRecordRequest) {
        Member member = memberRepository.findById(createRecordRequest.getMemberId())
                .orElseThrow(() -> new NotFoundException(ErrorCode.MemberNotFoundException));

        MockMultipartFile image =
                new MockMultipartFile("record", "record",
                        MediaType.IMAGE_PNG_VALUE,
                        org.apache.commons.codec.binary.Base64.decodeBase64(createRecordRequest.getImage()));
        try {
            String imageUrl = bucketClient.uploadImage(image);

            DailyRecord dailyRecord = DailyRecord.builder()
                    .content(createRecordRequest.getContent())
                    .member(member)
                    .url(imageUrl).build();
            recordRepository.save(dailyRecord);
        } catch (IOException e) {
            throw new BadRequestException(ErrorCode.ImageNotAvailableException);
        }
    }

    @Override
    public void deleteRecord(long recordId) {
        recordRepository.deleteById(recordId);
    }

}
