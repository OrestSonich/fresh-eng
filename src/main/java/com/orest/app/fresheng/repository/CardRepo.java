package com.orest.app.fresheng.repository;

import com.orest.app.fresheng.entity.CardEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CardRepo extends JpaRepository<CardEntity, Long> {

}
