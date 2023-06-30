import styled from 'styled-components';

// 회원가입 페이지

export const SignUpContainer = styled.div`
  padding: 20px;
`;
export const BackArrowIcon = styled.span`
  font-size: 1.5rem;
`;

export const GoBackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const SignUpHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const SignUpTitle = styled.h2`
  font-size: 1.5rem;
  margin-left: 1rem;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const SignUpLabel = styled.label`
  margin-bottom: 5px;
  font-size: 15px;
`;

export const SignUpInput = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  border: 1px solid ${({ isvalid }) => (isvalid === 'false' ? 'red' : '#ccc')};
`;

export const SignUpValidationError = styled.p`
  color: red;
  margin-top: 5px;
`;

export const SignUpSubmitButton = styled.button`
  padding: 0;
  margin: 10px 20px 10px 0;
  font-weight: 600;
  text-align: center;
  line-height: 50px;
  border-radius: 5px;

  &:hover {
    background: #ff8e00;
  }
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
