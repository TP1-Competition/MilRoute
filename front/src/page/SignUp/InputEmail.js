import React from 'react';
import * as S from './style';

const InputEmail = React.memo(({ email, onChange, isValid }) => (
  <>
    <S.SignUpLabel htmlFor='email'>이메일</S.SignUpLabel>
    <S.SignUpInput
      type='email'
      id='email'
      placeholder='hong@gmail.com'
      value={email}
      onChange={onChange}
      isvalid={isValid.toString()}
      required
    />
    {!isValid && (
      <S.SignUpValidationError>
        올바른 이메일 주소를 입력해주세요.
      </S.SignUpValidationError>
    )}
  </>
));

export default InputEmail;
