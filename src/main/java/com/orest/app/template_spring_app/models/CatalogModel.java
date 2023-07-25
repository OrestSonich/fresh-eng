package com.orest.app.template_spring_app.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.orest.app.template_spring_app.entity.CatalogEntity;
import lombok.Builder;
import lombok.Data;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Data
@Builder
public class CatalogModel {
    private Long id;
    private String name;
    private String creator;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date createdAt;
    private List<CardModel> cards;


    public static CatalogModel toModel(CatalogEntity entity){

        String creatorFirstName = entity.getOwner().getInfo().getFirstName();
        String creatorLastName = entity.getOwner().getInfo().getLastName();

        return CatalogModel.builder()
                .id(entity.getId())
                .creator(creatorFirstName + " " + creatorLastName)
                .name(entity.getName())
                .createdAt(entity.getCreatedAt())
                .cards(entity.getCards().stream().map(CardModel::toModel).collect(Collectors.toList()))
                .build();
    }

    public static List<CatalogModel> toModel(List<CatalogEntity> entities){
        List<CatalogModel> catalogModels = new ArrayList<>();
        for (CatalogEntity el : entities ){
            catalogModels.add(CatalogModel.toModel(el));
        }
        return catalogModels;
    }

}
