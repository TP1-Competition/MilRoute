import * as S from './Layout';
import IsRouter from './routes/IsRouter';
import Outlayout from './component/Outlayout/Outlayout';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import LoginProvider from './context/LoginContext';

function App() {
  // Don't touch
  let vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  return (
    <LoginProvider>
      <ThemeProvider theme={theme}>
        <S.AppWrapper>
          <Outlayout />
          <IsRouter />
        </S.AppWrapper>
      </ThemeProvider>
    </LoginProvider>
  );
}

export default App;
