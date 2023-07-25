package com.orest.app.template_spring_app.controllers;

import com.orest.app.template_spring_app.entity.CardEntity;
import com.orest.app.template_spring_app.services.CardService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/catalogs/card")
@RequiredArgsConstructor
@CrossOrigin
public class CardController {

    private CardService service;

    @Autowired
    public CardController(CardService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity createCard(CardEntity card){
//        service.addCard(card);
        return ResponseEntity.ok("card added!");
    }
}
