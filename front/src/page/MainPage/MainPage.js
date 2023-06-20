import { useEffect,useState } from 'react';
import * as S from './style';
import {BsFillCaretDownFill} from 'react-icons/bs';
import {AiFillCaretRight,AiFillCaretLeft} from 'react-icons/ai'
import axios from 'axios';
import IuseInterval from '../../hooks/useInterval';

const MainPage=()=>{
    const useInterval=IuseInterval();
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

//   useEffect(()=>{
//     const getData = ()=>{
//         axios({
//             method:'get',
//             url:'/3536313631353736303833313632313035/json/DS_MND_ENLSTMN_DCNT_BEF_INF1/5/'
//             // url:'https://openapi.mnd.go.kr/3536313631353736303833313632313035/json/DS_MND_ENLSTMN_DCNT_BEF_INF',
//             // url:'https://jsonplaceholder.typicode.com/',
//             headers:{
//                 'Access-Control-Allow-Origin':'*'
//             }
//         }).then(res=>
//             console.log(res.data))
//     }
//     getData();
//   },[])

const [imgCount,setImgCount] = useState(0);
const [custominterval] = useState(5000);

const preButton=()=>{
    if(imgCount!==0) setImgCount(imgCount-1);
};
const nextButton=()=>{
    if(imgCount!==place.length-1) setImgCount(imgCount+1);
    else setImgCount(0)
};

//이미지 슬라이스 자동으로 넘기기
useInterval(
    () => setImgCount((imgCount) =>{
        if(imgCount+1===place.length){
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
                    <S.MainImg>{place[imgCount].title}</S.MainImg>
                    <p>{imgCount+1}/{place.length}</p>
                <AiFillCaretRight size={25}  onClick={()=>nextButton()}/>
            </S.BenefitInfo>
        )

    }

    return(
            <S.MainPageContainer>
                <S.MainWrapper>
                {BenefitInfo()}
                <S.H2>지역을 선택해주세요</S.H2>
                <S.SearchDiv><p>지역선택</p><BsFillCaretDownFill/></S.SearchDiv>
                <h3>사람들이 선택한 핫플레이스</h3>
                <p>Diam ut quis ultrices mattis aenean</p>
                {hotPlace()}
                </S.MainWrapper>
            </S.MainPageContainer>
    )
}

export default MainPage;