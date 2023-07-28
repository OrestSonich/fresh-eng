package com.orest.app.fresheng.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@Builder(toBuilder = true)
@AllArgsConstructor
@Table(name = "cards")
@Entity
public class CardEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToMany(mappedBy = "cards")
    private List<CatalogEntity> catalogs = new ArrayList<>();

    private String word;

    private String translate;
}
