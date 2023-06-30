import axios from 'axios';

const accessToken = localStorage.getItem('Access-Token');

const instance = axios.create({
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export default instance;
