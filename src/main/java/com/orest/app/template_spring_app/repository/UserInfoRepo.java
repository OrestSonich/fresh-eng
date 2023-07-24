package com.orest.app.template_spring_app.repository;

import com.orest.app.template_spring_app.entity.UserInfoEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserInfoRepo extends JpaRepository<UserInfoEntity, Long> {
}
