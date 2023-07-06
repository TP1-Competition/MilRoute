import PlaceOrder from '../../../component/MapInfo/PlaceOrder';
import CarRoute from '../../../component/MapInfo/CarRoute';

import * as S from '../style';

const CarInfo = ({ data, onClick, active }) => {
  const sections = data.sections;

  const startPlaceName = data.summary.origin.name;
  const endPlaceName = data.summary.destination.name;
  const waypointsName = data.summary.waypoints.map((point) => point.name);

  const placeName = [startPlaceName, ...waypointsName, endPlaceName];

  return (
    <S.RouteInfoWrppaer>
      <PlaceOrder data={placeName} />
      <S.RouteSeparator />
      <div>
        {sections.map((section, index) => (
          <CarRoute
            key={index}
            data={section}
            index={index}
            active={active === index ? 'true' : 'false'}
            onClick={onClick}
          />
        ))}
      </div>
    </S.RouteInfoWrppaer>
  );
};

export default CarInfo;
