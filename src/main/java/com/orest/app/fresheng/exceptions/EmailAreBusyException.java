package com.orest.app.fresheng.exceptions;

import org.springframework.security.core.AuthenticationException;

public class EmailAreBusyException extends AuthenticationException {
    public EmailAreBusyException(String msg) {
        super(msg);
        System.err.println("Email are busy");
    }
}
