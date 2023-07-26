package com.orest.app.fresheng.repository;

import com.orest.app.fresheng.entity.UserInfoEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserInfoRepo extends JpaRepository<UserInfoEntity, Long> {
}
