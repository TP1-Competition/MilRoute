import * as S from './style';
import { FaLongArrowAltRight } from 'react-icons/fa';

const RouteInfo = ({ time, fare = '', distance, index, active, onClick }) => {
  const handleClick = () => {
    onClick(index);
  };

  return (
    <S.RouteSummary onClick={handleClick}>
      <S.RouteNumber active={active}>
        경로{index + 1} <FaLongArrowAltRight size={12} /> 경로{index + 2}
      </S.RouteNumber>
      <S.RouteInfo>
        <S.RouteTime active={active}>
          약 <span>{time}</span>분
        </S.RouteTime>
        <S.Hr />
        <S.RouteDistance>거리: {distance}km</S.RouteDistance>
        {fare !== '' && <S.Hr />}
        {fare !== '' && <S.RouteFare>요금: {fare}원</S.RouteFare>}
      </S.RouteInfo>
    </S.RouteSummary>
  );
};

export default RouteInfo;
