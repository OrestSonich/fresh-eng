package com.orest.app.fresheng.security.auth;

import com.orest.app.fresheng.entity.UserEntity;
import com.orest.app.fresheng.entity.UserInfoEntity;
import com.orest.app.fresheng.enums.Ranks;
import com.orest.app.fresheng.exceptions.EmailAreBusyException;
import com.orest.app.fresheng.repository.UserInfoRepo;
import com.orest.app.fresheng.repository.UserRepo;
import com.orest.app.fresheng.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.time.ZoneId;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepo repository;
    private final UserInfoRepo infoRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {

        if (repository.existsUserEntityByEmail(request.getEmail())){
            throw new EmailAreBusyException("This email are busy");
        }
        UserInfoEntity userInfo = UserInfoEntity.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .phoneNumber(request.getPhoneNumber())
                .rank(Ranks.BEGINNER)
                .registeredAt(Date.valueOf(LocalDate.now(ZoneId.of("GMT+0300"))))
                .build();
        infoRepository.save(userInfo);


        var user = UserEntity.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .info(userInfo)
                .build();
        repository.save(user);
        var jwtToken = jwtService.generateJwt(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }


    public AuthenticationResponse authenticate(AuthRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        var jwtToken = jwtService.generateJwt(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
