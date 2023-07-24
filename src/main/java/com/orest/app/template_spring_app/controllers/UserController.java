package com.orest.app.template_spring_app.controllers;

import com.orest.app.template_spring_app.models.UserModel;
import com.orest.app.template_spring_app.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.nio.channels.AcceptPendingException;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
@CrossOrigin
public class UserController {
    @Autowired
    public UserController(UserService service) {
        this.service = service;
    }

    private UserService service;

    @ExceptionHandler({AcceptPendingException.class})

    @GetMapping
    public ResponseEntity<UserModel> getUser(@RequestHeader("Authorization") String header){
         return ResponseEntity.ok(service.getUserFromTokenHeader(header));
    }

    @DeleteMapping
    @Transactional
    public ResponseEntity<String> deleteUser(@RequestHeader("Authorization") String header){
        service.deleteUserFromTokenHeader(header);
        return ResponseEntity.ok("User deleted!");
    }
}
