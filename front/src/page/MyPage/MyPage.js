import { useNavigate } from 'react-router-dom';
import * as S from './style';

const MyPage = () => {
  const navigate = useNavigate();

  const handleManageInfo = () => {
    navigate('/manageinfo');
  };

  const handleSavedRoutes = () => {
    navigate('/savedroutes');
  };

  const handleDeleteAccount = () => {
    navigate('/deleteaccount');
  };

  const handleLogout = () => {
    navigate('/logout');
  };

  return (
    <>
      <S.MyPageContainer>
        <S.H2>마이 페이지</S.H2>
        <S.MyPageProfileContainer>
          <S.MyPageProfileImage src='../../Img/hotplace2.jpg' alt='Profile' />
          <S.MyPageNickname>닉네임</S.MyPageNickname>
        </S.MyPageProfileContainer>
        <S.MyPageButton onClick={handleManageInfo}>내 정보 관리</S.MyPageButton>
        <S.MyPageButton onClick={handleSavedRoutes}>저장된 경로</S.MyPageButton>
        <S.MyPageButton onClick={handleDeleteAccount}>회원 탈퇴</S.MyPageButton>
        <S.MyPageButton onClick={handleLogout}>로그아웃</S.MyPageButton>
      </S.MyPageContainer>
    </>
  );
};

export default MyPage;
