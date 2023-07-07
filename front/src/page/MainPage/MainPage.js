import { useEffect,useContext,useState } from 'react';
import * as S from './style';
import {BsFillCaretDownFill} from 'react-icons/bs';
import {AiFillCaretRight,AiFillCaretLeft} from 'react-icons/ai'
import axios from 'axios';
import IuseInterval from '../../hooks/useInterval';
import { useNavigate } from 'react-router-dom';

import { LoginContext } from '../../context/LoginContext';

const MainPage=()=>{
    const navigate= useNavigate();
    const useInterval=IuseInterval();

//군인들 숙박 업소 탭?? 
const [milHome, setMilHome] = useState([])
const [milHomeImg, setMilHomeImg] = useState([])
const [milHomeTitle, setMilHomeTitle] = useState([])
useEffect(()=>{
    axios.get(`http://localhost:5000/milsale3`).then(res=>{
        // dcntenatvnm
        setMilHome(res.data.DATA.filter(el=>el.dcntenatvnm==='연중 객실할인'))
        for(let i = 0; i<6; i++){
            axios.get('http://localhost:5000/searchimg',{
                params:{
                    query: res.data.DATA[i].instltnnm
                }
            }).then(res=>{
                setMilHomeImg((el)=>[...el,res.data.items[0].thumbnail])
                setMilHomeTitle(el=>[...el, res.data.items[0].title])
            })
        }

    }
    )
},[])


  //군인들 숙박 업소 탭?? 
    const hotPlace=()=>{
        return(
            <S.HotPlaceCompo>
            {milHome.map((el,idx)=>{
                return(
                    <div key={idx}>
                    <a href={el.hmpg} target="_blank">

                    <img src={milHomeImg[idx]} alt={milHomeTitle[idx]} />
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
//이거 건들지 말기
useEffect(()=>{
    axios.get(`http://localhost:5000/milsale2`).then(res=>{
        setPlace2(res.data.DATA.filter(el=>el.rgn==='전국'));
    })
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

//이미지 슬라이스 자동으로 넘기기 //이거 될때마다 리렌더링 됨 
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
        window.localStorage.removeItem('userId');
        window.localStorage.removeItem('accessToken');
        handleLoginState(false)
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
                <h3>사람들이 선택한 핫플레이스</h3>
                <p>Diam ut quis ultrices mattis aenean</p>
                {hotPlace()}
                </S.MainWrapper>
            </S.MainPageContainer>
    )
}

export default MainPage;