import React, { useReducer, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';
import InputConfirmPassword from './InputConfirmPassword';
import * as S from './style';

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
  isEmailValid: true,
  isPasswordValid: true,
  isConfirmPasswordValid: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'SET_CONFIRM_PASSWORD':
      return { ...state, confirmPassword: action.payload };
    case 'SET_EMAIL_VALID':
      return { ...state, isEmailValid: action.payload };
    case 'SET_PASSWORD_VALID':
      return { ...state, isPasswordValid: action.payload };
    case 'SET_CONFIRM_PASSWORD_VALID':
      return { ...state, isConfirmPasswordValid: action.payload };
    default:
      return state;
  }
};

const SignUp = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleGoBack = useCallback(() => {
    navigate(-1); // 뒤로가기
  }, [navigate]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      // 최종적으로 제출 할 때 유효성 검사
      if (!validateEmail(state.email)) {
        dispatch({ type: 'SET_EMAIL_VALID', payload: false });
        return;
      }
      if (!validatePassword(state.password)) {
        dispatch({ type: 'SET_PASSWORD_VALID', payload: false });
        return;
      }
      if (state.password !== state.confirmPassword) {
        dispatch({ type: 'SET_CONFIRM_PASSWORD_VALID', payload: false });
        return;
      }

      const { email, password } = state;
      const data = { email, password };

      axios
        .post('http://localhost:8080/api/v1/users/register', data, {
          withCredentials: true,
        })
        .then((response) => {
          // 응답 처리 로직 작성
          console.log(response);
          // 회원가입이 성공한 경우 축하 페이지로 이동
          navigate('/congratspage');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [state, navigate]
  );

  const handleEmailChange = useCallback((e) => {
    const email = e.target.value;
    dispatch({ type: 'SET_EMAIL', payload: email });
    const isValid = validateEmail(email);
    dispatch({ type: 'SET_EMAIL_VALID', payload: isValid });
  }, []);

  const handlePasswordChange = useCallback((e) => {
    const password = e.target.value;
    dispatch({ type: 'SET_PASSWORD', payload: password });
    const isValid = validatePassword(password);
    dispatch({ type: 'SET_PASSWORD_VALID', payload: isValid });
  }, []);

  const handleConfirmPasswordChange = useCallback(
    (e) => {
      const confirmPassword = e.target.value;
      dispatch({ type: 'SET_CONFIRM_PASSWORD', payload: confirmPassword });
      const isValid = state.password === confirmPassword;
      dispatch({ type: 'SET_CONFIRM_PASSWORD_VALID', payload: isValid });
    },
    [state.password]
  );

  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return passwordRegex.test(password);
  };

  return (
    <>
      <S.SignUpHeader>
        <S.GoBackButton onClick={handleGoBack}>
          <S.BackArrowIcon>&larr;</S.BackArrowIcon>
        </S.GoBackButton>
        <S.SignUpTitle>회원정보 입력</S.SignUpTitle>
      </S.SignUpHeader>
      <S.SignUpForm onSubmit={handleSubmit}>
        <InputEmail
          email={state.email}
          onChange={handleEmailChange}
          isValid={state.isEmailValid}
        />

        <InputPassword
          password={state.password}
          onChange={handlePasswordChange}
          isValid={state.isPasswordValid}
        />

        <InputConfirmPassword
          confirmPassword={state.confirmPassword}
          onChange={handleConfirmPasswordChange}
          isValid={state.isConfirmPasswordValid}
        />

        <S.SignUpSubmitButton type='submit'>Submit</S.SignUpSubmitButton>
      </S.SignUpForm>
    </>
  );
};

export default SignUp;
