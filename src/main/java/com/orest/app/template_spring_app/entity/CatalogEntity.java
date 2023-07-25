package com.orest.app.template_spring_app.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Data
@NoArgsConstructor
@Builder(toBuilder = true)
@AllArgsConstructor
@Table(name = "learn_catalog")
@Entity
public class CatalogEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity owner;

    private String name;

    private Date createdAt = java.sql.Date.valueOf(LocalDate.now(ZoneId.of("GMT+0300")));

    private String individualReference = UUID.randomUUID().toString();

    private boolean personal;

    @ManyToMany
    private List <CardEntity> cards;

}
