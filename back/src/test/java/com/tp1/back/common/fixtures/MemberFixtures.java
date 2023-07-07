package com.tp1.back.common.fixtures;

import com.tp1.back.member.domain.Member;

public enum MemberFixtures {

    AINE("aine1234@gmail.com", "aine1234"),
    BOB("bob567@naver.com", "qwerty123"),
    CARL("carl0101@daum.net", "asdf123"),
    DANNY("daaanny1225@gmail.com", "danny123"),
    ;
    public final String email;
    public final String password;

    public final Member member;

    MemberFixtures(String email, String password) {
        this.email = email;
        this.password = password;
        this.member = new Member(email, password);
    }
}
