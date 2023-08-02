package com.orest.app.fresheng.exceptions;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Data;
import org.springframework.http.HttpStatusCode;

import java.time.ZoneId;
import java.time.ZonedDateTime;

@Data
@Builder
public class ApiExceptionModel {

    private String message;

    private final HttpStatusCode httpStatus;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
    private final ZonedDateTime timestamp = ZonedDateTime.now(ZoneId.of("GMT+0300"));
}
