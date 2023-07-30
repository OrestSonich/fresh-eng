package com.orest.app.fresheng.controllers;

import com.orest.app.fresheng.entity.CatalogEntity;
import com.orest.app.fresheng.exceptions.ApiRequestException;
import com.orest.app.fresheng.models.CatalogModel;
import com.orest.app.fresheng.services.CatalogService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/catalogs")
@RequiredArgsConstructor
@CrossOrigin
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
    public ResponseEntity<String> createCatalog(@RequestHeader("Authorization") String header,
                                                @RequestBody CatalogEntity catalogEntity){
        service.addCatalog(catalogEntity, header);
        return ResponseEntity.ok("catalog added!");
    }

    @GetMapping(value = "/all")
    public ResponseEntity<List<CatalogModel>> getAllCatalogs(){
//        return ResponseEntity.ok(service.getAllPublicCatalogs());
        throw new ApiRequestException("test");
    }

    @GetMapping(value = "/{code}")
    public ResponseEntity<CatalogModel> getCatalogByReference(@PathVariable String code){
        return ResponseEntity.ok(service.getByReference(code));
    }

}
