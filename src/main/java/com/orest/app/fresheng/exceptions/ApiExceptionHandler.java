package com.orest.app.fresheng.exceptions;

import io.jsonwebtoken.security.SignatureException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import static org.springframework.http.HttpStatus.UNAUTHORIZED;

@ControllerAdvice
public class ApiExceptionHandler  extends ResponseEntityExceptionHandler {

    @ExceptionHandler(value = {ApiRequestException.class})
    public ResponseEntity<Object> handleException(ApiRequestException e) {
        HttpStatus exceptionStatusCode = e.getCode();
        ApiExceptionModel apiExceptionModel = new  ApiExceptionModel(
                e.getMessage(),
                exceptionStatusCode
        );
        return new ResponseEntity<>(apiExceptionModel, exceptionStatusCode);
    }

    @ExceptionHandler({ AuthenticationException.class })
    @ResponseBody
    public ResponseEntity<ApiExceptionModel> handleAuthenticationException(Exception ex) {

        ApiExceptionModel apiExceptionModel =
                new ApiExceptionModel(ex.getMessage(),
                        UNAUTHORIZED);
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(apiExceptionModel);
    }

    @ExceptionHandler({ SignatureException.class })
    @ResponseBody
    public ResponseEntity<ApiExceptionModel> handleSignatureException(Exception ex) {

        ApiExceptionModel apiExceptionModel =
                new ApiExceptionModel(ex.getMessage(),
                        UNAUTHORIZED);
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(apiExceptionModel);
    }
}

