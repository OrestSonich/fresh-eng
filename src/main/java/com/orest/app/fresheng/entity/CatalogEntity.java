package com.orest.app.fresheng.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Data
@NoArgsConstructor
@Builder(toBuilder = true)
@AllArgsConstructor
@Table(name = "learn_catalogs")
@Entity
public class CatalogEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "catalog")
    private UserEntity owner;

    @NotNull(message = "should have name")
    private String name;

    private Date createdAt = java.sql.Date.valueOf(LocalDate.now(ZoneId.of("GMT+0300")));

    private String individualReference = UUID.randomUUID().toString();

    private boolean personal = false;

    @ManyToMany
    @JoinTable(
            name = "course_like",
            joinColumns = @JoinColumn(name = "catalog_id"),
            inverseJoinColumns = @JoinColumn(name = "card_id"))
    private List <CardEntity> cards = new ArrayList<>();

    public void addCard(CardEntity card){
        cards.add(card);
    }
}
