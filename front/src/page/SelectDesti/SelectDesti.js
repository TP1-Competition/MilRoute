import * as S from './style';
import {BsArrowLeft} from 'react-icons/bs';
import {AiOutlineSearch,AiOutlineRight,AiOutlineClose,AiTwotoneCloseCircle,AiOutlineRedo} from 'react-icons/ai';
import {FiMapPin} from 'react-icons/fi';
import {MdOutlineArrowDropDownCircle} from "react-icons/md";
import NaverMap from '../../component/NaverMap/NaverMap';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../css/alert.css'

const swal = withReactContent(Swal);

const SelectDesti = () =>{
    const navigate= useNavigate();
    const region=['지역1','지역2','지역3','지역4','지역5','지역6','지역7']
    //선택한 지역
    const [selectPlace, setSelectPlace] =useState([...region]);
    const [onOff, setOnOff] = useState('on')
    //지역설명 팝업창 boolen
    const [modal, setModal] = useState(true);
    //내가 선택한 지역 boolen
    const [isOpen, setIsOpen] = useState(false);



    //지역 설명 팝업창 
    const openModal = () => {
        setModal(!modal) 
      };
    //장소 선택
    const selectPik = ()=>{

    }

    const Modal = ()=>{
        return (
            <>
             <S.MapModal>
                    <S.ModalWapper>
                        <img src='../Img/hotplace2.jpg' alt='../Img/hotplace2.jpg'/>
                        <S.ModalContain>
                            <S.ModalCotainFirst>
                                <div><AiTwotoneCloseCircle color='#36D689' size={12}/>군할인</div>
                                <AiOutlineClose onClick={()=>openModal()} size={25}/>
                            </S.ModalCotainFirst>
                            <S.ModalCotainSecond>
                                <h3>예술의 전당</h3>
                                <p>공연장</p>
                            </S.ModalCotainSecond>
                            <S.ModalCotainThird>서울서초구 남부순환로 2406 </S.ModalCotainThird>
                        </S.ModalContain>
                    </S.ModalWapper>
                    <S.ModalButton> <button>장소추가</button></S.ModalButton>
            </S.MapModal>
            </>
        )
    }

    

    //내가 선택한 여행지 팝업창
    //모달창 x
    const openModalHandler = () => {
        setIsOpen(!isOpen) 
      };
    //리스트 x 
    const closeList =(e)=>{
        setSelectPlace(selectPlace.filter(it=> it!==e))
    }
    //초기화버튼
    const resetBtn =()=>{
        setSelectPlace([])
    }

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
                                    <S.Place key={idx}>
                                        <div>{idx+1}. {el}</div>
                                        <AiOutlineClose values={el} id={el} onClick={e=>closeList(e.target.id)} size={15}/>
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
    //리스트 브라우저에 바로 나오도록
    useEffect(()=>{
        selectPlaceModal()
    },[selectPlace])

    //최적경로 선택시
    const shortRoute=()=>{
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
             return navigate('/'); 
          }
        })
      }


return(
    <>
    <S.Wapper>
        <S.SearchHeader>
            <S.SearchDiv>
            <S.HeaderFirst>
                <BsArrowLeft size={20}/>
                <S.SearchBar>
                    <AiOutlineSearch size={15}/>
                   <S.SearchInput placeholder='검색하기' type="text"/>
                </S.SearchBar>
            </S.HeaderFirst>
            <S.HeaderFirst>
                <S.SearchBar>
                    <FiMapPin size={15}/>
                    <S.SearchInput placeholder='선택된 현 위치 주소표시' type="text"/>
                </S.SearchBar>
            </S.HeaderFirst>
            <S.HeaderFirst>
                <S.MapTag>관광지</S.MapTag>
                <S.MapTag>숙소</S.MapTag>
                <S.MapTag>맛집</S.MapTag>
                <S.MapTag>TMO</S.MapTag>
            </S.HeaderFirst>
            </S.SearchDiv>
        </S.SearchHeader>
        <S.MapContent>
            <S.MilSale>군 할인
                <div
                    style={{
                        color:((onOff==='on')?'red':'#DADADA')
                    }}
                >{onOff}</div>
            </S.MilSale>
            <S.SelectPlace onClick={()=>openModalHandler()}>내가 선택한 여행지 {selectPlace.length} <p>/7</p> <MdOutlineArrowDropDownCircle color='#55B586' size={20}/></S.SelectPlace>
            <NaverMap/>
            {modal?Modal():''}
        <S.ShortRoute onClick={shortRoute}><h3><AiOutlineSearch size={20}/>최적경로 검색</h3>
        <S.Svg><AiOutlineRight size={20}/></S.Svg></S.ShortRoute>
        </S.MapContent>
        {isOpen?selectPlaceModal():''}
    </S.Wapper>
    </>
)
}

export default SelectDesti;