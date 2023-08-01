package com.orest.app.fresheng.exceptions;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

import java.time.ZoneId;
import java.time.ZonedDateTime;

@Data
@RequiredArgsConstructor
public class ApiExceptionModel {

    private final String message;

    private final HttpStatus httpStatus;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
    private final ZonedDateTime timestamp = ZonedDateTime.now(ZoneId.of("GMT+0300"));
}
