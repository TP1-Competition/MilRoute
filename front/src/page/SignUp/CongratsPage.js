import { useNavigate } from 'react-router-dom';
import * as S from './style';

import { BsArrowLeft } from 'react-icons/bs';

const CongratsPage = () => {
  const navigate = useNavigate();

  const handleGoToMainPage = () => {
    navigate('/');
  };

  return (
    <>
      <S.CongratsHeader>
        <BsArrowLeft size={20} />
        <h2>가입완료</h2>
      </S.CongratsHeader>
      <S.CongratsWrapper>
        <S.CongratsCheckIcon src='../Img/CongratsPage/checkImg.svg' />
        <S.CongratsMessage>
          축하합니다.
          <br /> 회원가입이 완료되었습니다.
        </S.CongratsMessage>
        <S.CongratsButton onClick={handleGoToMainPage}>
          홈으로 가기
        </S.CongratsButton>
      </S.CongratsWrapper>
    </>
  );
};

export default CongratsPage;
