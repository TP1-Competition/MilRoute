package com.tp1.back.member.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;

public record RegisterRequest(
        @Email(message = "이메일 형식이 올바르지 않습니다.")
        String email,
        @Pattern(message = "비밀번호 형식이 올바르지 않습니다.", regexp = "^(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{6,20}$")
        String password
) {
}
