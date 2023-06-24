import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../page/MainPage/MainPage';
import MyPage from '../page/MyPage/MyPage';
import ManageInfo from '../page/MyPage/ManageInfo';
import SignUp from '../page/SignUp/SignUp';
import CongratsPage from '../page/SignUp/CongratsPage';
import SignIn from '../page/SignIn/SignIn';
import AreaChoice from '../page/AreaChoice/AreaChoice';
import AgreementPage from '../page/SignUp/Agreement/AgreementPage';
import DeleteAccount from '../page/DeleteAccount/DeleteAccount';

const IsRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} exact={true} />
        <Route path='/areachoice' element={<AreaChoice />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/manageinfo' element={<ManageInfo />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/congratspage' element={<CongratsPage />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/agreementpage' element={<AgreementPage />} />
        <Route path='/deleteaccount' element={<DeleteAccount />} />
      </Routes>
    </Router>
  );
};

export default IsRouter;
