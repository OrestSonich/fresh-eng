package com.orest.applicationame.template_spring_app.repository;

import com.orest.app.fresheng.FreshEngApplication;
import com.orest.app.fresheng.entity.CardEntity;
import com.orest.app.fresheng.repository.CardRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@SpringBootTest(classes = FreshEngApplication.class)
public class CardRepositoryTest {

    @Autowired
    private CardRepository cardRepository;

    private List<CardEntity> cardEntityList;

    private final String wordImitation = "se";
    @BeforeEach
    public void beforeEach(){

        cardEntityList = List.of(
                CardEntity.builder()
                        .word("search")
                        .translate("шукати")
                        .build(),
                CardEntity.builder()
                        .word("seeker")
                        .translate("шукач")
                        .build(),
                CardEntity.builder()
                        .word("loading")
                        .translate("завантаження")
                        .build(),
                CardEntity.builder()
                        .word("lazy")
                        .translate("лінивий")
                        .build()
        );
    }

    @Test
    @Transactional
    public void should_GetAllCardsStartWithLetters_When_Exists() {
        cardRepository.saveAll(cardEntityList);

        List<CardEntity> actual = cardRepository.findAllByWordStartsWith(wordImitation);

        Assertions.assertEquals(List.of(cardEntityList.get(0),
                cardEntityList.get(1)), actual);
    }
}
