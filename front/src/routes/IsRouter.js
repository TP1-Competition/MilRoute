import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../page/MainPage/MainPage';
import MyPage from '../page/MyPage/MyPage';
import ManageInfo from '../page/MyPage/ManageInfo';
import SignUp from '../page/SignUp/SignUp';
import CongratsPage from '../page/SignUp/CongratsPage';
import SignIn from '../page/SignIn/SignIn';

const IsRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/manageinfo' element={<ManageInfo />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/congratspage' element={<CongratsPage />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default IsRouter;
