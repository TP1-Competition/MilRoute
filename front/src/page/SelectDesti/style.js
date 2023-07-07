import styled from 'styled-components';

export const Wapper = styled.div`
    display: grid;
    height: 100%;
    grid-template-rows: 1fr 92%;
    grid-template-areas: 'header' 'content';
    position: relative;
`;

export const SearchHeader= styled.div`
    border-bottom: 1px solid  ${({ theme }) => theme.palette.whitegray};
    grid-area:header;
    width: 100%;
    ${({ theme }) => theme.common.flexCenter};
`;

export const SearchDiv = styled.div`
    width: 96%;
`;

export const MapContent = styled.div`
    position: relative;
    grid-area:content;
    width: 96%;
    margin:2%;
    height:85%;
`;

export const HeaderFirst = styled.div`
    ${({ theme }) => theme.common.flexCenter};
    margin-bottom: 1%;
    margin-top:2%;
    width: 100%;
    svg{
        margin-right: 2%;
    }
`;

export const SearchBar = styled.div`
${({ theme }) => theme.common.flexCenter};
    z-index: 1;
    border:1px solid black;
    width: 100%;
    height: 1.7rem;
    border-radius: 20px;
    border: 1.5px solid ${({ theme }) => theme.palette.whitegray};
`;

export const SearchInput = styled.input`
    border:none;
    overflow: auto;
    width: 85%;
    height: 85%;
    font-size: 12px;
    &:focus 
    {
        outline:none;
    }
    &:placeholder{
        color:${({ theme }) => theme.palette.txtgray};
    }
`;

export const MapTag = styled.button`
    width: 100%;
    height: 1.7rem;
    margin: 0 1% 1% 1%;
    border-radius: 20px;
    /* background-color: white; */
    /* color:${({ theme }) => theme.palette.brightgray}; *///'#A49E9E'
    border: 1.5px solid ${({ theme }) => theme.palette.whitegray};//'1.5px solid #DADADA'

    &:first-child{
        margin-left:0;
    }
    &:last-child{
        margin-right:0;
    }
`;

//최적경로 버튼
export const ShortRoute= styled.div`
    position: absolute;
    bottom: 0;
    cursor: pointer;
    ${({ theme }) => theme.common.flexCenter};
    width: 80%;
    background-color: ${({ theme }) => theme.palette.mainyellow};
    left: 10%;
    z-index: 2;
    color: white;
    border-radius: 30px;
    height: 7%;
    h3{
    width: 65%;
    display: flex;
    justify-content: right;
    align-items: center;
    svg{
        padding-right: 2%;
    }
 }
`;

export const Svg = styled.div`
        padding-left: 20%;
    padding-right: 3%;
    display: flex;
    align-items: center;
`;

//내가 선택한 여행지
export const SelectPlace= styled.div`
    top:1%;
    cursor: pointer;
    font-weight: 600;
    width: 53%;
    ${({ theme }) => theme.common.flexCenter};
    position: absolute;
    border:2px solid ${({ theme }) => theme.palette.green};
    background-color: white;
    z-index: 2;
    height: 6%;
    border-radius: 30px;
    left: 28%;
    color:${({ theme }) => theme.palette.green};
    p{
        color:${({ theme }) => theme.palette.whitegray} 
    }
    svg{
        padding-left: 4%;
    }
    @media (max-width: 535px) { 
        font-size: 12px;

  }
`;

//군할인
export const MilSale = styled.div`
    width: 21%;
    ${({ theme }) => theme.common.flexCenter};
    position: absolute;
    z-index: 2;
    top:1.5%;
    left: 3%;
    color:white;
    background-color: ${({ theme }) => theme.palette.mainyellow}; 
    font-weight: 700;
    border-radius: 20px;
    height: 5.5%;
    font-size: 13px;

    div{
        background-color: white;
        color:black;
        height: 70%;
        width: 36%;
        text-align: center;
        border-radius: 20px;
        margin-left: 3%;
        ${({ theme }) => theme.common.flexCenter};;
    }
`;

//지역 모달창 
export const MapModal = styled.div`
    position: absolute;
    z-index: 2;
    bottom: 8%;
    left: 10%;
    background-color: white;
    width: 72%;
    height: 30%;
    border-radius: 20px;
    padding: 4%;
    button{
        display: flex;
        justify-content: right;
    }
`;

export const ModalWapper = styled.div`
    display: flex;
    width: 100%;
    height: 85%;
    img{
        width: 40%;
        margin-bottom: 5%;
        border-radius: 10px;
        height: 8rem;
        margin-top: 5%;
    }
`;

export const ModalContain =styled.div`
    width: 100%;
    padding-left: 3%;
    position: relative;
`;

export const ModalCotainFirst = styled.div`
${({ theme }) => theme.common.flexSpaceBetWeen};
    width: 100%;
    div{
        background-color: #8CFCA9;
        width: 35%;
        ${({ theme }) => theme.common.flexCenter};
        padding: 2%;
        color:${({ theme }) => theme.palette.green}; 
        border:1.5px solid ${({ theme }) => theme.palette.green}; 
        border-radius: 8px;
        font-size: 13px;
        svg{
            padding-right: 3%;
        }
    }
`;

export const ModalCotainSecond = styled.div`
    display: flex;
    align-items: self-end;
    width: 100%;
    h3{
        font-size: 100%;
        width: 80%;
    }
    p{
      margin-left: 5%;
    font-size: 95%;
    width: 50%;
    }
`;

export const ModalCotainThird=styled.p`
width:100%;
font-size: 80%;
margin-top:0;
`;

export const ModalButton = styled.div`
    width: 100%;
    ${({ theme }) => theme.common.flexEnd};
    button{
        padding: 2% 10%;
        background-color: white;
        border: 1.5px solid ${({ theme }) => theme.palette.green}; 
        border-radius: 20px;
        color:${({ theme }) => theme.palette.green}; 
        font-weight: 500;
}
`;



//내가 선택한 여행지 팝업창
export const ModalBackdrop = styled.div`
  z-index: 3; //위치지정 요소
  position: absolute;
  display : flex;
  justify-content : center;
  align-items : center;
  background-color: rgba(0,0,0,0.15);
  top : 0;
  left : 0;
  right : 0;
  bottom : 0;
`;

export const ModalView = styled.div`
position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    width: 20rem;
    height: 58%;
    background-color: #ffffff;
    top:8%;
    border:2px solid ${({ theme }) => theme.palette.brightgray};


  `;

export const ExitBtn = styled.div`
border-bottom: 1px solid ${({ theme }) => theme.palette.brightgray};
width: 100%;
height: 15%;
${({ theme }) => theme.common.flexCenter};
h3{
    width: 70%;
    text-align: right;
 }
 svg{
    padding-left: 15%;
    padding-right: 3%;
 }
`;

export const Place=styled.div`
background-color: ${({ theme }) => theme.palette.assiyellow};
width: 86%;
padding:1% 3%;
height: 7%;
margin-top: 2%;
border-radius: 10px;
${({ theme }) => theme.common.flexSpaceBetWeen};
`;

export const Reset = styled.div`
    bottom: 2%;
    width: 93%;
    height: 7%;
    position: absolute;
    cursor: pointer;
    margin-top: 3%;
    border-radius: 10px;
    ${({ theme }) => theme.common.flexCenter};
    color:${({ theme }) => theme.palette.brightgray};
    border: 1px solid  ${({ theme }) => theme.palette.whitegray};
    svg{
        color:${({ theme }) => theme.palette.brightgray};
        margin-right: 2%;
    }
`;

