package com.orest.app.fresheng.exceptions;

import org.springframework.security.core.AuthenticationException;

public class EmailAreBusyException extends AuthenticationException {
    public EmailAreBusyException(String message) {
        super(message);
    }
}
