package com.orest.app.fresheng.entity;

import com.orest.app.fresheng.enums.Ranks;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@Data
@NoArgsConstructor
@Builder(toBuilder = true)
@AllArgsConstructor
@Table(name = "user_info")
@Entity
public class UserInfoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private String phoneNumber;



    @Enumerated(EnumType.STRING)
    private Ranks rank;

    private Date registeredAt;

}
