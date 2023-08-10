package com.orest.app.fresheng.controllers;

import com.orest.app.fresheng.entity.CatalogEntity;
import com.orest.app.fresheng.models.CatalogModel;
import com.orest.app.fresheng.services.CatalogService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/catalogs")
@RequiredArgsConstructor
@CrossOrigin(value = {"http://localhost:3000/"})
public class CatalogController {

    private CatalogService service;

    @Autowired
    public CatalogController(CatalogService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<CatalogModel>> getCatalogs(@RequestHeader("Authorization")
                                                              String header){
        return ResponseEntity.ok(service.getAllCatalogsByUserEmailFromJwt(header));
    }

    @PostMapping
    public ResponseEntity<Object> createCatalog(@RequestHeader("Authorization") String header,
                                                @RequestBody @Valid CatalogEntity catalogEntity){
        service.addCatalog(catalogEntity, header);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping(value = "/all")
    public ResponseEntity<List<CatalogModel>> getAllCatalogs(){
        return ResponseEntity.ok(service.getAllPublicCatalogs());
    }

    @GetMapping(value = "/{code}")
    public ResponseEntity<CatalogModel> getCatalogByReference(@PathVariable String code){
        return ResponseEntity.ok(service.getByReference(code));
    }
}
