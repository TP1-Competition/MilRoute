import React, { createContext, useState, useEffect } from 'react';

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [isLoginUser, setIsLoginUser] = useState(false);

  useEffect(() => {
    // 로컬 스토리지에서 액세스 토큰 유무를 확인하고 로그인 상태를 설정
    const accessToken = localStorage.getItem('Access-Token');
    if (accessToken) {
      setIsLoginUser(true);
    }
  }, []);

  const handleLoginState = (loggedIn) => {
    setIsLoginUser(loggedIn);
  };

  return (
    <LoginContext.Provider value={{ isLoginUser, handleLoginState }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
