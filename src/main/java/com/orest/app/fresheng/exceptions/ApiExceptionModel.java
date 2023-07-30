package com.orest.app.fresheng.exceptions;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

import java.time.ZonedDateTime;

@Data
@RequiredArgsConstructor
public class ApiExceptionModel {

    private final String message;


    private final HttpStatus httpStatus;

    private final ZonedDateTime timestamp;
}
