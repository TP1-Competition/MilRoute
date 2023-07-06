import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { IoIosArrowDropright } from 'react-icons/io';
import { useState, useCallback } from 'react';
import CustomCheckBox from '../../../component/Input/CheckBox';
import * as S from './style';

const AgreementPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // 뒤로가기
  };

  const handleNextButtonClick = () => {
    navigate('/signup');
  };

  const [agreements, setAgreements] = useState({
    service: false,
    privacy: false,
    thirdParty: false,
    age: false,
    collect: false,
    event: false,
    all: false,
  });

  const handleAgreementChange = useCallback((name) => {
    setAgreements((prevAgreements) => {
      if (name === 'all') {
        const allChecked = !prevAgreements.all;
        return {
          ...prevAgreements,
          all: allChecked,
          service: allChecked,
          privacy: allChecked,
          thirdParty: allChecked,
          age: allChecked,
          collect: allChecked,
          event: allChecked,
        };
      } else {
        return {
          ...prevAgreements,
          [name]: !prevAgreements[name],
        };
      }
    });
  }, []);

  const isNextButtonDisabled = !(
    agreements.service &&
    agreements.privacy &&
    agreements.thirdParty &&
    agreements.age
  );

  const viewAgreements = () => {
    navigate('/agreementtext');
  };

  return (
    <>
      <S.AgreementPageHeader>
        <S.AgreementBackButton onClick={handleGoBack}>
          <BsArrowLeft size={20} />
        </S.AgreementBackButton>
        <S.H2>약관동의</S.H2>
      </S.AgreementPageHeader>

      <S.AgreementContainer>
        <S.H4>
          가입 약관을 읽고
          <br /> 동의해주세요.
        </S.H4>
        <S.P>약관 동의</S.P>
        <CustomCheckBox
          all
          onClick={() => {
            handleAgreementChange('all');
          }}
          defaultChecked={agreements.all}
          category={'all'}
        >
          <S.AgreementTitle>전체 동의</S.AgreementTitle>
        </CustomCheckBox>
        <S.Hr />
        <CustomCheckBox
          onClick={() => handleAgreementChange('service')}
          defaultChecked={agreements.service}
          category={'service'}
        >
          <S.AgreementTitle>
            서비스 이용약관<S.RequiredText>(필수)</S.RequiredText>
          </S.AgreementTitle>
          <IoIosArrowDropright onClick={viewAgreements} />
        </CustomCheckBox>

        <CustomCheckBox
          onClick={() => handleAgreementChange('privacy')}
          defaultChecked={agreements.privacy}
          category={'privacy'}
        >
          <S.AgreementTitle>
            개인정보 수집 및 이용 동의<S.RequiredText>(필수)</S.RequiredText>
          </S.AgreementTitle>
          <IoIosArrowDropright onClick={viewAgreements} />
        </CustomCheckBox>

        <CustomCheckBox
          onClick={() => handleAgreementChange('thirdParty')}
          defaultChecked={agreements.thirdParty}
          category={'thirdParty'}
        >
          <S.AgreementTitle>
            개인정보 제 3자 제공 동의<S.RequiredText>(필수)</S.RequiredText>
          </S.AgreementTitle>
          <IoIosArrowDropright onClick={viewAgreements} />
        </CustomCheckBox>

        <CustomCheckBox
          onClick={() => handleAgreementChange('age')}
          defaultChecked={agreements.age}
          category={'age'}
        >
          <S.AgreementTitle>
            만 14세 이상입니다.<S.RequiredText>(필수)</S.RequiredText>
          </S.AgreementTitle>
          <IoIosArrowDropright onClick={viewAgreements} />
        </CustomCheckBox>
        <S.RequiredTextDiv>
          * 미성년자는 서비스 이용이 불가능합니다
        </S.RequiredTextDiv>
        <CustomCheckBox
          onClick={() => handleAgreementChange('collect')}
          defaultChecked={agreements.collect}
          category={'collect'}
        >
          <S.AgreementTitle>
            개인정보 수집 및 이용 동의
            <S.NonRequiredText>(선택)</S.NonRequiredText>
          </S.AgreementTitle>
          <IoIosArrowDropright onClick={viewAgreements} />
        </CustomCheckBox>
        <CustomCheckBox
          onClick={() => handleAgreementChange('event')}
          defaultChecked={agreements.event}
          category={'event'}
        >
          <S.AgreementTitle>
            이벤트/마케팅 수신 동의<S.NonRequiredText>(선택)</S.NonRequiredText>
          </S.AgreementTitle>
          <IoIosArrowDropright onClick={viewAgreements} />
        </CustomCheckBox>
      </S.AgreementContainer>

      <S.AgreementButtonWrapper>
        <S.AgreementButton
          disabled={isNextButtonDisabled}
          onClick={handleNextButtonClick}
        >
          다음
        </S.AgreementButton>
      </S.AgreementButtonWrapper>
    </>
  );
};

export default AgreementPage;
