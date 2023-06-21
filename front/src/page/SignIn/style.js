import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const SignInBackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const SignInHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  margin: 0 auto;
`;

export const SignInImageContainer = styled.div`
  width: 80%;
  height: 200px;
  margin-top: 2rem;
  background-color: #ccc;
  text-align: center;
`;

export const SignInImage = styled.img`
  width: 100%;
  height: 80%;
`;

export const SignInDescription = styled.p`
  margin-bottom: 1rem;
  margin-top: 0.2rem;
`;

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 1rem;
  align-items: center;
`;

export const SignInInput = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 0.5rem;
  margin-bottom: 1rem;
  width: 85%;
`;

export const SignInButton = styled.button`
  padding: 1rem;
  background-color: #ececec;
  border: transparent;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 1rem;
  width: 90%;
`;

export const SignInLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
`;

export const SignInLinkText = styled(Link)`
  margin-bottom: 0.5rem;
  text-decoration: none;
  color: #333;
`;
