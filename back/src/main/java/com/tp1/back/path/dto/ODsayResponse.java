package com.tp1.back.path.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class ODsayResponse {

    @JsonProperty("result")
    private Result result;

    @Data
    public static class Result {
        @JsonProperty("path")
        private List<Path> path;
        @JsonProperty("endRadius")
        private int endradius;
        @JsonProperty("startRadius")
        private int startradius;
        @JsonProperty("pointDistance")
        private int pointdistance;
        @JsonProperty("subwayBusCount")
        private int subwaybuscount;
        @JsonProperty("subwayCount")
        private int subwaycount;
        @JsonProperty("busCount")
        private int buscount;
        @JsonProperty("outTrafficCheck")
        private int outtrafficcheck;
        @JsonProperty("searchType")
        private int searchtype;
    }

    @Data
    public static class Path {
        @JsonProperty("subPath")
        private List<SubPath> subpath;
        @JsonProperty("info")
        private Info info;
        @JsonProperty("pathType")
        private int pathtype;
    }

    @Data
    public static class SubPath {
        @JsonProperty("passStopList")
        private Passstoplist passstoplist;
        @JsonProperty("endExitY")
        private double endexity;
        @JsonProperty("endExitX")
        private double endexitx;
        @JsonProperty("endExitNo")
        private String endexitno;
        @JsonProperty("startExitY")
        private double startexity;
        @JsonProperty("startExitX")
        private double startexitx;
        @JsonProperty("startExitNo")
        private String startexitno;
        @JsonProperty("endID")
        private int endid;
        @JsonProperty("startID")
        private int startid;
        @JsonProperty("door")
        private String door;
        @JsonProperty("wayCode")
        private int waycode;
        @JsonProperty("way")
        private String way;
        @JsonProperty("endY")
        private double endy;
        @JsonProperty("endX")
        private double endx;
        @JsonProperty("endName")
        private String endname;
        @JsonProperty("startY")
        private double starty;
        @JsonProperty("startX")
        private double startx;
        @JsonProperty("startName")
        private String startname;
        @JsonProperty("lane")
        private List<Lane> lane;
        @JsonProperty("stationCount")
        private int stationcount;
        @JsonProperty("sectionTime")
        private int sectiontime;
        @JsonProperty("distance")
        private int distance;
        @JsonProperty("trafficType")
        private int traffictype;
    }

    @Data
    public static class Passstoplist {
        @JsonProperty("stations")
        private List<Stations> stations;
    }

    @Data
    public static class Stations {
        @JsonProperty("y")
        private String y;
        @JsonProperty("x")
        private String x;
        @JsonProperty("stationName")
        private String stationname;
        @JsonProperty("stationID")
        private int stationid;
        @JsonProperty("index")
        private int index;
    }

    @Data
    public static class Lane {
        @JsonProperty("subwayCityCode")
        private int subwaycitycode;
        @JsonProperty("subwayCode")
        private int subwaycode;
        @JsonProperty("place_name")
        private String name;
        @JsonProperty("busNo")
        private String busNo;
    }

    @Data
    public static class Info {
        @JsonProperty("checkIntervalTimeOverYn")
        private String checkintervaltimeoveryn;
        @JsonProperty("checkIntervalTime")
        private int checkintervaltime;
        @JsonProperty("totalWalkTime")
        private int totalwalktime;
        @JsonProperty("totalDistance")
        private int totaldistance;
        @JsonProperty("subwayStationCount")
        private int subwaystationcount;
        @JsonProperty("busStationCount")
        private int busstationcount;
        @JsonProperty("totalStationCount")
        private int totalstationcount;
        @JsonProperty("lastEndStation")
        private String lastendstation;
        @JsonProperty("firstStartStation")
        private String firststartstation;
        @JsonProperty("mapObj")
        private String mapobj;
        @JsonProperty("subwayTransitCount")
        private int subwaytransitcount;
        @JsonProperty("busTransitCount")
        private int bustransitcount;
        @JsonProperty("payment")
        private int payment;
        @JsonProperty("totalTime")
        private int totaltime;
        @JsonProperty("totalWalk")
        private int totalwalk;
        @JsonProperty("trafficDistance")
        private int trafficdistance;
    }
}
