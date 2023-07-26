package com.orest.app.fresheng.controllers;

import com.orest.app.fresheng.entity.CardEntity;
import com.orest.app.fresheng.services.CardService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<String> createCard(@RequestBody
                                     CardEntity card,
                                     @RequestParam
                                     String catalogReference){
        service.addCard(card, catalogReference);
        return ResponseEntity.ok("card added!");
    }
}
