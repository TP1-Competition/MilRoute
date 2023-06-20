import styled from 'styled-components';

export const SignUpContainer = styled.div`
  padding: 20px;
`;

export const SignUpTitle = styled.h2`
  margin-bottom: 20px;
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
`;

export const SignUpErrorMessage = styled.p`
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
