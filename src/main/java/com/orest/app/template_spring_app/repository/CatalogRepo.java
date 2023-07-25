package com.orest.app.template_spring_app.repository;

import com.orest.app.template_spring_app.entity.CatalogEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CatalogRepo extends JpaRepository<CatalogEntity, Long> {
    public List<CatalogEntity> findAllByOwnerEmail(String email);

    public List<CatalogEntity> findAllByPersonalIs(boolean isPersonal);

    public CatalogEntity findByIndividualReference(String ref);
}
