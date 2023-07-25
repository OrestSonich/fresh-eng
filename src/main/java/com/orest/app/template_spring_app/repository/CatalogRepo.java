package com.orest.app.template_spring_app.repository;

import com.orest.app.template_spring_app.entity.CatalogEntity;
import com.orest.app.template_spring_app.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CatalogRepo extends JpaRepository<CatalogEntity, Long> {
    public List<CatalogEntity> findAllByOwnerEmail(String email);

    public List<CatalogEntity> findAllByOwnerInfoFirstNameAndOwnerInfoLastName(String firstName,
                                                                               String lastName);
    public List<CatalogEntity> findAllById (Long id);
}
