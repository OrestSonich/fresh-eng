package com.orest.app.template_spring_app.services;

import com.orest.app.template_spring_app.entity.UserEntity;
import com.orest.app.template_spring_app.models.UserModel;
import com.orest.app.template_spring_app.repository.UserInfoRepo;
import com.orest.app.template_spring_app.repository.UserRepo;
import com.orest.app.template_spring_app.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepo repository;
    private final UserInfoRepo infoRepository;
    private final JwtService jwtService;


    public UserModel getUserFromTokenHeader(String authHeader){
        String email = jwtService.extractEmailToString(authHeader);
        UserEntity user = repository.findByEmail(email).orElseThrow();
        return UserModel.toModel(user);
    }

    public void deleteUserFromTokenHeader(String authHeader) {
        String email = jwtService.extractEmail(authHeader.substring(7));
        UserEntity user = repository.findByEmail(email).orElseThrow();
        user.setInfo(null);
        infoRepository.deleteById(user.getId());
        repository.deleteByEmail(email);
    }
}
