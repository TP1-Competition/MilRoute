import axios from 'axios';

const busApi = async () => {
  try {
    // 서버에서 버스 데이터 받아오기
    // const userId = localStorage.getItem('userId');
    // const response = await axios.get(
    //   `http://localhost:8080/api/v1/users/${userId}/routes/1`
    // );
    const response = await axios.get('/b.json');

    return response.data;
  } catch (error) {
    console.log('오류:', error);
  }
};

export default busApi;
