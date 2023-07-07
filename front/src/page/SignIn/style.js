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
  margin-top: 2rem;

  text-align: center;

  img {
    width: 60%;
    height: 60%;
  }
`;

export const SignInImage = styled.img`
  width: 100%;
  height: 80%;
`;

export const SignInDescription = styled.p`
  margin-bottom: 10%;
  margin-top: 10%;

  font-size: 110%;

  span {
    font-size: 120%;
    font-weight: 700;
    color: ${({ theme }) => theme.palette.mainyellow};
  }
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
  background-color: ${({ theme }) => theme.palette.mainyellow};
  color: white;
  font-size: 110%;
  border: transparent;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 1rem;
  width: 90%;
`;

export const SignInLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
`;

export const SignInLinkText = styled(Link)`
  margin-bottom: 0.5rem;
  text-decoration: none;
  color: #333;
`;

export const SignInErrorText = styled.p`
  font-size: 0.8rem;
  color: red;
  margin-top: 0.5rem;
`;
