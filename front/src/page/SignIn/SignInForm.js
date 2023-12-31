import { useReducer, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../context/LoginContext';

import * as S from './style';

const initialState = {
  email: '',
  password: '',
  error: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const SignInForm = () => {
  const navigate = useNavigate();

  const { handleLoginState } = useContext(LoginContext);

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = state;

    try {
      const response = await axios.post(
        'http://3.131.9.79:8080/api/v1/auth/authenticate',
        {
          email,
          password,
        }
      );

      const { data } = response;

      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('userId', data.id);
      handleLoginState(true);

      navigate('/');
    } catch (error) {
      if (error.response && error.response.status === 403) {
        dispatch({
          type: 'SET_ERROR',
          payload: '이메일 또는 비밀번호가 잘못되었습니다.',
        });
      } else {
        navigate('/errorpage');
      }
    }
  };

  return (
    <>
      <S.SignInInput
        type='email'
        placeholder='이메일'
        value={state.email}
        onChange={(e) =>
          dispatch({ type: 'SET_EMAIL', payload: e.target.value })
        }
      />
      <S.SignInInput
        type='password'
        placeholder='비밀번호'
        value={state.password}
        onChange={(e) =>
          dispatch({ type: 'SET_PASSWORD', payload: e.target.value })
        }
      />
      {state.error && <S.SignInErrorText>{state.error}</S.SignInErrorText>}
      <S.SignInButton onClick={handleLogin}>로그인</S.SignInButton>
    </>
  );
};

export default SignInForm;
