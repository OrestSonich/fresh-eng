package com.orest.applicationame.template_spring_app.controllers;

import com.orest.app.fresheng.FreshEngApplication;
import com.orest.app.fresheng.controllers.UserController;
import com.orest.app.fresheng.models.UserModel;
import com.orest.app.fresheng.services.UserService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@SpringBootTest(classes = FreshEngApplication.class)
public class UserControllerTest {

    @Mock
    private UserService userService;

    @InjectMocks
    private UserController userController;

    private final String mockJwt = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MkBlbWFpbC5jb20iLCJpYXQiOjE2OTA1Nzg0MDIsImV4cCI6MTY5MDY2NDgwMn0.xETykorILtFHXfkXOR0Gvmlqv4cx1k1K9FndOygDHis";

    @Test
    public void should_ReturnUser_When_JwtHaveEmail () {
        UserModel userModel = mock(UserModel.class);
        when(userService.getUserFromTokenHeader(mockJwt))
                .thenReturn(userModel);

        UserModel actual = userController.getUser(mockJwt).getBody();

        Assertions.assertNotNull(actual);
        Assertions.assertEquals(userModel, actual);

    }

}
