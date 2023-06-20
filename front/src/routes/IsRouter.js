import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../page/MainPage/MainPage';
import MyPage from '../page/MyPage/MyPage';
import SignUp from '../page/SignUp/SignUp';
import CongratsPage from '../page/SignUp/CongratsPage';

const IsRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/congratspage' element={<CongratsPage />} />
      </Routes>
    </Router>
  );
};

export default IsRouter;
