package com.orest.app.template_spring_app.security.auth;

import com.orest.app.template_spring_app.entity.UserEntity;
import com.orest.app.template_spring_app.exception.EmailAreBusyException;
import com.orest.app.template_spring_app.repository.UserRepo;
import com.orest.app.template_spring_app.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepo repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {

        if (repository.existsUserEntityByEmail(request.getEmail())){
            throw new EmailAreBusyException("This email are busy");
        }
        var user = UserEntity.builder()
//                .firstName(request.getFirstName())
//                .lastName(request.getLastName())
//                .email(request.getEmail())
//                .password(passwordEncoder.encode(request.getPassword()))
//                .role(UserRole.USER)
//                .createdAt(Date.valueOf(LocalDate.now()))
//                .enabled(true)
                // todo realise
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
