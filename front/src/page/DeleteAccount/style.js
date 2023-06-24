import styled from 'styled-components';

//DeleteAccount

export const Container = styled.div`
  padding: 5%;
`;

export const DeleteAccountHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const H2 = styled.h2`
  text-align: center;
  font-size: 20px;
  margin-left: 36%;
`;

export const RedTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 20px;
  border-radius: 5px;
  background: #d9d9d9;

  padding: 1%;
`;

export const RedText = styled.div`
  color: red;
  font-size: 15px;
  font-weight: 600;

  svg {
    margin-top: 0.5%;
  }
`;

export const SubTitle = styled.div`
  font-size: 17px;
  font-weight: 700;
  margin-top: 5%;
`;

export const SubContent = styled.div`
  font-size: 15px;
  margin-top: 2%;
  margin-bottom: 8%;
`;

export const Section = styled.div`
  border-bottom: 1px solid #dadada;
  margin-bottom: 3%;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PasswordInput = styled.input`
  margin-top: 3%;
  height: 21px;

  border-radius: 5px;
  border: 1px solid #c4c4c4;

  padding: 2%;
`;

export const SelectDissatisfaction = styled.select`
  margin-top: 3%;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  width: 100%;
  background-color: white;
  color: black;
  margin-bottom: 6%;
  font-size: small;
`;

// 개인 정보 수집 동의서 확인 부터
export const TextArea = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: solid 2px #e2e2e2;
  border-radius: 5px;
  font-size: 16px;
  resize: vertical;

  margin-top: 4%;
  margin-bottom: 4%;
`;

// 탈퇴 버튼
export const QuitButton = styled.button`
  border-radius: 10px;
  background: #404040;
  width: 100%;
  height: 50px;
  color: white;
  font-weight: 700;
  margin-top: 5%;
  font-size: 20px;
  border: none;
  outline: none;
`;
