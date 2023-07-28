package com.orest.app.fresheng.repository;

import com.orest.app.fresheng.entity.CatalogEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CatalogRepository extends JpaRepository<CatalogEntity, Long> {
     List<CatalogEntity> findAllByOwnerEmail(String email);
     List<CatalogEntity> findAllByPersonalIs(boolean isPersonal);
     CatalogEntity findByIndividualReference(String ref);
}