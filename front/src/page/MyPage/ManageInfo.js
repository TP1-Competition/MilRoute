import React from 'react';
import * as S from './style';

const Manageinfo = () => {
  // 임시 데이터
  const email = 'example@example.com';
  const isVerified = true;
  const password = '********';

  return (
    <>
      <S.MyPageContainer>
        <S.H2>내 정보 관리</S.H2>
        <S.MyPageProfileContainer>
          <S.MyPageProfileImage src='../../Img/hotplace2.jpg' alt='Profile' />
          <S.MyPageNickname>닉네임</S.MyPageNickname>
        </S.MyPageProfileContainer>

        <S.InfoContainer>
          <S.InfoItem>
            <S.InfoLabel>이메일</S.InfoLabel>
            <S.InfoValue>{email}</S.InfoValue>
          </S.InfoItem>

          <S.InfoItem>
            <S.InfoLabel>본인인증</S.InfoLabel>
            <S.InfoValue>{isVerified ? '인증됨' : '인증되지 않음'}</S.InfoValue>
          </S.InfoItem>

          <S.InfoItem>
            <S.InfoLabel>비밀번호</S.InfoLabel>
            <S.InfoValue>{password}</S.InfoValue>
          </S.InfoItem>
        </S.InfoContainer>
      </S.MyPageContainer>
    </>
  );
};

export default Manageinfo;
