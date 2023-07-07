package com.tp1.back.auth.dto;

public record AuthenticateResponse(
        Long id,
        String accessToken
) {
}
