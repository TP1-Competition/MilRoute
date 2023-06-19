import styled from 'styled-components';
//Don't touch

export const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 535px 1fr;
  height: 100vh;
  grid-template-rows: 50px auto 50px;
  overflow: hidden;
  margin: 0;
  width: 100vw;
  grid-template-areas: 
  "onemain header twomain"
  "onemain side twomain"
  "onemain footer twomain"
  ;
  @media (max-width: 535px) { //760나중에 은지님한테 수정하라고 하기 
    display: grid;
    grid-template-columns: 1fr;
    height: 100vh;
    width: 100vw;
    grid-template-areas: 
    'header'
    "side"
    'footer';
  height: calc(var(--vh, 1vh) * 100);
  }
`;

export const AppContainer = styled.div`
    grid-area: side;
  justify-content: center;
  grid-template-rows: auto 50px;
  background-color: white;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none; 
}
`;

export const FooterBar=styled.div`
  grid-area: footer;
  background-color: red;
`;

export const HeaderBar=styled.div`
  grid-area: header;
  background-color: red;

`

export const Outlayout = styled.div`
grid-area: onemain;    
position: fixed;
  left: calc(50vw - 420px);
  width: 350px;
  height: 500px;
  top: 150px;
  @media (max-width: 900px) {
    display: none;
  }
`;

