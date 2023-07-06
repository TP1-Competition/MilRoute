import styled, { css } from 'styled-components';

export const AgreementPageHeader = styled.div`
  padding: 1rem;
  margin-top: 3%;
`;

export const AgreementBackButton = styled.button`
  position: fixed;
  left: 10;

  background: none;
  border: none;
  cursor: pointer;
`;

export const H2 = styled.h2`
  font-weight: bold;
  margin: 0 auto;
  text-align: center;
`;

export const H4 = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 3%;
`;

export const Hr = styled.hr`
  margin-top: 5%;
  padding: 0;
  border: none;
  border-top: 1.3px solid ${({ theme }) => theme.palette.whitegray};
  width: 100%;
  height: 1px;
`;

export const P = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
`;

export const AgreementContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 3rem;
  padding: 5%;
`;

export const AgreementCheckboxLabel = styled.label`
  margin-bottom: 10%;

  ${(props) =>
    props.all &&
    css`
      padding-bottom: 5%;
      border-bottom: 1px solid ${({ theme }) => theme.palette.whitegray};
    `}
`;

export const AgreementCheckbox = styled.input`
  margin-right: 0.5rem;
`;

export const RequiredText = styled.span`
  color: red;
  margin-left: 1%;
`;

export const RequiredTextDiv = styled.div`
  color: red;
  margin-left: 20px;
  font-size: 75%;
`;

export const NonRequiredText = styled.span`
  margin-left: 1%;

  color: ${({ theme }) => theme.palette.brightgray};
`;

export const AgreementTitle = styled.div`
  width: 100%;

  font-size: 80%;
  color: ${({ theme }) => theme.palette.black};

  ${(props) =>
    props.all &&
    css`
      font-size: large;
      font-weight: 600;
    `}
`;

export const Bold = styled.span`
  font-weight: bold;
`;

export const AgreementButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const AgreementButton = styled.button`
  margin-top: 10%;
  width: 90%;
  padding: 2%;
  border: none;
  outline: none;
  border-radius: 10px;

  font-size: 120%;
  font-weight: 700;

  background-color: ${({ theme }) => theme.palette.mainyellow};
  color: white;

  ${(props) =>
    props.disabled &&
    css`
      background-color: ${({ theme }) => theme.palette.whitegray};
    `}
`;

/* 이용약관 */
export const AgreementTextContainer = styled.div`
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AgreementText = styled.div`
  border: 2px solid black;
  padding: 2%;
  border-radius: 10px;

  max-height: 600px;
  overflow-y: auto;

  div {
    text-align: center;
  }

  h4 {
    display: inline-block;
    font-size: 130%;
  }

  span {
    margin-left: 1%;
    color: red;
  }
`;

export const AgreementTextContent = styled.pre`
  white-space: pre-wrap;
`;

export const Button = styled.pre`
  background-color: ${({ theme }) => theme.palette.mainyellow};
  color: white;
  width: 85%;
  padding: 4%;
  border-radius: 10px;
  margin-top: 10%;

  font-size: 130%;
  font-weight: 700;
  text-align: center;
`;
