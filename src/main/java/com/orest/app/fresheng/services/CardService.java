package com.orest.app.fresheng.services;

import com.orest.app.fresheng.entity.CardEntity;
import com.orest.app.fresheng.entity.CatalogEntity;
import com.orest.app.fresheng.exceptions.CatalogException;
import com.orest.app.fresheng.models.CardModel;
import com.orest.app.fresheng.repository.CardRepository;
import com.orest.app.fresheng.repository.CatalogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CardService {

    private final CatalogRepository catalogRepository;
    private final CardRepository repository;

    @Autowired
    public CardService(CardRepository repository, CatalogRepository catalogRepository) {
        this.repository = repository;
        this.catalogRepository = catalogRepository;
    }

    public CardEntity addCard(CardEntity card, String catalogReference) {
        card.setWord(card.getWord().toLowerCase());
        card.setTranslate(card.getTranslate().toLowerCase());

        CatalogEntity catalogEntity = catalogRepository
                .findByIndividualReference(catalogReference)
                .orElseThrow(() -> new CatalogException("catalog not found"));

        catalogEntity.addCard(card);
        repository.save(card);
        catalogRepository.save(catalogEntity);

        return card;
    }

    public List<CardModel> searchCardByWordLetters(String letters) {
        return CardModel.toModel(repository.findAllByWordStartsWith(letters));
    }
}
