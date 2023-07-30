package com.orest.app.fresheng.services;

import com.orest.app.fresheng.entity.CatalogEntity;
import com.orest.app.fresheng.entity.UserEntity;
import com.orest.app.fresheng.exceptions.CatalogException;
import com.orest.app.fresheng.models.CatalogModel;
import com.orest.app.fresheng.repository.CatalogRepository;
import com.orest.app.fresheng.repository.UserRepository;
import com.orest.app.fresheng.security.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CatalogService {

    private final JwtService jwtService;

    private final UserRepository userRepository;

    private final CatalogRepository repository;

    @Autowired
    public CatalogService(JwtService service,
                          CatalogRepository repository,
                          UserRepository userRepository) {
        this.userRepository = userRepository;
        this.jwtService = service;
        this.repository = repository;
    }

    public List<CatalogModel> getAllCatalogsByUserEmailFromJwt(String header) {
        List<CatalogEntity> catalogEntities = repository
                .findAllByOwnerEmail(jwtService.extractEmailToString(header));
        return CatalogModel.toModel(catalogEntities);
    }

    public void addCatalog(CatalogEntity catalogEntity,
                           String header) {
        UserEntity user = userRepository.findByEmail(jwtService
                        .extractEmailToString(header))
                .orElseThrow();
        catalogEntity.setOwner(user);
        repository.save(catalogEntity);
    }

    public List<CatalogModel> getAllPublicCatalogs() {
        List<CatalogEntity> catalogEntities = repository
                .findAllByPersonalIs(false);
        return CatalogModel.toModel(catalogEntities);
    }

    public CatalogModel getByReference(String ref) {

        if (ref != null) {
            try {
            CatalogEntity catalogEntity = repository.
                    findByIndividualReference(ref)
                    .orElseThrow(() -> new CatalogException("catalog2 not found"));
            return CatalogModel.toModel(catalogEntity);
            } catch (Exception exception){
                System.err.println(exception.getMessage() + "salam");
            }
        }

        throw new IllegalArgumentException("reference is null");
    }
}
