import React, { useReducer } from 'react';
import axios from 'axios';

import * as S from './style';

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'SET_CONFIRM_PASSWORD':
      return { ...state, confirmPassword: action.payload };
    default:
      return state;
  }
};

const SignUp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = () => {
    axios
      .post('/api/v1/users', state)
      .then((response) => {
        // 응답 처리 로직 작성
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEmailChange = (e) => {
    dispatch({ type: 'SET_EMAIL', payload: e.target.value });
  };

  const handlePasswordChange = (e) => {
    dispatch({ type: 'SET_PASSWORD', payload: e.target.value });
  };

  const handleConfirmPasswordChange = (e) => {
    dispatch({ type: 'SET_CONFIRM_PASSWORD', payload: e.target.value });
  };

  return (
    <>
      <S.SignUpTitle>회원정보 입력</S.SignUpTitle>
      <S.SignUpForm>
        <S.SignUpLabel htmlFor='email'>이메일</S.SignUpLabel>
        <S.SignUpInput
          type='email'
          id='email'
          placeholder='hong@gmail.com'
          value={state.email}
          onChange={handleEmailChange}
        />

        <S.SignUpLabel htmlFor='password'>비밀번호</S.SignUpLabel>
        <S.SignUpInput
          type='password'
          id='password'
          placeholder='6자 이상, 숫자와 영문 필수 포함'
          value={state.password}
          onChange={handlePasswordChange}
        />

        <S.SignUpLabel htmlFor='confirmPassword'>비밀번호 확인</S.SignUpLabel>
        <S.SignUpInput
          type='password'
          id='confirmPassword'
          placeholder='비밀번호 확인'
          value={state.confirmPassword}
          onChange={handleConfirmPasswordChange}
        />

        <S.SignUpSubmitButton onClick={handleSubmit}>
          Submit
        </S.SignUpSubmitButton>
      </S.SignUpForm>
    </>
  );
};

export default SignUp;
