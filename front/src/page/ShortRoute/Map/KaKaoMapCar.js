import React, { useRef, useEffect } from 'react';
import axios from 'axios';

const CMap = ({ data, active }) => {
  const container = useRef(null);

  const ROAD_COLOR = ['red', 'green', 'blue', 'yellow', 'black'];

  // 서버에서 온  좌표로 각 경로 구하기
  const { origin, destination, waypoints } = data.summary;

  const startPlace = active === 0 ? origin : waypoints[active - 1];
  const endPlace =
    active === waypoints.length ? destination : waypoints[active];

  useEffect(() => {
    const { kakao } = window;

    const options = {
      center: new kakao.maps.LatLng(startPlace.y, startPlace.x),
      level: 6,
    };

    const map = new kakao.maps.Map(container.current, options);

    const fetchData = async () => {
      try {
        const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
        const url =
          'https://apis-navi.kakaomobility.com/v1/waypoints/directions';
        const headers = {
          Authorization: `KakaoAK ${REST_API_KEY}`,
          'Content-Type': 'application/json',
        };

        const requestBody = {
          origin: startPlace,
          destination: endPlace,
          priority: 'RECOMMEND',
          car_fuel: 'GASOLINE',
          car_hipass: false,
          alternatives: false,
          road_details: false,
        };

        const response = await axios.post(url, requestBody, { headers });

        // 시작점, 도착점, 경유지에 마커 찍기
        // 마커를 표시할 위치와 title 객체 배열입니다
        const positions = [
          {
            title: '출발지점',
            latlng: new kakao.maps.LatLng(startPlace.y, startPlace.x),
          },
          {
            title: '도착지점',
            latlng: new kakao.maps.LatLng(endPlace.y, endPlace.x),
          },
        ];

        const imageSrc = '/Img/marker.png';

        positions.forEach((pos) => {
          const imageSize = new kakao.maps.Size(30, 35);

          const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

          const marker = new kakao.maps.Marker({
            map: map,
            position: pos.latlng,
            title: pos.title,
            image: markerImage,
          });
        });

        // console.log(response.data);

        const data = response.data;

        if (data.routes && data.routes.length > 0 && data.routes[0].sections) {
          // 섹션(section)별로 반복
          data.routes[0].sections.forEach((section) => {
            let pathPoints = [];

            if (section.roads && section.roads.length > 0) {
              // 로드(road)별로 반복
              section.roads.forEach((road) => {
                if (road.vertexes && road.vertexes.length > 0) {
                  // 좌표(vertexes)별로 반복
                  if (road.vertexes && road.vertexes.length > 0) {
                    for (let i = 0; i < road.vertexes.length; i += 2) {
                      const x = road.vertexes[i];
                      const y = road.vertexes[i + 1];

                      pathPoints.push(new kakao.maps.LatLng(y, x));
                    }
                  }
                }
              });
            }

            let polyline = new kakao.maps.Polyline({
              path: pathPoints,
              strokeWeight: 3,
              strokeColor: ROAD_COLOR.splice(0, 1),
              strokeOpacity: 1,
              strokeStyle: 'solid',
            });

            polyline.setMap(map);
          });
        }
      } catch (error) {
        // console.log('오류:', error);
      }
    };

    fetchData();
  }, [active]);

  return (
    <div>
      <div
        className='map'
        style={{ width: '100%', height: '30rem' }}
        ref={container}
      ></div>
    </div>
  );
};

export default CMap;
