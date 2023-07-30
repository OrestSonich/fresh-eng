package com.orest.app.fresheng.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.ZoneId;
import java.time.ZonedDateTime;

@ControllerAdvice
public class ApiExceptionHandler {

    @ExceptionHandler(value = {ApiRequestException.class})
    public ResponseEntity<Object> handleJwtExpired(ApiRequestException e) {
        HttpStatus badRequest = HttpStatus.NOT_FOUND;
        ApiExceptionModel apiExceptionModel = new  ApiExceptionModel(
                e.getMessage(),
                badRequest,
                ZonedDateTime.now(ZoneId.of("GMT+0300"))
        );
        return new ResponseEntity<>(apiExceptionModel, badRequest);
    }

}
