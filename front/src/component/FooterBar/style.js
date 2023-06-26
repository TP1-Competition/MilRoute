import styled from 'styled-components';

export const divFooter=styled.div`
    height: 50px; // don't touch
    border-top:1.5px solid ${({ theme }) => theme.palette.whitegray};
    border-radius: 10px 10px;
    ${({ theme }) => theme.common.flexCenter};
`;

export const Icons = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 1% 2%;
    font-size: 12px;
    svg{
       width: 100%;
    }
`;