import React from 'react';
import * as S from './style';

const InputConfirmPassword = React.memo(
  ({ confirmPassword, onChange, isValid }) => (
    <>
      <S.SignUpLabel htmlFor='confirmPassword'>비밀번호 확인</S.SignUpLabel>
      <S.SignUpInput
        type='password'
        id='confirmPassword'
        placeholder='비밀번호 확인'
        value={confirmPassword}
        onChange={onChange}
        isvalid={isValid.toString()}
        required
      />
      {!isValid && (
        <S.SignUpValidationError>
          비밀번호가 일치하지 않습니다.
        </S.SignUpValidationError>
      )}
    </>
  )
);

export default InputConfirmPassword;
