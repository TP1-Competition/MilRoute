import React from 'react';
import * as S from './style';

const InputPassword = React.memo(({ password, onChange, isValid }) => (
  <>
    <S.SignUpLabel htmlFor='password'>비밀번호</S.SignUpLabel>
    <S.SignUpInput
      type='password'
      id='password'
      placeholder='6자 이상, 숫자와 영문 필수 포함'
      value={password}
      onChange={onChange}
      isvalid={isValid.toString()}
      required
    />
    {!isValid && (
      <S.SignUpValidationError>
        비밀번호는 6자 이상이어야 하며, 숫자와 영문을 반드시 포함해야 합니다.
      </S.SignUpValidationError>
    )}
  </>
));

export default InputPassword;
