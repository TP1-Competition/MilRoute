import styled, { css } from 'styled-components';

export const AgreementPageHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: center;
`;

export const AgreementBackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
`;

export const H2 = styled.h2`
  font-weight: bold;
  margin: 0 auto;
`;

export const H4 = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const P = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
`;

export const AgreementContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  padding: 20px;
`;

export const AgreementCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
`;

export const AgreementCheckbox = styled.input`
  margin-right: 0.5rem;
`;

export const RequiredText = styled.span`
  color: red;
`;

export const RequiredTextDiv = styled.div`
  color: red;
  margin-top: -1rem;
  margin-left: 20px;
  margin-bottom: 3rem;
`;

export const NonRequiredText = styled.span`
  color: gray;
`;

export const AgreementTitle = styled.div`
  color: black;

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

export const Hr = styled.hr`
  width: 100%;
  margin-top: -1rem;
  margin-bottom: 2rem;
`;

export const AgreementButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const AgreementButton = styled.button`
  width: 80%;
  padding: 1rem;
`;
