import { useState, useEffect } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { FaBus, FaCar } from 'react-icons/fa';
import { MdStars } from 'react-icons/md';

import PMap from './Map/KakaoMapPublic';
import CMap from './Map/KaKaoMapCar';
import PublicInfo from './Info/PublicInfo';
import CarInfo from './Info/CarInfo';
import carApi from './api/carApi';
import busApi from './api/busApi';

import * as S from './style';

const ShortRoute = () => {
  // const [carData, setCarData] = useState(null);
  const [busData, setBusData] = useState(null);
  const [activeRoute, setActiveRoute] = useState(0);

  // 서버에 데이터 요청하기
  useEffect(() => {
    const fetchData = async () => {
      // const carResonse = await carApi();
      // setCarData(carResonse);

      const busResponse = await busApi();
      setBusData(busResponse);
    };

    fetchData();
  }, []);

  const handleActiveRoute = (index) => {
    setActiveRoute(index);
  };

  const [selectedCategory, setSelectedCategory] = useState('car');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
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
            <span>경로 저장하기</span>
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
