import * as S from './style';
import { useEffect, useState } from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../css/alert.css'
import axios from 'axios';

const swal = withReactContent(Swal);

const AreaChoice=()=>{
  const navigate= useNavigate();
  const menuArr = [
    { name: '서울', content: ['서울특별시']},
    { name: '경기', content: ['가평군','고양시','과천시','광명시','광주시', '구리시','군포시','김포시','남양주시','동두천시','부천시','성남시','수원시','시흥시','안산시','안성시','안양시','양주시','양평군','여주시','연천군','오산시','용인시','의왕시','의정부시','이천시','파주시','평택시','포천시','하남시','화성시']},
    { name: '인천', content: ['강화군','인천광역시']},
    { name: '강원', content: ['강릉시','동해시','삼척시','속초시', '원주시', '춘천시', '태백시', '고성군', '양구군','양양군', '영월군', '인제군', '정선군', '철원군', '평창군', '홍천군', '화천군', '횡성군']},
    { name: '대전', content: ['대전광역시']},
    { name: '세종', content: ['세종특별시']},
    { name: '충북', content: ['제천시', '음성군', '보은군', '단양군', '충주시', '괴산군', '청주시', '진천군']},
    { name: '충남', content: ['천안시', '태안군', '아산시', '서산시', '논산시', '서천군', '홍성군', '예산군', '금산군', '보령시', '공주시', '청양군']},
    { name: '울산', content: ['울산광역시']},
    { name: '경북', content: ['문경시', '영주시', '봉화군', '울진군', '울릉군', '상주시', '예천군', '안동시', '영양군', '의성군', '청송군', '영덕군', '김천시', '구미시', '군위군', '성주순', '칠곡군', '고령군', '경산시', '청도군', '영천시', '포항시', '경주시']},
    { name: '경남', content: ['거창군', '함양군', '산청군', '합천군', '창녕군', '밀양시', '양산시', '의령군', '함안군', '창원시', '김해시', '하동군', '사천시', '고성군', '거제시', '남해군', '통영시']},
    { name: '전북', content: ['군산시', '익산시', '완주군', '진안군', '무주군', '장수군', '전주시', '김제시', '부안군', '정읍시', '임실군', '남원시', '순창군', '고창군'] },
    { name: '전남', content: ['영광군', '장성군', '담양군', '곡성군', '구례군', '광양시', '순천시', '화순군', '나주시', '함평군', '무안군', '신안군', '여수시', '보성군', '고흥군', '장흥군', '영암군', '강진군', '해안군','진도군', '완도군','목포시']},
    { name: '부산', content: ['부산광역시']},
    { name: '제주', content: ['제주시', '서귀포시']},
  ];
    const [currentTab, clickTab] = useState(0);
    //도 값
    const [doRegion, setDoRegion] = useState(menuArr[0].name);
    //시,군 값
    const [siRegion, setSiRegion] = useState('');


    //도 버튼 클릭시
      const selectMenuHandler = (el, index) => {
        clickTab(index);
        setDoRegion(el.name);
        setSiRegion('');
      };

      // '시'선택시 버튼 색깔 바꾸기 (아직 완성안됨)
      const [num,setNum]=useState(-1)

      //시,군 버튼 클릭시
      const onClickRegion=(el,idx)=>{
        setNum(idx)
        setSiRegion(el)
      }

      //시,군 버튼
      const TabContent = ()=>{
        return(
            <S.RegionBody>
              <S.RegionContain>
            {menuArr[currentTab].content.map((el,idx)=>(
                <S.Region 
                style={{backgroundColor:(num===idx?'#F9CF00':'')}}
                onClick={()=>onClickRegion(el,idx)} key={idx}>{el}</S.Region>
            ))}
            </S.RegionContain>
            </S.RegionBody>
        )
      }

      //검색하기 disabled 활성화
      const [regionStatus,setRegionStatus] = useState(true);
      useEffect(()=>{
        if(siRegion!==''){
          setRegionStatus(false)
        }else setRegionStatus(true)
      },[siRegion,doRegion])

      const searchBtn=()=>{
        swal.fire({  
          heightAuto: false,
          icon: 'question',
          text: `"${doRegion} ${siRegion}"으로 검색하시겠습니까?`,
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          showCancelButton: true,
          cancelButtonText: '취소',
          width: 400,})
          .then((result)=>{
            if(result.isConfirmed){
              window.localStorage.removeItem('selectPlace');
              window.localStorage.removeItem('serverData');
        axios.get('https://dapi.kakao.com/v2/local/search/address',{
          params: {
            query: `${doRegion} ${siRegion}`,
          },
          headers: {'Authorization' : `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`},
  }).then(res=>{
    window.location.replace('/selectdesti')
            navigate('/selectdesti',{
              state:{
                local : `${doRegion} ${siRegion}`,
                mapx:res.data.documents[0].x,
                mapy:res.data.documents[0].y,
              }
             });
          })
           
          }
        })
      }


      return(
        <S.Wapper>
        <S.Header>
            <h3>지역</h3>
            <AiOutlineClose size={20} onClick={()=>{navigate('/')}}/>
        </S.Header>
        <S.TabBody>
            <S.TabDiv>
          <S.TabMenu>
            {menuArr.map((el,index) => (
                <li className={index === currentTab ? "submenu focused" : "submenu" }
                onClick={() => selectMenuHandler(el, index)} key={index}>{el.name}</li>
              ))}
          </S.TabMenu>
          </S.TabDiv>
          {TabContent()}
          </S.TabBody>
          <S.SearchDiv>
                <S.SearchBtn 
                disabled={regionStatus}
                 onClick={()=>searchBtn()}>검색하기</S.SearchBtn>
          </S.SearchDiv>
          </S.Wapper>
      )
}

export default AreaChoice;