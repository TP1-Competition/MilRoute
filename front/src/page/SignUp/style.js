import styled from 'styled-components';

// 회원가입 페이지
export const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 0.2fr 90%;
  grid-template-areas:
    'header'
    'content';
`;

export const SignUpHeader = styled.div`
  grid-area: header;
  display: flex;

  svg {
    margin-left: 100%;
  }
`;

export const GoBackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const H2 = styled.h2`
  font-weight: bold;
  text-align: center;
  margin-left: 33%;

  @media (max-width: 535px) {
    margin-left: 25%;
  }
`;

export const H4 = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 5%;
`;

// Body

export const Body = styled.div`
  grid-area: content;
  width: 100%;

  height: 100%;
  justify-content: center;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 5%;
  height: 100%;

  display: grid;
  grid-template-rows: 70% 0.2fr;
  grid-template-areas:
    'content2'
    'footer';
`;
export const InputWrapper = styled.div`
  grid-area: content2;
`;

export const SignUpLabel = styled.label`
  font-size: 15px;
`;

export const SignUpInput = styled.input`
  margin-top: 2%;
  padding: 5px;
  border: none;
  margin-bottom: 6%;

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

export const Footer = styled.div`
  grid-area: footer;
  ${({ theme }) => theme.common.flexCenter};
  height: 100%;
`;

export const SignUpSubmitButton = styled.button`
  background-color: ${({ theme }) => theme.palette.mainyellow};
  border: none;
  color: white;
  width: 80%;
  padding: 3%;
  border-radius: 10px;

  font-size: 130%;
  font-weight: 700;
  text-align: center;

  /* margin-bottom: 10%; */
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
