package com.tp1.back.member.application;

import com.tp1.back.member.domain.Member;
import com.tp1.back.member.domain.MemberRepository;
import com.tp1.back.member.dto.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public boolean register(RegisterRequest request) {
        memberRepository.findByEmail(request.email())
                .ifPresent(member -> {
                    throw new IllegalArgumentException("이미 등록된 이메일입니다.");
                });

        Member member = new Member(request.email(), passwordEncoder.encode(request.password()));
        memberRepository.save(member);

        return true;
    }
}
