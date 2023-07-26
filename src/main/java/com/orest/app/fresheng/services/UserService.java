package com.orest.app.fresheng.services;

import com.orest.app.fresheng.entity.UserEntity;
import com.orest.app.fresheng.models.UserModel;
import com.orest.app.fresheng.repository.UserInfoRepo;
import com.orest.app.fresheng.repository.UserRepo;
import com.orest.app.fresheng.security.JwtService;
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
