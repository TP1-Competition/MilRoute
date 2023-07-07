import styled from 'styled-components';

export const Wapper = styled.div`
      display: grid;
      width: 100%;
      height: 100%;
        grid-template-rows: 0.2fr 82% 0.2fr;
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
`;

export const Body =styled.div`
grid-area: content;
width: 100%;
display: flex;
justify-content: center;
`;

export const Content = styled.div`
width: 80%;
`;

export const InContent=styled.div`
 width: 100%;
 /* ${({ theme }) => theme.common.flexCenter}; */
`;

export const Data=styled.div`
${({ theme }) => theme.common.flexSpaceBetWeen};
padding: 0 2% 0 5%;
 margin: 3% 0 0 0;
 width: 93%;
 border-radius: 15px;
 cursor: pointer;
 font-weight: 600;
font-size: 10px;
p{
    width: 85%;
}
`;

export const Route = styled.div`
width: 100%;
${({ theme }) => theme.common.flexCenter};
border: 2px solid ${({ theme }) => theme.palette.mainyellow};
padding: 3% 0;
border-radius: 15px;
background-color: ${({ theme }) => theme.palette.brightyellow};
`;

export const Route2 = styled.div`
width: 80%;
p{
    width: 100%;
text-align: center;
font-size: 10px;
}
div{
    width: 100%;
    ${({ theme }) => theme.common.flexSpaceBetWeen};
    button{
        padding: 3% 0;
        border:0;
        width:30%;
        height:30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
        background-color: ${({ theme }) => theme.palette.mainyellow};
        color: white;
        font-weight: 600;
        font-size: 12px;
        &:last-child{
            background-color: ${({ theme }) => theme.palette.whitegray};
        }
        @media (max-width: 535px) { 
            &:first-child{
                font-size:11px;
                width:35%;
            }
        }
    }
}
`;