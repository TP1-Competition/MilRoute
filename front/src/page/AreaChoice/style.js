import styled from 'styled-components';

export const Wapper = styled.div`
      display: grid;
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
 border-bottom: 1px solid rgb(235, 235, 235);
 h3{
    width: 50%;
    text-align: right;
 }
 svg{
    padding-left: 36%;
    padding-right: 3%;
 }
`;

export const TabBody=styled.div`
display: flex;
height: 100%;
/* overflow-y: scroll; */
grid-area: content;
`

export const TabDiv = styled.div`
width: calc(100% /3);
`;

export const TabMenu = styled.ul`
color: rgb(21,20,20);
font-weight: bold;
align-items: center;
list-style: none;
overflow-y: scroll;
height: 100%;
cursor: pointer;
margin: 0;
border: 1px solid rgb(235, 235, 235);
background-color: rgb(248, 250, 251);
&::-webkit-scrollbar {
    display: none; 
}
.submenu {
  height: 30px; 
  padding: 7%;
  padding-top: 13%;
  font-size: 15px;
  border-bottom: 1px solid rgb(235, 235, 235);
  margin-left: -40px;
  text-align: center;
  align-items: center;
  &:last-child{
    border-bottom: 0;
   }
}
.focused {
    color: rgb(21,20,20);
  align-items: center;
    background-color: rgb(255,255,255);
}
`;

export const RegionBody = styled.div`
    width: 70%;
    display: grid;
    height: 95%;
    overflow-y: scroll;
  grid-template-columns: repeat(2, 48%);
  font-size: 13px;
  padding: 3%;
  justify-content: space-between;
 &::-webkit-scrollbar {
    display: none; 
 }
`;

export const RegionContain = styled.div`
  width: 210%;
  padding-left: 4%;
`;

export const Region = styled.button`
   border: none;
   border-radius: 20px;
   margin: 2%;
   width: 46%;
   height: 40px;
   text-align: center;

`;

export const SearchDiv=styled.div`
    grid-area: footer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgb(235, 235, 235);
`;

export const SearchBtn = styled.button`
    width: 50%;
    height: 90%;
    margin-top: 4%;
    border-radius: 20px;
    border: none;
    @media (max-width: 535px) { 
      margin-top: 2%;

  }
`;