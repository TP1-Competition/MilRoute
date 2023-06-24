import { useNavigate } from 'react-router-dom';

import * as S from './style';

const AgreementPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // 뒤로가기
  };

  return (
    <>
      <S.AgreementPageHeader>
        <S.AgreementBackButton onClick={handleGoBack}>
          &larr;
        </S.AgreementBackButton>
        <S.H2>약관동의</S.H2>
      </S.AgreementPageHeader>

      <S.AgreementContainer>
        <S.H4>
          가입 약관을 읽고
          <br /> 동의해주세요.
        </S.H4>
        <S.P>약관 동의</S.P>
        <S.AgreementCheckboxLabel>
          <S.AgreementCheckbox type='checkbox' name='all' />
          <S.AgreementTitle all>전체 동의</S.AgreementTitle>
        </S.AgreementCheckboxLabel>
        <S.Hr />
        <S.AgreementCheckboxLabel>
          <S.AgreementCheckbox type='checkbox' name='service' />
          <S.AgreementTitle>
            서비스 이용약관<S.RequiredText>(필수)</S.RequiredText>
          </S.AgreementTitle>
        </S.AgreementCheckboxLabel>
        <S.AgreementCheckboxLabel>
          <S.AgreementCheckbox type='checkbox' name='third' />
          <S.AgreementTitle>
            개인정보 제 3자 제공 동의<S.RequiredText>(필수)</S.RequiredText>
          </S.AgreementTitle>
        </S.AgreementCheckboxLabel>
        <S.AgreementCheckboxLabel>
          <S.AgreementCheckbox type='checkbox' name='age' />
          <S.AgreementTitle>
            만 14세 이상입니다.<S.RequiredText>(필수)</S.RequiredText>
          </S.AgreementTitle>
        </S.AgreementCheckboxLabel>
        <S.RequiredTextDiv>
          * 미성년자는 서비스 이용이 불가능합니다
        </S.RequiredTextDiv>
        <S.AgreementCheckboxLabel>
          <S.AgreementCheckbox type='checkbox' name='collect' />
          <S.AgreementTitle>
            개인정보 수집 및 이용 동의
            <S.NonRequiredText>(선택)</S.NonRequiredText>
          </S.AgreementTitle>
        </S.AgreementCheckboxLabel>
        <S.AgreementCheckboxLabel>
          <S.AgreementCheckbox type='checkbox' name='event' />
          <S.AgreementTitle>
            이벤트/마케팅 수신 동의<S.NonRequiredText>(선택)</S.NonRequiredText>
          </S.AgreementTitle>
        </S.AgreementCheckboxLabel>
      </S.AgreementContainer>

      <S.AgreementButtonWrapper>
        <S.AgreementButton>다음</S.AgreementButton>
      </S.AgreementButtonWrapper>
    </>
  );
};

export default AgreementPage;
