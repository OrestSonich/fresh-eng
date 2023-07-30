package com.orest.applicationame.template_spring_app.services;

import com.orest.app.fresheng.FreshEngApplication;
import com.orest.app.fresheng.entity.CardEntity;
import com.orest.app.fresheng.entity.CatalogEntity;
import com.orest.app.fresheng.models.CardModel;
import com.orest.app.fresheng.repository.CardRepository;
import com.orest.app.fresheng.repository.CatalogRepository;
import com.orest.app.fresheng.services.CardService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@SpringBootTest(classes = FreshEngApplication.class)
public class CardServiceTest {
    @Mock
    private CardRepository cardRepository;

    @Mock
    private CatalogRepository catalogRepository;
    @InjectMocks
    private CardService cardService;

    private final String wordImitation = "se";

    private final String refMock = "13ds3tfdsm54";

    private CardEntity cardEntity;
    @BeforeEach
    private void beforeEach() {
        cardEntity = CardEntity.builder()
                .word("Search")
                .translate("Пошук")
                .build();
    }
    @Test
    public void should_GetCard_BySearchingLetters_When_CardExists () {
        System.out.println(cardEntity.getWord());
        when(cardRepository.findAllByWordStartsWith(wordImitation))
                .thenReturn(List.of(cardEntity));

        List<CardModel> actual = cardService.searchCardByWordLetters(wordImitation);

        Assertions.assertNotNull(actual);
        Assertions.assertEquals(CardModel.toModel(List.of(cardEntity)), actual);
    }

    @Test
    public void should_SaveWordAndTranslateInLowerCase_When_WordsExists () {
        final CatalogEntity catalogEntity = mock(CatalogEntity.class);
        when(catalogRepository.findByIndividualReference(refMock))
                .thenReturn(Optional.ofNullable(catalogEntity));
        when(cardRepository.save(cardEntity)).thenReturn(null);
        when(catalogRepository.save(catalogEntity)).thenReturn(null);

        CardEntity entity = cardService.addCard(cardEntity, refMock);

        System.out.println(entity);
    }
}
