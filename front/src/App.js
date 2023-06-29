import * as S from './Layout';
import IsRouter from './routes/IsRouter';
import Outlayout from './component/Outlayout/Outlayout';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import React, { createContext, useState } from 'react';

// LoginContext 생성
export const LoginContext = createContext();

function App() {
  // Don't touch
  let vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  // 로그인 여부
  const [isLoginUser, setIsLoginUser] = useState(false);

  // isLoginUser 상태 변경
  const handleLoginState = (type) => {
    setIsLoginUser(type);
  };

  return (
    <LoginContext.Provider value={{ isLoginUser, handleLoginState }}>
      <ThemeProvider theme={theme}>
        <S.AppWrapper>
          <Outlayout />
          <IsRouter />
        </S.AppWrapper>
      </ThemeProvider>
    </LoginContext.Provider>
  );
}

export default App;
