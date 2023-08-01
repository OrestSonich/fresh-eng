package com.orest.app.fresheng.services;

import com.orest.app.fresheng.entity.CatalogEntity;
import com.orest.app.fresheng.entity.UserEntity;
import com.orest.app.fresheng.exceptions.ApiRequestException;
import com.orest.app.fresheng.models.CatalogModel;
import com.orest.app.fresheng.repository.CatalogRepository;
import com.orest.app.fresheng.repository.UserRepository;
import com.orest.app.fresheng.security.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;
import static org.springframework.http.HttpStatus.NOT_FOUND;

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
            HttpStatus tempCode;
        try {
            List<CatalogEntity> catalogEntities = repository
                    .findAllByOwnerEmail(jwtService.extractEmailToString(header));
            if (catalogEntities.isEmpty()){
                throw new ApiRequestException("this user dont have any catalogs", NOT_FOUND);
            }
            return CatalogModel.toModel(catalogEntities);
        } catch (Exception e){
            if (e.getClass() == ApiRequestException.class){
                tempCode = NOT_FOUND;
            } else {
                tempCode = INTERNAL_SERVER_ERROR;
            }
            throw new ApiRequestException(e.getMessage(), tempCode);
        }
    }

    public void addCatalog(CatalogEntity catalogEntity,
                           String header) {
        try{
            UserEntity user = userRepository.findByEmail(jwtService
                            .extractEmailToString(header))
                    .orElseThrow();
            catalogEntity.setOwner(user);
            repository.save(catalogEntity);
        } catch (Exception e){
            throw new ApiRequestException(e.getMessage(), INTERNAL_SERVER_ERROR);
        }
    }

    public List<CatalogModel> getAllPublicCatalogs() {
        try {
            List<CatalogEntity> catalogEntities = repository
                    .findAllByPersonalIs(false);
            if (catalogEntities.isEmpty()){
                throw new ApiRequestException("catalogs not found", NOT_FOUND);
            }
            return CatalogModel.toModel(catalogEntities);
        } catch (Exception e){
            throw new ApiRequestException(e.getMessage(), INTERNAL_SERVER_ERROR);
        }
    }

    public CatalogModel getByReference(String ref) {
            try {
                CatalogEntity catalogEntity = repository.
                        findByIndividualReference(ref)
                        .orElseThrow(() -> new ApiRequestException("catalog not found", NOT_FOUND));
                return CatalogModel.toModel(catalogEntity);
            } catch (Exception e){
                throw new ApiRequestException(e.getMessage(), INTERNAL_SERVER_ERROR);
            }
    }
}
