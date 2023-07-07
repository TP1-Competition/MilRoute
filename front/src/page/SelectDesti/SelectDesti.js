import * as S from './style';
import {BsArrowLeft} from 'react-icons/bs';
import {AiOutlineSearch,AiOutlineRight,AiOutlineClose,AiOutlineRedo} from 'react-icons/ai';
import {FiMapPin} from 'react-icons/fi';
import {MdOutlineArrowDropDownCircle} from "react-icons/md";
import NaverMap from '../../component/NaverMap/NaverMap';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../css/alert.css'
import axios from 'axios';
import { useLocation } from 'react-router';
import db from '../../db.json';

const swal = withReactContent(Swal);
const SelectDesti = () =>{
    const Milplace2= db.Milplace2;
    const Milsale2=db.Milsale2;
    const TMOINFO=db.TMOINFO;
    const navigate= useNavigate();
    const selectPlace1=window.localStorage.getItem('selectPlace');
    let serverData1=JSON.parse(window.localStorage.getItem('serverData'));
    //선택한 지역
    const [selectPlace, setSelectPlace] =useState([]);
    //서버에 보낼 데이터
    const [serverData, setServerData] = useState([]);
    const [onOff, setOnOff] = useState('off')
    //지역설명 팝업창 boolen
    // const [modal, setModal] = useState(false);
    //내가 선택한 지역 boolen
    const [isOpen, setIsOpen] = useState(false);
    //지역 선택 페이지에서 가져온 위도와 경도
    const { state } = useLocation();
    const {local,localxy,mapx,mapy} = state;

    useEffect(()=>{
        if(selectPlace1!==null){
            setSelectPlace(selectPlace1.split(','))
            setServerData(serverData1)
        }else{
            setSelectPlace([])
            setServerData([]) 
        }
    },[])
    //태그 눌렀을시 넣을 값
    const [tag, setTag]=useState('');
    //현위치 주소 표시
    const [current,setCurrent] = useState(local)
    //zoom
    const [zoom, setZoom] = useState(12)
    //관광지, 맛집,tmo, 숙박을 눌렀을시 버튼 색깔 변하게 하는것
    const [num,setNum] = useState(-1)


    useEffect(()=>{
        if(selectPlace.indexOf(selectPlace[selectPlace.length-1])!==selectPlace.length-1&&selectPlace.length>1){
            setSelectPlace(prevState => prevState.slice(0, -1))
            setServerData(prevState => prevState.slice(0, -1))
            swal.fire({
                heightAuto: false,
                icon: 'warning',
                text: '동일한 장소는 선택 못합니다.',
                confirmButtonText: '확인',
                confirmButtonColor: '#289951',
                width: 400,
              });
        }
        if(selectPlace.length>5){
            setSelectPlace(prevState => prevState.slice(0, -1))
            setServerData(prevState => prevState.slice(0, -1))
            swal.fire({
                heightAuto: false,
                icon: 'warning',
                text: '최대 5개만 선택할 수 있습니다',
                confirmButtonText: '확인',
                confirmButtonColor: '#289951',
                width: 400,
              });
        }
    },[selectPlace,serverData])

    

    //내가 선택한 여행지 팝업창
    //모달창 x
    const openModalHandler = () => {
        setIsOpen(!isOpen) 
      };
    //리스트 x 
    const closeList =(e)=>{
        setSelectPlace(selectPlace.filter((it)=> it!==e))
        setServerData(serverData.filter((it)=> it.place_name!==e))
    }
    //초기화버튼
    const resetBtn =()=>{
        setSelectPlace([])
        setServerData([])
    }
    //


    const selectPlaceModal = ()=>{
        return(
            <>
              <S.ModalBackdrop onClick={openModalHandler}>
                  <S.ModalView onClick={(e) => e.stopPropagation()}>
                    <S.ExitBtn >
                            <h3>내가 선택한 여행지</h3>
                            <AiOutlineClose size={25} onClick={openModalHandler}/>
                    </S.ExitBtn>
                        {selectPlace.map((el,idx)=>{
                            return(
                                    <S.Place key={idx} values={el} >
                                        <div>{idx+1}. {el}</div>
                                        <AiOutlineClose id={el} onClick={e=>closeList(e.target.id)} size={15}/>
                                    </S.Place>
                            )
                        })}
                    <S.Reset onClick={resetBtn}>
                        <AiOutlineRedo/>
                        <p>초기화</p>
                    </S.Reset>
                  </S.ModalView>
                </S.ModalBackdrop>
          </>
        )
    };
    //리스트 브라우저에 바로 나오도록 ---> 이거 뭐지....?
    // useEffect(()=>{
    //     selectPlaceModal()
    // },[selectPlace])

    //최적경로 선택시
    const shortRoute=()=>{
        if(selectPlace.length===0){
            swal.fire({
                heightAuto: false,
                icon: 'warning',
                text: '지역을 선택해주세요.',
                confirmButtonText: '확인',
                confirmButtonColor: '#289951',
                width: 400,
              });
        }else{
            swal.fire({  
                heightAuto: false,
                icon: 'question',
                text: `"${selectPlace}"으로 검색하시겠습니까?`,
                confirmButtonText: '확인',
                confirmButtonColor: '#289951',
                showCancelButton: true,
                cancelButtonText: '취소',
                width: 400,})
                .then((result)=>{
                  if(result.isConfirmed){
                    window.localStorage.setItem('selectPlace',selectPlace);
                    window.localStorage.setItem('serverData', JSON.stringify(serverData));
                   navigate('/startdesti',{
                    state:{
                        local:local,
                        mapx:mapx,
                        mapy:mapy,
                        serverData:serverData,
                        selectPlace:selectPlace
                    }
                   }); 
                }
              })
        }

      };

// 주소 검색창
const [address, setAddress] = useState('');
const [curlocal, setCurLocal] = useState(localxy);
//길이
const [curlength, setCurLength] = useState(0);


//검색하기
const onKeyPress=(e)=>{ // 전국 검색으로 진행
    setNum(-1)
    if(e.key==='Enter'){
    setOnOff('off')
        let homePlace=[];
        axios.get(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${address}`,{
            headers: {
                Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`
              }
        }).then(res=>{
            let milFood= res.data.documents;
              if(milFood.length>0) homePlace.push(...milFood.map(el=>el))
              setCurLocal([homePlace])
              setCurLength(homePlace.length)
              setZoom(7)
        }
        )
    }
    }

const handleChange = (e)=>{
    setAddress(e.target.value)
}

//관광지
let row=[];
const hotPlaceClick = async(e)=>{
    setNum(e)
    setTag('관광지')
    setAddress('')
    setOnOff('off')
    setZoom(12)
    axios.get(`https://dapi.kakao.com/v2/local/search/address`,{
        params:{
            query:local
          },
        headers: {'Authorization' : `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`},

    })
    .then(res=>{
        for(let i=1; i<4; i++){
            axios.get(`https://dapi.kakao.com/v2/local/search/keyword.json?y=${res.data.documents[0].y}&x=${res.data.documents[0].x}&radius=20000`,{
                params:{
                    query:`${local} 관광지`,
                    page :[i],
                    size:15
                  },
                headers: {'Authorization' : `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`},
        // eslint-disable-next-line
            }).then((res)=>{
                res.data.documents.map(el=> row.push(el));
                setCurLocal([row])
                setCurLength(row.length)
            })
        }
        
    })
}  ;


//숙박
    const lodgmentClick = async(e)=>{
        setNum(e)
    setTag('숙박')
    setAddress('')
    setOnOff('off')
    setZoom(12)
    row=[];
        axios.get(`https://dapi.kakao.com/v2/local/search/address`,{
            params:{
                query:local
              },
            headers: {'Authorization' : `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`},
    
        })
        .then(res=>{
            for(let i=1; i<4; i++){
                axios.get(`https://dapi.kakao.com/v2/local/search/keyword.json?y=${res.data.documents[0].y}&x=${res.data.documents[0].x}&radius=20000`,{
                    params:{
                        query:`${local} 숙박`,
                        page :[i],
                        size:15
                      },
                    headers: {'Authorization' : `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`},
            // eslint-disable-next-line
                }).then(res=>{
                    res.data.documents.map(el=> row.push(el));
                    setCurLocal([row])
                    setCurLength(row.length)
                })
            }
        })
    }  ;

//맛집
const foodClick = async(e)=>{
    setNum(e)
    setTag('맛집')
    setAddress('')
    setOnOff('off')
    setZoom(12)
    row=[];
        axios.get(`https://dapi.kakao.com/v2/local/search/address`,{
            params:{
                query:local
              },
            headers: {'Authorization' : `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`},
    
        })
        .then(res=>{
            for(let i=1; i<4; i++){
                axios.get(`https://dapi.kakao.com/v2/local/search/keyword.json?y=${res.data.documents[0].y}&x=${res.data.documents[0].x}&radius=20000`,{
                    params:{
                        query:`${local} 맛집`,
                        page :[i],
                        size:15
                      },
                    headers: {'Authorization' : `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`},
            // eslint-disable-next-line
                }).then(res=>{
                    res.data.documents.map(el=> row.push(el));
                    setCurLocal([row])
                    setCurLength(row.length)
                })
            }
        })
    }  ;

//TMO 
const [keyword, setKeyword] = useState([]);
const [tmoPlace, setTmoPlace] = useState([]);

useEffect(() => {
    setKeyword(TMOINFO.map(el=>el.tmo_nm));
}, []);

useEffect(() => {
  const fetchPlaces = async () => {
    const placesPromises = keyword.map(async (kw) => {
      const apiUrl = `https://dapi.kakao.com/v2/local/search/keyword.json?query=${kw}역&y=${mapy}&x=${mapx}`;
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`
          }
        });
        const places = response.data.documents;
        return places.filter((place) => {
          return Number(place.distance) < 10000 &&
            ( place.category_name.includes('기차')&&!place.category_name.includes('폐역'));
        });
      } catch (error) {
        return [];
      }
    });

    try {
      const allPlaces = await Promise.all(placesPromises);
      const filteredPlaces = allPlaces.filter((places) => places.length > 0);
      setTmoPlace(filteredPlaces);
    } catch (error) {
      setTmoPlace([]);
    }
  };

  fetchPlaces();
}, [keyword,mapy,mapx]);

const tmoPlace2=[];
tmoPlace.map(el=> el.map(al=>tmoPlace2.push(al)))
//tmo 클릭했을시
const tmoClick=(e)=>{
    setNum(e)
    setAddress('')
    setTag('tmo')
    setOnOff('off')
    setZoom(12)
    if(tmoPlace2.length!==0){
        setCurLocal([tmoPlace2])
        setCurLength(tmoPlace2.length)
    }else{      
        swal.fire({
        heightAuto: false,
        icon: 'warning',
        text: 'tmo가 없습니다',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    }
}

//군할인 관광지,맛집
const [milInfo,setMilInfo]= useState([]);
//군할인 숙박
const [hotel,setHotel] = useState([])
let lodgment = [];

//tag에 따라 milInfo에 담기는 값을 달리해준다. 
useEffect(()=>{
    setMilInfo(Milsale2)
},[])
//숙박을 위한 api
useEffect(()=>{
        setHotel(Milplace2.map(el=>el.addr1))
 },[])
 //숙박을 위한 변수
let hotel2= milInfo.filter(el=>(el.dcntenatvnm.includes('연중 객실할인'))).map(el=>el.rgn==='전국'?`${el.instltnnm}`:`${el.rgn} ${el.instltnnm}`)
lodgment.push(...hotel)
lodgment.push(...hotel2)




let milSalePlace = milInfo.filter(el=>(!el.dcntenatvnm.includes('연중 객실할인')&&!el.instltnnm.includes('빕스')))
const milSale = ()=>{
    setOnOff('on')
    //맛집 클릭후 군 할인 클릭했을시
    if(tag==='맛집'){
        if(onOff==='off'){
            axios.get(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${'빕스'}&y=${mapy}&x=${mapx}`,{
                headers: {
                    Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`
                  }
            }).then(res=>{
                let milFood= res.data.documents.filter((place) => {
                    return Number(place.distance) < 15000 ;
                  })
                  setCurLocal([milFood])
                  setCurLength(milFood.length)
            }
            )
        }

    }else if(tag===''){
        setOnOff('off')
        swal.fire({
            heightAuto: false,
            icon: 'warning',
            text: '맛집,숙박,관광지 태그를 먼저 눌러주세요',
            confirmButtonText: '확인',
            confirmButtonColor: '#289951',
            width: 400,
          });
    }else if(tag==='관광지'){
        let homePlace=[];
        if(onOff==='off'){
            for(let i=0;i<milSalePlace.length;i++){
                let placeQuery=milSalePlace[i].rgn==='전국'?`${milSalePlace[i].instltnnm}`:`${milSalePlace[i].rgn} ${milSalePlace[i].instltnnm}`;
        
                    axios.get(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${placeQuery}&y=${mapy}&x=${mapx}`,{
                        headers: {
                            Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`
                          }
                    }).then(res=>{
                        let milFood= res.data.documents.filter((place) => {
                            return Number(place.distance) < 10000 ;
                          })
                          if(milFood.length>0) homePlace.push(...milFood.map(el=>el))
                          setCurLocal([homePlace])
                          setCurLength(homePlace.length)
                    }
                    )
                }
        }
    }else if(tag==='숙박'){
        let homePlace=[];
        if(onOff==='off'){
            for(let i=0;i<lodgment.length;i++){
                axios.get(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${lodgment[i]}&y=${mapy}&x=${mapx}`,{
                    headers: {
                        Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`
                      }
                }).then(res=>{
                    let milFood= res.data.documents.filter((place) => {
                        return Number(place.distance) < 15000 ;
                      })
                      if(milFood.length>0) homePlace.push(...milFood.map(el=>el))
                      setCurLocal([homePlace])
                      setCurLength(homePlace.length)
                }
                )
            }
        }

    }else if(tag==='tmo'){
        setOnOff('off')
    }
}


return(
    <>
    <S.Wapper>
        <S.SearchHeader>
            <S.SearchDiv>
            <S.HeaderFirst>
                <BsArrowLeft onClick={()=>navigate('/areachoice')} size={20}/>
                <S.SearchBar>
                    <AiOutlineSearch  size={15}/>
                   <S.SearchInput
                   value={address}
                    onKeyDown={onKeyPress}
                    onChange ={handleChange} 
                    placeholder='검색하기' type="text"/>
                </S.SearchBar>
            </S.HeaderFirst>
            <S.HeaderFirst>
                <S.SearchBar>
                    <FiMapPin size={15}/>
                    <S.SearchInput value={current||''} readOnly placeholder='선택된 현 위치 주소표시' type="text"/>
                </S.SearchBar>
            </S.HeaderFirst>
            <S.HeaderFirst>
                <S.MapTag style={{cursor:'pointer',color:(num==='1'?'black':'#A49E9E'),backgroundColor:(num==='1'?'#FFFBD3':'white'),fontWeight:(num==='1'?'800':'500'),border:(num==='1'?'1.5px solid #F9CF00':'1.5px solid #DADADA')}} value={1} onClick={(e)=>hotPlaceClick(e.target.value)}>관광지</S.MapTag>
                <S.MapTag style={{cursor:'pointer',color:(num==='2'?'black':'#A49E9E'),backgroundColor:(num==='2'?'#FFFBD3':'white'),fontWeight:(num==='2'?'800':'500'),border:(num==='2'?'1.5px solid #F9CF00':'1.5px solid #DADADA')}} value={2} onClick={(e)=>lodgmentClick(e.target.value)}>숙소</S.MapTag>
                <S.MapTag style={{cursor:'pointer',color:(num==='3'?'black':'#A49E9E'),backgroundColor:(num==='3'?'#FFFBD3':'white'),fontWeight:(num==='3'?'800':'500'),border:(num==='3'?'1.5px solid #F9CF00':'1.5px solid #DADADA')}} value={3} onClick={(e)=>foodClick(e.target.value)}>맛집</S.MapTag>
                <S.MapTag style={{cursor:'pointer',color:(num==='4'?'black':'#A49E9E'),backgroundColor:(num==='4'?'#FFFBD3':'white'),fontWeight:(num==='4'?'800':'500'),border:(num==='4'?'1.5px solid #F9CF00':'1.5px solid #DADADA')}} value={4} onClick={(e)=>tmoClick(e.target.value)}>TMO</S.MapTag>
            </S.HeaderFirst>
            </S.SearchDiv>
        </S.SearchHeader>
        <S.MapContent>
            <S.MilSale style={{cursor:'pointer'}} onClick={milSale}>군 할인
                <div
                    style={{
                        color:((onOff==='on')?'red':'#DADADA')
                    }}
                >{onOff}</div>
            </S.MilSale>
            <S.SelectPlace onClick={()=>openModalHandler()}>내가 선택한 여행지 {selectPlace.length} <p>/5</p> <MdOutlineArrowDropDownCircle color='#55B586' size={20}/></S.SelectPlace>
            <NaverMap 
                curlocal={curlocal}
                curlength={curlength}
                mapx={mapx}
                mapy={mapy}
                setCurrent={setCurrent}
                setSelectPlace={setSelectPlace}
                selectPlace={selectPlace}
                zoom={zoom}
                setServerData={setServerData}
                />
        <S.ShortRoute onClick={shortRoute}><h3><AiOutlineSearch size={20}/>최적경로 검색</h3>
        <S.Svg><AiOutlineRight size={20}/></S.Svg></S.ShortRoute>
        </S.MapContent>
        {isOpen?selectPlaceModal():''}
    </S.Wapper>
    </>
)
}

export default SelectDesti;