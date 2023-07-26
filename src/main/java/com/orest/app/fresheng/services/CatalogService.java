package com.orest.app.fresheng.services;

import com.orest.app.fresheng.entity.CatalogEntity;
import com.orest.app.fresheng.entity.UserEntity;
import com.orest.app.fresheng.models.CatalogModel;
import com.orest.app.fresheng.repository.CatalogRepo;
import com.orest.app.fresheng.repository.UserRepo;
import com.orest.app.fresheng.security.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CatalogService {

    private final JwtService jwtService;
    private final UserRepo userRepo;
    private final CatalogRepo repository;

    @Autowired
    public CatalogService(JwtService service, CatalogRepo repository, UserRepo userRepo) {
        this.userRepo = userRepo;
        this.jwtService = service;
        this.repository = repository;
    }

    public List<CatalogModel> getAllCatalogsByUserEmailFromJwt(String header) {
        List<CatalogEntity> catalogEntities = repository
                .findAllByOwnerEmail(jwtService.extractEmailToString(header));
        return CatalogModel.toModel(catalogEntities);
    }

    public void addCatalog(CatalogEntity catalogEntity, String header) {
        UserEntity user = userRepo.findByEmail(jwtService.extractEmailToString(header)).orElseThrow();
        catalogEntity.setOwner(user);
        repository.save(catalogEntity);
    }

    public List<CatalogModel> getAllPublicCatalogs() {
        List<CatalogEntity> catalogEntities = repository.findAllByPersonalIs(false);
        return CatalogModel.toModel(catalogEntities);
    }

    public CatalogModel getByReference(String ref) {
        return CatalogModel.toModel(repository.findByIndividualReference(ref));
    }
}
