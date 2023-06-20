import styled from 'styled-components';

export const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const H2 = styled.h2`
  font-size: 1rem;
`;

export const MyPageProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const MyPageProfileImage = styled.img`
  width: 30%;
  height: 30%;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #ccc;
`;

export const MyPageNickname = styled.h2`
  font-size: 1.5rem;
  margin-top: 1rem;
`;

export const MyPageButton = styled.button`
  padding: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: 1rem;
  border-bottom: 2px solid #ccc;

  &:hover {
    border-color: #999;
  }
`;
