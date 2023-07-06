import axios from 'axios';
import getPosition from './getPosition';

const carApi = async () => {
  try {
    // 서버에서 출발지, 도착지, 경유지 받아오기 - 받아오면 필요없는 코드

    const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
    const url = 'https://apis-navi.kakaomobility.com/v1/waypoints/directions';
    const headers = {
      Authorization: `KakaoAK ${REST_API_KEY}`,
      'Content-Type': 'application/json',
    };

    const { origin, destination, waypoints } = getPosition();

    const requestBody = {
      origin: origin,
      destination: destination,
      waypoints: waypoints,
      priority: 'RECOMMEND',
      car_fuel: 'GASOLINE',
      car_hipass: false,
      alternatives: false,
      road_details: false,
      summary: false,
    };
    // 서버에서 출발지, 도착지, 경유지 받아와서 response 반환하기
    const response = await axios.post(url, requestBody, { headers });

    return response.data.routes[0];
  } catch (error) {
    console.log('오류:', error);
  }
};

export default carApi;
