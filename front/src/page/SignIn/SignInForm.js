import { useState } from 'react';
import axios from 'axios';

import * as S from './style';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/v1/auth/users/authenticate', {
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
      console.log(email, password);
    }
  };

  return (
    <>
      <S.SignInInput
        type='email'
        placeholder='이메일'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.SignInInput
        type='password'
        placeholder='비밀번호'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <S.SignInButton onClick={handleLogin}>로그인</S.SignInButton>
    </>
  );
};

export default SignInForm;
