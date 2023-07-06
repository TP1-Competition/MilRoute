import { useLocation } from 'react-router';
import * as S from './style';
import {BsArrowLeft} from 'react-icons/bs';
import {AiOutlineUpCircle,AiOutlineDownCircle} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../css/alert.css';

const swal = withReactContent(Swal);

const BookMark = ()=>{
    const navigate = useNavigate();
    let lala = [{id:1, route:'루트1'},{id:2, route:'루트2'},{id:3, route:'루트3'},{id:4, route:'루트4'}]
    const [num,setNum] = useState(-1);

    const startClick=(res,idx)=>{
        // setStart(res)
        setNum(idx)
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
                
                
            {lala.map((res,idx)=>{
            return(
                <S.InContent key={res.id}>
                <S.Data 
                 onClick={()=>startClick(res,idx)}
                 style={{backgroundColor:(num===idx?'#F9CF00':''),color:(num===idx?'white':'black'),border:(num===idx?'2px solid #F9CF00':'2px solid #DADADA')}}
                >
                    <p> {res.route}</p>
                    {num===idx?<AiOutlineDownCircle size={20}/>:<AiOutlineUpCircle size={20}/>}

                </S.Data>
                    {num===idx?
                    <S.Route>
                        <S.Route2>
                        <p>{res.route}</p>
                        <div>
                            <button>바로 경로 보기</button>
                            <button>경로 수정</button>
                            <button>삭제</button>
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