package com.orest.app.fresheng.repository;

import com.orest.app.fresheng.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

    Optional<UserEntity> findByEmail(String email);
    void deleteByEmail(String email);
    boolean existsUserEntityByEmail (String email);
}
