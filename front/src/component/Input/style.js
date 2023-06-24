import styled from 'styled-components';

export const TagWrapper = styled.div`
  display: flex;

  input[type='checkbox'] {
    appearance: none;
    width: 1.3rem;
    height: 1.3rem;
    border: 1.5px solid gainsboro;
    border-radius: 0.35rem;
  }

  input[type='checkbox']:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #f9cf00;
  }
`;

export const TagLabel = styled.label`
  display: flex;
  align-items: center;
  padding-left: 2%;
  user-select: none;
  font-size: 17px;
  :hover {
    cursor: pointer;
  }
`;
