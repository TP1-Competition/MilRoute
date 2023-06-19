import * as S from './style';
import {BsFillCaretDownFill} from 'react-icons/bs'

const MainPage=()=>{
    const place=[
            {
                img:'../Img/hotplace.jpg',
                title:'lamon', 
            },
            {
                img:'../Img/hotplace.jpg',
                title:'lamon2', 
            }
        ]

    const hotPlace=()=>{
        return(
            <>
            {place.map((el,idx)=>{
                return(
                    <div key={idx}>
                    <img src={el.img} alt={el.title} />
                    <p>{el.title}</p>
                    </div>
                )
            })}
            </>
        )
    }
    return(
            <S.MainPageContainer>
                <S.MainWrapper>
                <S.MainImg>
                    mainImg
                </S.MainImg>
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