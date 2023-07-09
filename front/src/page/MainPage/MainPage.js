import { useEffect,useContext,useState } from 'react';
import * as S from './style';
import {BsFillCaretDownFill} from 'react-icons/bs';
import {AiFillCaretRight,AiFillCaretLeft} from 'react-icons/ai'
import IuseInterval from '../../hooks/useInterval';
import { useNavigate } from 'react-router-dom';
import db from '../../db.json';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../css/alert.css'

import { LoginContext } from '../../context/LoginContext';
import axios from 'axios';

const swal = withReactContent(Swal);

const MainPage=()=>{
    const milsale =db.Milsale3;
    const Milsale2 =db.Milsale2;

    const navigate= useNavigate();
    const useInterval=IuseInterval();


//군인들 숙박 업소 탭?? 
const [milHome, setMilHome] = useState([])

useEffect(()=>{
        setMilHome(milsale.filter(el=>el.dcntenatvnm==='연중 객실할인'))
// eslint-disable-next-line
},[])



  //군인들 숙박 업소 탭?? 
    const hotPlace=()=>{
        return(
            <S.HotPlaceCompo>
            {milHome.map((el,idx)=>{
                return(
                    <div key={idx}>
                    <a href={el.hmpg} target="_blank">
                    <img src={el.Imgurl} alt={el.Imgurl} />
                    <h4>{el.instltnnm}</h4>
                    <p>{el.rgn}</p>
                    </a>

                    </div>
                )
            })}
            </S.HotPlaceCompo>
        )
    }

// 할인혜택
    const [place2,setPlace2] = useState([]);
useEffect(()=>{
        setPlace2(Milsale2.filter(el=>el.rgn==='전국'));
        // eslint-disable-next-line
},[])




  //이미지 슬라이스
const [imgCount,setImgCount] = useState(0);
const [custominterval] = useState(50000);

const preButton=()=>{
    if(imgCount!==0) setImgCount(imgCount-1);
};
const nextButton=()=>{
    if(imgCount!==place2.map(el=>el).length-1) setImgCount(imgCount+1);
    else setImgCount(0)
};

//이미지 슬라이스 자동으로 넘기기 
useInterval(
    () => setImgCount((imgCount) =>{
        if(imgCount+1===place2.map(el=>el).length){
            return 0;
        }else return imgCount + 1;
    }
  ),
    custominterval
  );


    const BenefitInfo=()=>{
        return(
            <S.BenefitInfo>
                <AiFillCaretLeft size={25} onClick={()=>preButton()}/>
                    <S.MainImg>
                        <S.BenefitDiv>
                        <h3>{place2.map(el=>el.instltnnm)[imgCount]}</h3>
                        <p>{place2.map(el=>el.startday)[imgCount]}</p> 
                        <p> {place2.map(el=>el.fnshday)[imgCount]}</p>
                        <p>{place2.map(el=>el.cntadr)[imgCount]}</p>
                        <a href={place2.map(el=>el.hmpg)[imgCount]}>.</a>
                        <p>{place2.map(el=>el.dtlexpln)[imgCount]}</p>
                        </S.BenefitDiv>
                        </S.MainImg>
                    <S.BenefitP>{imgCount+1} / {place2.map(el=>el).length}</S.BenefitP>
                <AiFillCaretRight size={25}  onClick={()=>nextButton()}/>
            </S.BenefitInfo>
        )

    }

    const { isLoginUser, handleLoginState } = useContext(LoginContext);

    const logOut=()=>{
        swal.fire({  
            heightAuto: false,
            icon: 'question',
            text: `로그아웃하실건가요?`,
            confirmButtonText: '확인',
            confirmButtonColor: '#289951',
            showCancelButton: true,
            cancelButtonText: '취소',
            width: 400,})
            .then((result)=>{
              if(result.isConfirmed){
                window.localStorage.removeItem('userId');
                window.localStorage.removeItem('accessToken');
                handleLoginState(false)
            }
          })
    }




    return(
            <S.MainPageContainer>
                <S.MainWrapper>
                <S.Header>
                        <img src={'../Img/mainlogo.png'} alt='mainlogo' style={{width:'30%'}} />
                        {!isLoginUser? (<button onClick={()=>navigate('/signin')}>로그인</button>):(<button onClick={logOut}>로그아웃</button>)}
                </S.Header>
                {BenefitInfo()}
                <S.H2>지역을 선택해주세요</S.H2>
                <S.SearchDiv onClick={()=>navigate('/areachoice')}><p>지역선택</p><BsFillCaretDownFill/></S.SearchDiv>
                <S.H3>군인 복지 숙박업소</S.H3>
                {hotPlace()}
                </S.MainWrapper>
            </S.MainPageContainer>
    )
}

export default MainPage;