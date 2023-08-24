package com.tp1.back.auth.presentation;

import com.tp1.back.auth.application.AuthenticateService;
import com.tp1.back.auth.dto.AuthenticateRequest;
import com.tp1.back.auth.dto.AuthenticateResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/v1/auth")
@RestController
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticateService authenticateService;

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticateResponse> authenticate(@Valid @RequestBody AuthenticateRequest request) {
        return ResponseEntity.ok(authenticateService.authenticate(request));
    }

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<String> badCredentials() {
        return ResponseEntity
                .status(HttpStatus.UNAUTHORIZED)
                .body("이메일 또는 비밀번호가 틀렸습니다.");
    }
}
