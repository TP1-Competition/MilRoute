import PlaceOrder from '../../../component/MapInfo/PlaceOrder';
import BusRoute from '../../../component/MapInfo/BusRoute';
import * as S from '../style';

const PublicInfo = ({ data, onClick, active }) => {
  const start = data.start;
  const ways = data.wayPoints;
  const end = data.end;

  const placesName = [start, ...ways, end];

  const paths = data.paths;

  return (
    <S.RouteInfoWrppaer>
      <PlaceOrder data={placesName} />
      <S.RouteSeparator />
      <div>
        {paths.map((path, index) => (
          <BusRoute
            key={index}
            data={path}
            index={index}
            active={active === index ? 'true' : 'false'}
            onClick={onClick}
          />
        ))}
      </div>
      <S.Odsay>
        <p>powered by www.ODsay.com</p>
      </S.Odsay>
    </S.RouteInfoWrppaer>
  );
};

export default PublicInfo;
