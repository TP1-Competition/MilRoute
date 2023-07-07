import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const accessToken = localStorage.getItem('accessToken');
  const state = accessToken ? true : false;
  const [isLoginUser, setIsLoginUser] = useState(state);

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
