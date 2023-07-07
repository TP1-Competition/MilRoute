import { useState, useEffect } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { FaBus, FaCar } from 'react-icons/fa';
import { MdStars } from 'react-icons/md';
import axios from 'axios';
import PMap from './Map/KakaoMapPublic';
// import CMap from './Map/KaKaoMapCar';
import PublicInfo from './Info/PublicInfo';
// import CarInfo from './Info/CarInfo';
// import carApi from './api/carApi';
// import busApi from './api/busApi';
import { useLocation } from 'react-router-dom';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../css/alert.css';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

const swal = withReactContent(Swal);

const ShortRoute = () => {
  // const [carData, setCarData] = useState(null);
  const [busData, setBusData] = useState(null);
  const [activeRoute, setActiveRoute] = useState(0);

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    const fetchData = () => {
      // const carResonse = await carApi();
      // setCarData(carResonse);

      const response = location.state.data;

      const busResponse = response;
      setBusData(busResponse);
    };

    fetchData();
  }, []);

  const handleActiveRoute = (index) => {
    setActiveRoute(index);
  };

  const [selectedCategory, setSelectedCategory] = useState('public');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const saveRoute = () => {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('accessToken');
    const routeId = busData.id;

    swal
      .fire({
        heightAuto: false,
        icon: 'question',
        text: `이 경로를 저장하시겠습니까?`,
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        showCancelButton: true,
        cancelButtonText: '취소',
        width: 400,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios
            .get(
              `http://localhost:8080/api/v1/users/${userId}/routes/${routeId}/register`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            )
            .then((response) => {
              // 응답 처리 로직 작성
              navigate('/bookmark');
            });
        }
      });
  };

  return (
    <S.ShortRouteContainer>
      <S.TopWrapper>
        <S.Header>
          <S.ArrowWrapper>
            <BsArrowLeft size={20} />
          </S.ArrowWrapper>
          <h2>최적 경로 표기</h2>
          <button>
            <MdStars size={15} />
            <span onClick={saveRoute}>경로 저장하기</span>
          </button>
        </S.Header>

        <S.CategoryWrapper>
          {/* <button
            onClick={() => handleCategoryChange('car')}
            className={selectedCategory === 'car' ? 'active' : ''}
          >
            <FaCar size={17} /> 자동차
          </button> */}

          <button
            onClick={() => handleCategoryChange('public')}
            className={selectedCategory === 'public' ? 'active' : ''}
          >
            <FaBus size={15} /> 대중교통
          </button>
        </S.CategoryWrapper>
        <S.MapWrapper>
          {/* {selectedCategory === 'car' ? ( */}
          {/* carData ? (
              <CMap data={carData} active={activeRoute} />
            ) : (
              <p>로딩 중...</p>
            )
          ) :  */}
          {busData ? (
            <PMap data={busData} active={activeRoute} />
          ) : (
            <p>로딩 중...</p>
          )}
        </S.MapWrapper>
      </S.TopWrapper>
      <S.InfoWrapper>
        {/* {selectedCategory === 'car' ? (
          carData ? (
            <CarInfo
              data={carData}
              active={activeRoute}
              onClick={(index) => handleActiveRoute(index)}
            />
          ) : (
            <p>로딩 중...</p>
          )
        ) :  */}
        {busData ? (
          <PublicInfo
            data={busData}
            active={activeRoute}
            onClick={(index) => handleActiveRoute(index)}
          />
        ) : (
          <p>로딩 중...</p>
        )}
      </S.InfoWrapper>
    </S.ShortRouteContainer>
  );
};

export default ShortRoute;
