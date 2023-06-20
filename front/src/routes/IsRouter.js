import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../page/MainPage/MainPage';
import MyPage from '../page/MyPage/MyPage';
import SignUp from '../page/SignUp/SignUp';

const IsRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default IsRouter;
