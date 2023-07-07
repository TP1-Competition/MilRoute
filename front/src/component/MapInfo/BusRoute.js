import * as S from './style';
import RouteInfo from './RouteInfo';
import StationInfo from './StationInfo';

const BusRoute = ({ data, index, active, onClick }) => {
  const time = data.time;
  const distance = (data.distance / 1000).toFixed(2);
  const fare = data.fare.toLocaleString();
  const stationPaths = data.subPaths;

  return (
    <S.RouteContainer>
      <RouteInfo
        time={time}
        fare={fare}
        distance={distance}
        index={index}
        onClick={onClick}
        active={active}
      />
      <StationInfo data={stationPaths} active={active} />
    </S.RouteContainer>
  );
};

export default BusRoute;
