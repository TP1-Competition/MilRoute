package com.tp1.back.member.dto;

public record RegisterRequest(
        String email,
        String password
) {
}
