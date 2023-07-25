package com.orest.app.template_spring_app.services;

import com.orest.app.template_spring_app.repository.CardRepo;
import com.orest.app.template_spring_app.repository.CatalogRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CardService {

    private final CatalogRepo catalogRepository;
    private final CardRepo repository;

    @Autowired
    public CardService(CardRepo repository, CatalogRepo catalogRepository) {
        this.repository = repository;
        this.catalogRepository = catalogRepository;
    }

//    public void addCard(CardEntity card, String catalogRef) {
////        CatalogEntity catalogEntity = catalogRepository.findAllByOwnerEmailAndName(catalogRef);
////        repository.save(card);
//    }

}
