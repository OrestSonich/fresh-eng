package com.orest.app.fresheng.repository;

import com.orest.app.fresheng.entity.CardEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CardRepository extends JpaRepository<CardEntity, Long> {

    List<CardEntity> findAllByWordStartsWith (String word);
}
