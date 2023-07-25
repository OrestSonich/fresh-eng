package com.orest.app.template_spring_app.repository;

import com.orest.app.template_spring_app.entity.CardEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CardRepo extends JpaRepository<CardEntity, Long> {

}
