// import { useEffect } from 'react';
import { useState } from 'react';
import * as S from './style';
import {BsFillCaretDownFill} from 'react-icons/bs';
import {AiFillCaretRight,AiFillCaretLeft} from 'react-icons/ai'
// import axios from 'axios';
import IuseInterval from '../../hooks/useInterval';
import { useNavigate } from 'react-router-dom';

const MainPage=()=>{
    const navigate= useNavigate();
    const useInterval=IuseInterval();
    //나중에 핫플레이스 데이터 들어갈곳
    const place=[
            {
                img:'../Img/hotplace2.jpg',
                title:'lamon', 
            },
            {
                img:'../Img/hotplace2.jpg',
                title:'lamon2', 
            },
            {
                img:'../Img/hotplace2.jpg',
                title:'lamon3', 
            }
            ,
            {
                img:'../Img/hotplace2.jpg',
                title:'lamon4', 
            }
        ]
        //할인혜택
        const place2 = [{
            "fnshday": "",
            "dcntenatvnm": "매장이용할인",
            "dtlexpln": "50%60%",
            "cntadr": "02-2225-6216",
            "instltnnm": "JDX 멀티스포츠",
            "hmpg": "https://www.welfare.mil.kr",
            "rowno": "63",
            "startday": "2016-08-01",
            "rgn": "전국"
        },
        {
            "fnshday": "2026-07-31",
            "dcntenatvnm": "이용할인",
            "dtlexpln": "부산-김포(월 목 15%, 금 일 10%), 제주 노선 10%, 국제선 4  6%, 성수기 및 일부기간 제외, 해당항공사 접속",
            "cntadr": "02-3419-7553",
            "instltnnm": "에어부산(수송사)",
            "hmpg": "https://www.welfare.mil.kr",
            "rowno": "64",
            "startday": "2016-07-04",
            "rgn": "전국"
        },
        {
            "fnshday": "2026-12-01",
            "dcntenatvnm": "이용할인",
            "dtlexpln": "주중,주말 탄력할증, 성수기 정상운임의 10%, 해당항공사 접속",
            "cntadr": "02-3419-7553",
            "instltnnm": "진에어(수송사)",
            "hmpg": "https://www.welfare.mil.kr",
            "rowno": "65",
            "startday": "2017-09-18",
            "rgn": "전국"
        },
        {
            "fnshday": "",
            "dcntenatvnm": "이용할인",
            "dtlexpln": "국내선 할인 10%,  에어서울 홈페이지 접속후 인터넷 예약",
            "cntadr": "",
            "instltnnm": "에어서울(수송사)",
            "hmpg": "https://www.airseoul.com",
            "rowno": "66",
            "startday": "2022-04-15",
            "rgn": "전국"
        },
        {
            "fnshday": "",
            "dcntenatvnm": "이용할인",
            "dtlexpln": "비수기 주중 최대75%, 주말, 연휴  최대40%65%, 극성수기 최대 30%, 해당업체 사이트 접속 필요",
            "cntadr": "1588-3301",
            "instltnnm": "제주렌트카",
            "hmpg": "https://www.welfare.mil.kr",
            "rowno": "67",
            "startday": "2017-10-01",
            "rgn": "전국"
        },
        {
            "fnshday": "2023-12-31",
            "dcntenatvnm": "연중 이용할인",
            "dtlexpln": "단기 렌터카 상시 50% 할인(전역 예비역병사 1년내 )",
            "cntadr": "인터넷접수",
            "instltnnm": "롯데렌터카",
            "hmpg": "http://imnd.or.kr",
            "rowno": "68",
            "startday": "2022-04-20",
            "rgn": "전국"
        },
        {
            "fnshday": "2026-12-01",
            "dcntenatvnm": "연중 운임할인",
            "dtlexpln": "10~30%, 해당항공사 접속",
            "cntadr": "02-3419-7553",
            "instltnnm": "티웨이항공(수송사)",
            "hmpg": "https://www.welfare.mil.kr",
            "rowno": "69",
            "startday": "2016-12-02",
            "rgn": "전국"
        }]

        //핫플레이스
    const hotPlace=()=>{
        return(
            <S.HotPlaceCompo>
            {place.map((el,idx)=>{
                return(
                    <div key={idx}>
                    <img src={el.img} alt={el.title} />
                    <p>{el.title}</p>
                    </div>
                )
            })}
            </S.HotPlaceCompo>
        )
    }

// 할인혜택
//     const [place3,setPlace3] = useState([]);
//     // console.log(place3)

//   useEffect(()=>{
//     const getData = ()=>{
//         axios({
//             method:'get',
//             url:`/${process.env.REACT_APP_API_KEY}/json/DS_MND_ENLSTMN_DCNT_BEF_INF/1/81/`
//         }).then(res=>(
//             setPlace3(res.data.DS_MND_ENLSTMN_DCNT_BEF_INF.row.filter(el=>el.rgn==='전국'))
//         )
//         )
//     }
//     getData();
//   },[])


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
                        <p>{place2.map(el=>el.instltnnm)[imgCount]}</p>
                        <p>{place2.map(el=>el.rgn)[imgCount]} / {place2.map(el=>el.dcntenatvnm)[imgCount]}</p>
                        <p>{place2.map(el=>el.startday)[imgCount]} ~ {place2.map(el=>el.fnshday)[imgCount]}</p>
                        <p>{place2.map(el=>el.cntadr)[imgCount]}</p>
                        <p>{place2.map(el=>el.hmpg)[imgCount]}</p>
                        <p>{place2.map(el=>el.dtlexpln)[imgCount]}</p>
                        </S.BenefitDiv>
                        </S.MainImg>
                    <S.BenefitP>{imgCount+1}/{place2.map(el=>el).length}</S.BenefitP>
                <AiFillCaretRight size={25}  onClick={()=>nextButton()}/>
            </S.BenefitInfo>
        )

    }

    return(
            <S.MainPageContainer>
                <S.MainWrapper>
                <S.Header>
                        <div>로고</div>
                        <button onClick={()=>navigate('/signin')}>로그인</button>
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