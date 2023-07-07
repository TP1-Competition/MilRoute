import styled from 'styled-components';

export const Wapper = styled.div`
      display: grid;
      width: 100%;
      height: 100%;
        grid-template-rows: 0.2fr 80% 0.2fr;
        @media (max-width: 535px) { 
         grid-template-rows: 0.2fr 77% 0.2fr;
  }
        grid-template-areas: 
        'header'
        'content'
        'footer'
`;

export const Header=styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 grid-area: header;
 width: 100%;
 border-bottom: 1px solid rgb(235, 235, 235);
 h3{
    width: 50%;
    text-align: left;
 }
 svg{
    padding-right: 28%;
 }
 @media (max-width: 535px) {
    h3{
    width: 60%;
    text-align: left;
 }
  }
`;

export const Body =styled.div`
grid-area: content;
width: 100%;
display: flex;
height: 80%;
justify-content: center;
`;

export const Content = styled.div`
width: 80%;
`;

export const Data=styled.div`
${({ theme }) => theme.common.flexCenter};
 margin: 3%;
 width: 100%;
 border-radius: 15px;
 cursor: pointer;
 font-weight: 600;
 height: 10%;
`;

export const BtnFooter = styled.div`
grid-area: footer;
${({ theme }) => theme.common.flexCenter};
height: 100%;
`;

export const ShortRoute= styled.div`
${({ theme }) => theme.common.flexCenter};
cursor: pointer;
    width: 80%;
    background-color: ${({ theme }) => theme.palette.mainyellow};
    color: white;
    border-radius: 30px;
    height: 70%;
    h3{
      font-size: 17px;
    width: 59%;
    display: flex;
    justify-content: right;
    align-items: center;
    svg{
        padding-right: 2%;
    }
    @media (max-width: 535px) { 
      width: 80%;
  }
 }
`;

export const Svg = styled.div`
        padding-left: 20%;
    padding-right: 3%;
    display: flex;
    align-items: center;
`;