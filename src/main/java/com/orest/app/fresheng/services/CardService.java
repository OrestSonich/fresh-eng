package com.orest.app.fresheng.services;

import com.orest.app.fresheng.entity.CardEntity;
import com.orest.app.fresheng.entity.CatalogEntity;
import com.orest.app.fresheng.repository.CardRepository;
import com.orest.app.fresheng.repository.CatalogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CardService {

    private final CatalogRepository catalogRepository;
    private final CardRepository repository;

    @Autowired
    public CardService(CardRepository repository, CatalogRepository catalogRepository) {
        this.repository = repository;
        this.catalogRepository = catalogRepository;
    }

    public void addCard(CardEntity card, String catalogReference) {
        CatalogEntity catalogEntity = catalogRepository
                .findByIndividualReference(catalogReference);
        catalogEntity.addCard(card);
        repository.save(card);
        catalogRepository.save(catalogEntity);
    }
}
