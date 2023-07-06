package com.tp1.back.path.application;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tp1.back.path.dto.ODsayResponse;
import com.tp1.back.path.dto.PathDto;
import com.tp1.back.path.dto.SubPathDto;
import com.tp1.back.place.domain.Place;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Comparator;
import java.util.List;

@Slf4j
@Component
public class ODsayPathProvider implements PathProvider {

    private static final String ODSAY_URI = "https://api.odsay.com/v1/api/searchPubTransPathT";

    @Value("${odsay.secret-key}")
    private String apiKey;

    public PathDto calculatePath(Place startPlace, Place endPlace) {
        log.info("s: {}, e: {}", startPlace.getName(), endPlace.getName());

        var response = requestPath(startPlace, endPlace);

        try {
            log.info(new ObjectMapper().writeValueAsString(response));
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }

        if (response.getResult() == null) return null;

        ODsayResponse.Path minPath = response.getResult()
                .getPath()
                .stream()
                .min(Comparator.comparingInt(o -> o.getInfo().getTotaldistance()))
                .orElseThrow();

        List<SubPathDto> subPaths = minPath.getSubpath()
                .stream()
                .filter(subPath -> subPath.getTraffictype() != 3)
                .map(this::mapToSubPathDto)
                .toList();

        String minMapObj = minPath.getInfo()
                .getMapobj();

        int payment = minPath.getInfo()
                .getPayment();

        return new PathDto(subPaths, minMapObj, payment, startPlace, endPlace);
    }

    private ODsayResponse requestPath(Place startPlace, Place endPlace) {
        RestTemplate restTemplate = new RestTemplate();

        String encodedApiKey = URLEncoder.encode(apiKey, StandardCharsets.UTF_8);

        URI baseUri = UriComponentsBuilder
                .fromUriString(ODSAY_URI)
                .queryParam("apiKey", encodedApiKey)
                .build(true)
                .toUri();

        URI uri = UriComponentsBuilder
                .fromUri(baseUri)
                .queryParam("SX", startPlace.getLongitude())
                .queryParam("SY", startPlace.getLatitude())
                .queryParam("EX", endPlace.getLongitude())
                .queryParam("EY", endPlace.getLatitude())
                .build(true)
                .toUri();

        return restTemplate.getForObject(uri, ODsayResponse.class);
    }
    private SubPathDto mapToSubPathDto(ODsayResponse.SubPath subPath) {

        switch (subPath.getTraffictype()) {
            case 1 -> {
                return SubPathDto.builder()
                        .pathType("지하철")
                        .distance(subPath.getDistance())
                        .time(subPath.getSectiontime())
                        .name(subPath.getLane().get(0).getName())
                        .startStation(subPath.getPassstoplist()
                                .getStations()
                                .get(0)
                                .getStationname()
                        ).endStation(subPath.getPassstoplist()
                                .getStations()
                                .get(subPath.getPassstoplist().getStations().size() - 1)
                                .getStationname()
                        )
                        .build();
            }
            case 2 -> {
                return SubPathDto.builder()
                        .pathType("버스")
                        .distance(subPath.getDistance())
                        .time(subPath.getSectiontime())
                        .name(subPath.getLane().get(0).getBusNo())
                        .startStation(subPath.getPassstoplist()
                                .getStations()
                                .get(0)
                                .getStationname()
                        ).endStation(subPath.getPassstoplist()
                                .getStations()
                                .get(subPath.getPassstoplist().getStations().size() - 1)
                                .getStationname()
                        )
                        .build();
            }
        }

        throw new IllegalArgumentException();
    }

}
