package com.tp1.back.path.domain;

public enum PathType {

    SUBWAY(Values.SUBWAY), BUS(Values.BUS), WALK(Values.WALK);

    private final String code;

    PathType(String code) {
        this.code = code;
    }

    public static class Values {
        public static final String SUBWAY = "1";
        public static final String BUS = "2";
        public static final String WALK = "3";
    }
}
