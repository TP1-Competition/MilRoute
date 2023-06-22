package com.tp1.back.common.fixtures;

import com.tp1.back.member.domain.Member;

public class MemberFixtures {

    // aine
    public static final String AINE_EMAIL = "aine1234@gmail.com";
    public static final String AINE_PASSWORD = "aine1234";

    // bob
    public static final String BOB_EMAIL = "bob567@naver.com";
    public static final String BOB_PASSWORD = "qwerty123";

    // carl
    public static final String CARL_EMAIL = "carl0101@daum.net";
    public static final String CARL_PASSWORD = "asdf123";

    // danny
    public static final String DANNY_EMAIL = "daaanny1225@gmail.com";
    public static final String DANNY_PASSWORD = "danny123";

    public static Member aine() {
        return new Member(AINE_EMAIL, AINE_PASSWORD);
    }

    public static Member bob() {
        return new Member(BOB_EMAIL, BOB_PASSWORD);
    }

    public static Member carl() {
        return new Member(CARL_EMAIL, CARL_PASSWORD);
    }

    public static Member danny() {
        return new Member(DANNY_EMAIL, DANNY_PASSWORD);
    }
}
