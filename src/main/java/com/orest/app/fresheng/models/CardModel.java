package com.orest.app.fresheng.models;

import com.orest.app.fresheng.entity.CardEntity;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CardModel {

    private Long id;
    private String word;
    private String translate;

    public static CardModel toModel(CardEntity entity){
        return CardModel.builder()
                .id(entity.getId())
                .word(entity.getWord())
                .translate(entity.getTranslate())
                .build();
    }
}
