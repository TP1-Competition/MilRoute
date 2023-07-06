import * as S from './style';
import RouteInfo from './RouteInfo';

const CarRoute = ({ data, index, active, onClick }) => {
  const time = Math.floor(data.duration / 60);
  const distance = data.distance / 1000;

  return (
    <S.RouteContainer>
      <RouteInfo
        time={time}
        distance={distance}
        index={index}
        onClick={onClick}
        active={active}
      />
    </S.RouteContainer>
  );
};

export default CarRoute;
