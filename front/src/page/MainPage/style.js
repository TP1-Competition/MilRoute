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

export const BenefitInfo =styled.div`
    display: flex;
    max-width: 100%;
    height: 30%;
    position: relative;
    svg{
        top:50%;
        position: absolute;
        padding: 0 2%;
        &:first-child{

        }
        &:last-child{
            right: 0;
        }
    }
    p{
        position: absolute;
        padding: 2%;
        width: 96%;
        text-align: center;
    }
`

export const MainImg=styled.div`
    min-width: 100%;
    margin-top:5%;
    border-radius: 20px;
    background-color: gray;
    transition: left 0.5s ease-out; 
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
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

export const HotPlaceCompo = styled.div`
    display: flex;
    max-width: 100%;
    white-space:nowrap; //공백, 줄바꿈을 하지 않음
	overflow-x:scroll; 
    img{
        width: 60vw;
    }
`