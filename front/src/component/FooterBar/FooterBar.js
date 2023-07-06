import * as S from './style';
import * as L from '../../Layout'; //Don't touch
import { AiFillHome, AiFillStar } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { LoginContext } from '../../context/LoginContext';

const FooterBar =()=>{
    const location = window.location.pathname;
    const navigate= useNavigate();
    const numberColor = '#F9CF00';
    
    const { isLoginUser, handleLoginState } = useContext(LoginContext);

    const navigateMyPage = () => {
        navigate('/bookmark');
    //   if (isLoginUser) navigate('/bookmark');
    //   else navigate('/signin');
    };
  

    return(
        <>
        <L.FooterBar>
            <S.divFooter>
                <S.Icons onClick={()=>navigate('/')} style={{ color: location === '/' ? numberColor : '' }}>
                <AiFillHome size={25}/>홈
                </S.Icons>
                <S.Icons onClick={()=>navigate('/areachoice')} style={{ color: location === '/areachoice' ? numberColor : '' }}><FaSearch size={25}/>검색</S.Icons>
                <S.Icons 
                onClick={navigateMyPage} 
                style={{ color: location === '/bookmark' ? numberColor : '' }}><AiFillStar size={25} />즐겨찾기</S.Icons>
            </S.divFooter>
        </L.FooterBar>
        </>
    )
}

export default FooterBar;
