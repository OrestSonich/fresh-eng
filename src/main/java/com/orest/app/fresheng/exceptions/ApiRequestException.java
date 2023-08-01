package com.orest.app.fresheng.exceptions;

import org.springframework.http.HttpStatus;

public class ApiRequestException extends RuntimeException{

    private HttpStatus code;

    public ApiRequestException(String message) {
        super(message);
    }

    public ApiRequestException(String message, HttpStatus code) {
        super(message);
        this.code = code;
    }

    public HttpStatus getCode() {
        return code;
    }
}
