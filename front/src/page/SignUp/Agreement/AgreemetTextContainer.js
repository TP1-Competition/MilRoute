import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

import * as S from './style';
import agreementText from './agreementText';

const AgreemetTextContainer = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // 뒤로가기
  };

  const handleGoAgreementPage = () => {
    navigate('/agreementpage');
  };

  return (
    <>
      <S.AgreementPageHeader>
        <S.AgreementBackButton onClick={handleGoBack}>
          <BsArrowLeft size={20} />
        </S.AgreementBackButton>
        <S.H2>약관동의</S.H2>
      </S.AgreementPageHeader>
      <S.AgreementTextContainer>
        <S.AgreementText>
          <div>
            <h4>서비스 이용약관</h4>
            <span>(필수)</span>
          </div>
          <S.AgreementTextContent>{agreementText}</S.AgreementTextContent>
        </S.AgreementText>
        <S.Button onClick={handleGoAgreementPage}>확인완료</S.Button>
      </S.AgreementTextContainer>
    </>
  );
};

export default AgreemetTextContainer;
