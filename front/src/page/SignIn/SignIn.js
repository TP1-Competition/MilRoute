import React from 'react';

import SignInForm from './SignInForm';
import * as S from './style';

const SignIn = () => {
  return (
    <S.SignInContainer>
      <S.SignInHeader>
        <S.SignInBackButton>{'<'} Back</S.SignInBackButton>
        <S.H2>로그인</S.H2>
      </S.SignInHeader>

      <S.SignInImageContainer>
        <S.SignInImage src='../Img/hotplace2.jpg'></S.SignInImage>
        <S.SignInDescription>
          군장병들을 위한 최적의 네비, MilRoute
        </S.SignInDescription>
      </S.SignInImageContainer>

      <S.SignInForm>
        <SignInForm />
      </S.SignInForm>

      <S.SignInLinksContainer>
        <S.SignInLinkText to='/signup'>회원가입</S.SignInLinkText>
        <S.SignInLinkText to='/forgot-password'>
          이메일/비밀번호 찾기
        </S.SignInLinkText>
      </S.SignInLinksContainer>
    </S.SignInContainer>
  );
};

export default SignIn;
