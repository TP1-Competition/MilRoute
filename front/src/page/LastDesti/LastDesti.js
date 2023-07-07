import { useLocation } from 'react-router';
import * as S from './style';
import {BsArrowLeft} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import {AiOutlineSearch,AiOutlineRight} from 'react-icons/ai';
import { useState} from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../css/alert.css';
import axios from 'axios';

const swal = withReactContent(Swal);

const LastDesti=()=>{
    const navigate= useNavigate();
    const { state } = useLocation();
    const {serverData,local,mapx,mapy,selectPlace,start} = state;
    const [finish,setFinish] = useState([]);
    const [num,setNum] = useState(6);
    const startClick=(res,idx)=>{
        setFinish(res)
        setNum(idx)
    }
    let userId= window.localStorage.getItem('userId');
    let accessToken = window.localStorage.getItem('accessToken');

    const finishPlace=()=>{
        if(finish.place_name!==undefined){
            swal.fire({  
                heightAuto: false,
                icon: 'question',
                text: `"${finish.place_name}"으로 검색하시겠습니까?`,
                confirmButtonText: '확인',
                confirmButtonColor: '#289951',
                showCancelButton: true,
                cancelButtonText: '취소',
                width: 400,})
                .then((result)=>{
                  if(result.isConfirmed){
                    window.localStorage.removeItem('selectPlace');
                    window.localStorage.removeItem('serverData');
                        axios.post('http://localhost:8080/api/v1/routes',{
                            startPlace:start,
                            endPlace:finish,
                            places:serverData
                        }).then(res=>
                            // axios.get(`http://localhost:8080/api/v1/users/${userId}/routes/${res.data.id}/register`,{
                            //     headers:{
                            //         Authorization : `Bearer ${accessToken}`,
                            //     }
                            // })
                            navigate('/shortroute',{
                                state:{
                                    data:res.data
                                }
                            })
                            )
                }
              })
        }else{
            swal.fire({
                heightAuto: false,
                icon: 'warning',
                text: '도착 장소를 선택해주세요',
                confirmButtonText: '확인',
                confirmButtonColor: '#289951',
                width: 400,
              });
        }
    }

    const moveStartDesti=()=>{
        navigate('/startdesti',{
            state:{
                local:local,
                mapx:mapx,
                mapy:mapy,
                selectPlace:selectPlace,
                serverData:serverData,
            }
        })
    }
    return(
        <S.Wapper>
        <S.Header>
            <BsArrowLeft onClick={moveStartDesti} size={20}/>
            <h3>도착 장소 선정</h3>
        </S.Header>
        <S.Body>
            <S.Content>
            {serverData.map((res,idx)=>{
            return(
                
                <S.Data key={idx} onClick={()=>startClick(res,idx)} style={{backgroundColor:(num===idx?'black':'#DADADA'),color:(num===idx?'#F9CF00':'black')}}>
                    <p>{idx+1}. {res.place_name}</p>
                </S.Data>
            )
        })}        
            </S.Content>
        </S.Body>
        <S.BtnFooter>
        <S.ShortRoute onClick={finishPlace}><h3><AiOutlineSearch size={20}/>경로 검색하기</h3>
        <S.Svg><AiOutlineRight size={20}/></S.Svg></S.ShortRoute>
        </S.BtnFooter>
        </S.Wapper>
    )
}

export default LastDesti;