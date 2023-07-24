package com.orest.app.template_spring_app.repository;

import com.orest.app.template_spring_app.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<UserEntity, Long> {

    Optional<UserEntity> findByEmail(String email);
    Optional<UserEntity> findAllById(Long id);

    void deleteByEmail(String email);
    boolean existsUserEntityByEmail (String email);

}
