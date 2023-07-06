import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import SignInForm from './SignInForm';
import * as S from './style';

const SignIn = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <S.SignInContainer>
      <S.SignInHeader>
        <BsArrowLeft onClick={handleGoBack} />
        <S.H2>로그인</S.H2>
      </S.SignInHeader>

      <S.SignInImageContainer>
        <S.SignInImage src='../Img/Biglogo.png'></S.SignInImage>
        <S.SignInDescription>
          군장병들을 위한 최적의 네비, <span>MilRoute</span>
        </S.SignInDescription>
      </S.SignInImageContainer>

      <S.SignInForm>
        <SignInForm />
      </S.SignInForm>

      <S.SignInLinksContainer>
        <S.SignInLinkText to='/agreementpage'>회원가입</S.SignInLinkText>
        <S.SignInLinkText>이메일/비밀번호 찾기</S.SignInLinkText>
      </S.SignInLinksContainer>
    </S.SignInContainer>
  );
};

export default SignIn;
