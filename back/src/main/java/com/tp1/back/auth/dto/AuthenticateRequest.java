package com.tp1.back.auth.dto;

import jakarta.validation.constraints.NotNull;

public record AuthenticateRequest(
        @NotNull
        String email,
        @NotNull
        String password
) {
}
