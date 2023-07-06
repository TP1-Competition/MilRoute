import styled from 'styled-components';

// 회원가입 페이지
export const SignUpHeader = styled.div`
  display: flex;
  padding: 1rem;
`;

export const GoBackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const H2 = styled.h2`
  font-weight: bold;
  text-align: center;
  margin-left: 32%;
`;

export const H4 = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 3%;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const SignUpLabel = styled.label`
  margin-top: 5%;
  font-size: 15px;
`;

export const SignUpInput = styled.input`
  margin-top: 2%;
  padding: 5px;
  border: none;

  outline: none;
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  border-bottom: 1px solid
    ${({ isvalid }) => (isvalid === 'false' ? 'red' : '#ccc')};
`;

export const SignUpValidationError = styled.p`
  color: red;
  margin-top: 1%;
  font-size: 50%;
`;

export const SignUpSubmitButton = styled.button`
  background-color: ${({ theme }) => theme.palette.mainyellow};
  border: none;
  color: white;
  width: 100%;
  padding: 3%;
  border-radius: 10px;
  margin-top: 70%;

  font-size: 130%;
  font-weight: 700;
  text-align: center;
`;

/* 회원가입 축하 페이지 */

export const CongratsHeader = styled.div`
  margin-top: 1%;

  h2 {
    width: 100%;
    text-align: center;
    font-weight: 400;
    line-height: normal;
    font-size: 1.3rem;
  }
  svg {
    position: fixed;
    margin-left: 2%;
  }
`;

export const CongratsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100dvh;
`;

export const CongratsCheckIcon = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  margin-top: 6rem;
`;

export const CongratsMessage = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 700;
`;

export const CongratsButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.palette.mainyellow};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  width: 80%;
  margin-top: 8rem;
`;
