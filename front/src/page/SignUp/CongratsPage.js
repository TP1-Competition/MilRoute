import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

const CongratsPage = () => {
  const navigate = useNavigate();

  const handleGoToMainPage = () => {
    navigate('/');
  };

  return (
    <S.CongratsWrapper>
      <S.CongratsCheckIcon>&#10003;</S.CongratsCheckIcon>
      <S.CongratsMessage>
        축하합니다.
        <br /> 회원가입이 완료되었습니다.
      </S.CongratsMessage>
      <S.CongratsButton onClick={handleGoToMainPage}>
        MainPage로 가기
      </S.CongratsButton>
    </S.CongratsWrapper>
  );
};

export default CongratsPage;
