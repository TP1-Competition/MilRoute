import { useLocation } from 'react-router';
import * as S from './style';
import {BsArrowLeft} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import {AiOutlineSearch,AiOutlineRight} from 'react-icons/ai';
import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../css/alert.css';

const swal = withReactContent(Swal);

const StartDesti=()=>{
    const navigate= useNavigate();
    const { state } = useLocation();
    const {serverData,local,mapx,mapy,selectPlace} = state;
    const [start,setStart] = useState([]);
    const [num,setNum] = useState(6);
    const startClick=(res,idx)=>{
        setStart(res)
        setNum(idx)
    }

    const finishPlace=()=>{
        if(start.place_name!==undefined){
            swal.fire({  
                heightAuto: false,
                icon: 'question',
                text: `"${start.place_name}"으로 선택하시겠습니까?`,
                confirmButtonText: '확인',
                confirmButtonColor: '#289951',
                showCancelButton: true,
                cancelButtonText: '취소',
                width: 400,})
                .then((result)=>{
                  if(result.isConfirmed){
                   return navigate('/Lastdesti',{
                    state:{
                        start:start,
                        selectPlace:selectPlace,
                        local:local,
                        mapx:mapx,
                        mapy:mapy,
                        serverData:serverData,
                    }
                   }); 
                }
              })
        }else{
            swal.fire({
                heightAuto: false,
                icon: 'warning',
                text: '시작 장소를 선택해주세요',
                confirmButtonText: '확인',
                confirmButtonColor: '#289951',
                width: 400,
              });
        }
    }

    const moveSelectDesti=()=>{
        navigate('/selectdesti',{
            state:{
                local:local,
                mapx:mapx,
                mapy:mapy,
                selectPlace1:selectPlace,
                serverData1:serverData,
            }
        })
    }
    return(
        <S.Wapper>
        <S.Header>
            <BsArrowLeft onClick={moveSelectDesti} size={20}/>
            <h3>시작 장소 선정</h3>
        </S.Header>
        <S.Body>
            <S.Content>
            {serverData.map((res,idx)=>{
            return(
                
                <S.Data key={idx} onClick={()=>startClick(res,idx)} style={{backgroundColor:(num===idx?'black':'#DADADA'),color:(num===idx?'#F9CF00':'black'),fontWeight:(num===idx?'600':'500')}}>
                    <p>{idx+1}. {res.place_name}</p>
                </S.Data>
            )
        })}        
            </S.Content>
        </S.Body>
        <S.BtnFooter>
        <S.ShortRoute onClick={finishPlace}><h3><AiOutlineSearch size={20}/>도착 장소 선정하기</h3>
        <S.Svg><AiOutlineRight size={20}/></S.Svg></S.ShortRoute>
        </S.BtnFooter>
        </S.Wapper>
    )
}

export default StartDesti;