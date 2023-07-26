package com.orest.app.fresheng.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.orest.app.fresheng.entity.UserEntity;
import com.orest.app.fresheng.entity.UserInfoEntity;
import com.orest.app.fresheng.enums.Ranks;
import lombok.Builder;
import lombok.Data;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Data
@Builder
public class UserModel {

    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date registrationAt;
    private Ranks rank;
    private List<CatalogModel> catalogs;

    public static UserModel toModel(UserEntity entity){
        UserInfoEntity info = entity.getInfo();
        return UserModel.builder()
              .email(entity.getEmail())
                .firstName(info.getFirstName())
                .lastName(info.getLastName())
                .phoneNumber(info.getPhoneNumber())
                .rank(info.getRank())
                .registrationAt(info.getRegisteredAt())
                .catalogs(entity.getCatalogList().stream()
                        .map(CatalogModel::toModel).collect(Collectors.toList()))
                .build();
    } 

}
