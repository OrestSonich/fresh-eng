package com.orest.app.template_spring_app.models;

import com.orest.app.template_spring_app.entity.LearnCatalogEntity;
import lombok.Builder;
import lombok.Data;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Data
@Builder
public class CatalogModel {

    private Long id;
    private String creator;
    private String name;
    private Date createdAt;
    private List<CardModel> cards;

    public static CatalogModel toModel(LearnCatalogEntity entity){
        return CatalogModel.builder()
                .id(entity.getId())
                .name(entity.getName())
                .creator(entity.getName())
                .createdAt(entity.getCreatedAt())
                .cards(entity.getCards().stream().map(CardModel::toModel).collect(Collectors.toList()))
                .build();
    }
}
