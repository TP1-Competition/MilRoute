import * as S from './Layout';
import FooterBar from './component/FooterBar/FooterBar';
// import './App.css';
import IsRouter from './routes/IsRouter';
import Outlayout from './component/Outlayout/Outlayout';
import Header from './component/Header/Header';

function App() {
  // Don't touch
let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  console.log("resize");
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});


  return (
    <S.AppWrapper>
      <Outlayout/>
      <Header/>
      <S.AppContainer>
      <IsRouter/>
      </S.AppContainer>
      <FooterBar/>
    </S.AppWrapper>
  );
}

export default App;
