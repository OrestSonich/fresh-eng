package com.orest.app.template_spring_app.models;

import com.orest.app.template_spring_app.entity.UserEntity;
import com.orest.app.template_spring_app.entity.UserInfoEntity;
import com.orest.app.template_spring_app.enums.Ranks;
import lombok.Builder;
import lombok.Data;

import java.util.Date;

@Data
@Builder
public class UserModel {
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private Date registrationAt;
    private Ranks rank;

    public static UserModel toModel(UserEntity entity){
        UserInfoEntity info = entity.getInfo();
        return UserModel.builder()
              .email(entity.getEmail())
                .firstName(info.getFirstName())
                .lastName(info.getLastName())
                .phoneNumber(info.getPhoneNumber())
                .rank(info.getRank())
                .registrationAt(info.getRegisteredAt())
                .build();
    }

}
