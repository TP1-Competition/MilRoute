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
`;

export const Header =styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 5%;
    button{
        background-color: #F9CF00;
        border: none;
        font-weight: 800;
        width: 20%;
        height: 36px;
        border-radius: 15px;
        color: white;
    }
`;

export const BenefitInfo =styled.div`
    display: flex;
    max-width: 100%;
    height: 40%;
    position: relative;
    svg{
        top:50%;
        position: absolute;
        padding: 0 2%;
        &:first-child{
            z-index: 2;
        }
        &:last-child{
            right: -1%;
        }
        @media (max-width: 535px) { 
            top:45%;

        &:last-child{
            right: -2.2%;
        }
  }
    }

`
export const BenefitP=styled.div`
    position: absolute;
    top:10%;
    padding: 2%;
    width: 15%;
    right: 2%;
    text-align: center;
    font-weight: 800;
    color:white;
    @media (max-width: 535px) { 
        font-weight: 700;
    width: 20%;
    top:8%;
    right: 2%;

  }
`;

export const MainImg=styled.div`
    min-width: 100%;
    margin-top:5%;
    background-image: url("./Img/milsale.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
    @media (max-width: 535px) { 
        background-image: url("./Img/mobilemilsale.png");
  }

`;

export const BenefitDiv = styled.div`
        width: 100%;
        height: 100%;
        position: relative;
        p{
        position: absolute;
        &:nth-child(2){//시작일
            top:43.5%;
            font-size: 75%;
            left: 6.6%;
            color:white;
            font-weight: 600;

        }
        &:nth-child(3){//끝나는일
            top:43.5%;
            font-size: 75%;
            left: 35%;
            color:white;
            font-weight: 600;
        }
        &:nth-child(4){//전화번호
            top:79%;
            font-size: 75%;
            left: 78%;
            color:white;
            font-weight: 600;
        }
        &:nth-child(6){//할인설명
            top:52%;
            width: 42%;
            font-size: 65%;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 18%;
            left: 6%;
            color:white;
        }
    }
        h3{
            font-size: 80%;
            position: absolute;
            left:-0.5%;
            top: 12.3%;
            width: 22%;
            display: flex;
            justify-content: right;
        }
        a{
            width: 40%;
            top:75.5%;
            left: 5%;
            height: 11%;
            position: absolute;
        }
        @media (max-width: 535px) { 
            p{
        position: absolute;
        &:nth-child(2){//시작일
            display: none;
        }
        &:nth-child(3){//끝나는일
            display: none;
        }
        &:nth-child(4){//전화번호
            top:77%;
            font-size: 75%;
            left: 73%;
            color:white;
            font-weight: 600;
        }
        &:nth-child(6){//할인설명
            top:48%;
            width: 50%;
            font-size: 70%;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 23%;
            left: 9%;
            color:white;
        }
    }
        h3{
            font-size: 80%;
            position: absolute;
            left:-0.5%;
            top: 14%;
            width: 35%;
            display: flex;
            justify-content: right;
        }
        a{
            width: 40%;
            top:76%;
            left: 13%;
            height: 11%;
            position: absolute;
        }
  }

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
    div{
        max-width: 250px;
        margin-right: 6%;
        border: 2px solid #DADADA;
        border-radius: 16px;
        padding: 2%;
    }

    img{
        max-width: 200px;
        height: 150px;
        border-radius: 15px;
    }

    a{
        text-decoration-line: none;
        color: black;
    }
`

export const H3 = styled.h3`
margin-top: 5%;
`