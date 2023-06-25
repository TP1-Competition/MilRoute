import { AiFillLeftCircle, AiFillWarning } from 'react-icons/ai';

import CustomCheckBox from '../../component/Input/CheckBox';
import * as S from './style';

const DeleteAccount = () => {
  return (
    <S.Container>
      <S.DeleteAccountHeader>
        <AiFillLeftCircle size={20}></AiFillLeftCircle>
        <S.H2>회원탈퇴</S.H2>
      </S.DeleteAccountHeader>

      <S.Section>
        <S.RedTextWrapper>
          <S.RedText>
            <AiFillWarning /> 회원탈퇴 하기 전에 안내사항을 꼭 확인해주세요
          </S.RedText>
        </S.RedTextWrapper>
        <S.SubTitle>아이디 재사용 및 복구 불가</S.SubTitle>
        <S.SubContent>
          사용하고 계신 아이디로 탈퇴하시면 재사용 및 복구가 불가능합니다.
        </S.SubContent>
        <S.SubTitle>즐겨찾기 복구 불가</S.SubTitle>
        <S.SubContent>
          탈퇴하시면 사용하고 계신 아이디에 등록된 즐겨찾기 정보가 복구
          불가능합니다.
        </S.SubContent>
      </S.Section>

      <S.Section>
        <S.InputWrapper>
          <S.SubTitle>비밀번호 입력</S.SubTitle>
          <S.PasswordInput
            type='password'
            placeholder='현재 비밀번호를 입력해주세요.'
          />
          <S.PasswordInput
            type='password'
            placeholder='현재 비밀번호를 재입력해주세요.'
          />
        </S.InputWrapper>

        <div>
          <S.SubTitle>무엇이 불편하셨나요?</S.SubTitle>
          <S.SelectDissatisfaction name='dissatisfaction' id='dissatisfaction'>
            <option value='default' selected disabled hidden>
              불편하신 점을 선택해주세요
            </option>
            <option value='1'>불</option>
            <option value='2'>편</option>
            <option value='3'>한</option>
          </S.SelectDissatisfaction>
        </div>
      </S.Section>

      <section>
        <CustomCheckBox>개인 정보 수집 동의서 확인</CustomCheckBox>
        <S.TextArea>개인정보 수집 및 동의에 대한 내용 작성</S.TextArea>
      </section>

      <CustomCheckBox>
        위 내용을 모두 확인하였으며, 이에 동의합니다.
      </CustomCheckBox>
      <S.QuitButton>회원 탈퇴하기</S.QuitButton>
    </S.Container>
  );
};

export default DeleteAccount;
