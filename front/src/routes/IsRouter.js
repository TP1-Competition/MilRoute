import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../page/MainPage/MainPage';
import MyPage from '../page/MyPage/MyPage';
import ManageInfo from '../page/MyPage/ManageInfo';
import SignUp from '../page/SignUp/SignUp';
import CongratsPage from '../page/SignUp/CongratsPage';
import SignIn from '../page/SignIn/SignIn';
import AreaChoice from '../page/AreaChoice/AreaChoice';
import SelectDesti from '../page/SelectDesti/SelectDesti';
import AgreementPage from '../page/SignUp/Agreement/AgreementPage';
import DeleteAccount from '../page/DeleteAccount/DeleteAccount';
import FooterBar from '../component/FooterBar/FooterBar';
import StartDesti from '../page/StartDesti/StartDesti';
import LastDesti from '../page/LastDesti/LastDesti';
import BookMark from '../page/BookMark/BookMark';
import ShortRoute from '../page/ShortRoute/ShortRoute';
import * as L from '../Layout';

const IsRouter = () => {
  return (
    <Router>
      <L.AppContainer>
        <Routes>
          <Route path='/' element={<MainPage />} exact={true} />
          <Route path='/areachoice' element={<AreaChoice />} />
          <Route path='/mypage' element={<MyPage />} />
          <Route path='/manageinfo' element={<ManageInfo />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/congratspage' element={<CongratsPage />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/selectdesti' element={<SelectDesti />} />
          <Route path='/agreementpage' element={<AgreementPage />} />
          <Route path='/deleteaccount' element={<DeleteAccount />} />
          <Route path='/startdesti' element={<StartDesti />} />
          <Route path='/lastdesti' element={<LastDesti />} />
          <Route path='/bookmark' element={<BookMark />} />
          <Route path='/shortroute' element={<ShortRoute />} />
        </Routes>
      </L.AppContainer>
      <FooterBar />
    </Router>
  );
};

export default IsRouter;
