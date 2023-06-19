import styled from 'styled-components';

export const MainPageContainer=styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    justify-content: center;
    display: flex;
`;

export const MainWrapper=styled.div`
    width: 90%;
    position: absolute;
    height: 100%;
`

export const MainImg=styled.div`
    width: 100%;
    height: 30%;
    margin-top:5%;
    background-color: gray;
`;

export const H2=styled.h2`
    /* width: 90%; */
`;

export const SearchDiv = styled.div`
 border: 1px solid black;
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 20px;
 p{
    width: 60%;
    text-align: right;
 }
 svg{
    padding-left: 36%;
    padding-right: 3%;
 }
`;