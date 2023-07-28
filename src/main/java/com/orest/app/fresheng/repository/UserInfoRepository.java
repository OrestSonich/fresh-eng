package com.orest.app.fresheng.repository;

import com.orest.app.fresheng.entity.UserInfoEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserInfoRepository extends JpaRepository<UserInfoEntity, Long> {
}
