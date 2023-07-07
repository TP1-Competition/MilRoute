import * as S from './style';
import {BsArrowLeft} from 'react-icons/bs';
import {AiOutlineUpCircle,AiOutlineDownCircle} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../css/alert.css';
import axios from 'axios';

const swal = withReactContent(Swal);

const BookMark = ()=>{
    const navigate = useNavigate();
    const [num,setNum] = useState(-1);
    //저장된 리스트 조회
    const [bookList, setBookList] =useState([])
    const [listName, setListName] =useState([])

    const startClick=(res,idx)=>{
        // setStart(res)
        setNum(idx)
    }

    let userId= window.localStorage.getItem('userId');
    let accessToken = window.localStorage.getItem('accessToken');

    useEffect(()=>{
        axios.get(`http://localhost:8080/api/v1/users/${userId}/routes`,{
            headers:{
                Authorization : `Bearer ${accessToken}`,
            }
        }).then(res=>{
            setBookList(res.data.routes)
            setListName(res.data.routes.map((el)=>el.placeNames.join(` -> `)))
        })
        // eslint-disable-next-line
    },[])

    const [detailData,setDetailData] = useState([])

    //드롭다운 눌렀을시 해당 리스트의 데이터 불러오기
    const listData= async(routeId)=>{
        await axios.get(`http://localhost:8080/api/v1/users/${userId}/routes/${routeId}`,{
            headers:{
                Authorization : `Bearer ${accessToken}`,
            }
        }).then(res=>{
            setDetailData(res.data)
        })
    }

    //바로 경로 보기
    const reSendPath= ()=>{
        navigate('/shortroute',{
            state:{
                data:detailData
            }
        })
    }

    //경로 수정

    //삭제
    const deleteList = (routeId)=>{
        swal.fire({  
            heightAuto: false,
            icon: 'question',
            text: `삭제하시겠습니까?`,
            confirmButtonText: '확인',
            confirmButtonColor: '#289951',
            showCancelButton: true,
            cancelButtonText: '취소',
            width: 400,})
            .then(async(result)=>{
              if(result.isConfirmed){
                await axios.delete(`http://localhost:8080/api/v1/users/${userId}/routes/${routeId}`,{
                    headers:{
                        Authorization : `Bearer ${accessToken}`,
                    }
                }).then(res=>{
                    axios.get(`http://localhost:8080/api/v1/users/${userId}/routes`,{
                        headers:{
                            Authorization : `Bearer ${accessToken}`,
                        }
                    }).then(res=>{
                        setBookList(res.data.routes)
                        setListName(res.data.routes.map((el)=>el.placeNames.join(` -> `)))
                    })
                })
            }
          })

    }

    return(
        <S.Wapper>
        <S.Header>
            <BsArrowLeft onClick={()=>navigate(-1)} size={20}/>
            <h3>즐겨찾기</h3>
        </S.Header>
        <S.Body>
            <S.Content>
                <h2>저장된 최적 경로</h2>
                
                
            {bookList.map((res,idx)=>{
            return(
                <S.InContent key={res.id}>
                <S.Data 
                 onClick={()=>startClick(res,idx)}
                 style={{backgroundColor:(num===idx?'#F9CF00':''),color:(num===idx?'white':'black'),border:(num===idx?'2px solid #F9CF00':'2px solid #DADADA')}}
                >
                    <p> {listName[idx]}</p>
                    {num===idx?<AiOutlineDownCircle  size={20}/>:<AiOutlineUpCircle onClick={()=>listData(res.id)} size={20}/>}

                </S.Data>
                    {num===idx?
                    <S.Route>
                        <S.Route2>
                        <p>{listName[idx]}</p>
                        <div>
                            <button onClick={()=>reSendPath()}>바로 경로 보기</button>
                            <button>경로 수정</button>
                            <button onClick={()=>deleteList(res.id)}>삭제</button>
                        </div>
                        </S.Route2>
                    </S.Route>
                         :''}
                </S.InContent>

            )
        })}        
            </S.Content>
        </S.Body>
        </S.Wapper>
    )
}

export default BookMark;