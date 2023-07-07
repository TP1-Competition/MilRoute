import { useReducer, useCallback, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';
import InputConfirmPassword from './InputConfirmPassword';
import { BsArrowLeft } from 'react-icons/bs';
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
  const [sameContent, setSameContent] = useState(false);

  const handleGoBack = useCallback(() => {
    navigate(-1);
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
          // 회원가입이 성공한 경우 축하 페이지로 이동
          navigate('/congratspage');
        })
        .catch((error) => {
          if (error.response.status === 403 || error.response.status === 400)
            setSameContent(true);
        });
    },

    // eslint-disable-next-line
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
    <S.Wrapper>
      <S.SignUpHeader>
        <S.GoBackButton onClick={handleGoBack}>
          <BsArrowLeft size={20} />
        </S.GoBackButton>
        <S.H2>회원정보 입력</S.H2>
      </S.SignUpHeader>

      <S.Body>
        <S.H4>회원정보를 입력해주세요.</S.H4>

        <S.SignUpForm onSubmit={handleSubmit}>
          <S.InputWrapper>
            <InputEmail
              email={state.email}
              onChange={handleEmailChange}
              isValid={state.isEmailValid}
            />
            {sameContent && (
              <S.SignUpSameEmailError>
                이미 가입한 이메일이 있습니다.
              </S.SignUpSameEmailError>
            )}

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
          </S.InputWrapper>
          <S.Footer>
            <S.SignUpSubmitButton type='submit'>다음</S.SignUpSubmitButton>
          </S.Footer>
        </S.SignUpForm>
      </S.Body>
    </S.Wrapper>
  );
};

export default SignUp;
