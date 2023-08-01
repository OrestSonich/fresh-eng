package com.orest.app.fresheng.exceptions;

public class CatalogNotFoundException extends Throwable{
    public CatalogNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public CatalogNotFoundException() {
    }
}
