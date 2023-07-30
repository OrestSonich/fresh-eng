package com.orest.applicationame.template_spring_app.services;

import com.orest.app.fresheng.FreshEngApplication;
import com.orest.app.fresheng.entity.CatalogEntity;
import com.orest.app.fresheng.entity.UserEntity;
import com.orest.app.fresheng.entity.UserInfoEntity;
import com.orest.app.fresheng.models.CatalogModel;
import com.orest.app.fresheng.repository.CatalogRepository;
import com.orest.app.fresheng.services.CatalogService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.Optional;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@SpringBootTest(classes = FreshEngApplication.class)
public class CatalogServiceTest {

    @Mock
    private CatalogRepository repository;
    @InjectMocks
    private CatalogService service;

    private CatalogEntity catalogEntity;
    private final String ref = "fafdnsj-213-sda31-fds3-34";

    @BeforeEach
    public void beforeEach() {
        catalogEntity = CatalogEntity.builder()
                .id(1L)
                .owner(UserEntity.builder()
                        .info(mock(UserInfoEntity.class))
                        .build())
                .name("123")
                .cards(new ArrayList<>())
                .build();
    }
    @Test
    public void should_GetCatalog_When_RefAreExist () {

        when(repository.findByIndividualReference(ref))
                .thenReturn(Optional.ofNullable(catalogEntity));

        final CatalogModel actual = service.getByReference(ref);

        Assertions.assertNotNull(actual);
        Assertions.assertEquals(CatalogModel.toModel(catalogEntity), actual);
    }
}
