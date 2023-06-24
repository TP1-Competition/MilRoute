package com.tp1.back.auth.presentation;

import com.tp1.back.auth.application.AuthenticateService;
import com.tp1.back.auth.dto.AuthenticateRequest;
import com.tp1.back.auth.dto.AuthenticateResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
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

}
