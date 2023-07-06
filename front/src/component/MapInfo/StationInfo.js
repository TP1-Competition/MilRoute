import * as S from './style';
import { FaBus, FaSubway } from 'react-icons/fa';
import { AiOutlineRight } from 'react-icons/ai';

const StationInfo = ({ data, active }) => {
  const dataLength = data.length;

  return (
    active === 'true' && (
      <S.RouteDetail>
        <S.RouteBusInfo>
          {data.map((subPath, index) => (
            <S.SubPath key={index}>
              <S.BusStop key={index}>
                <S.TrafficName>
                  {subPath.pathType === '지하철' ? (
                    <FaSubway size={16} />
                  ) : (
                    <FaBus size={16} />
                  )}
                  <span>{subPath.name}</span>
                </S.TrafficName>
                <S.ArrowWrapper>
                  <S.DotSeparator />
                  <AiOutlineRight size={10} />
                </S.ArrowWrapper>
                <S.TrafficName>
                  {subPath.pathType === '지하철' ? (
                    <FaSubway size={16} />
                  ) : (
                    <FaBus size={16} />
                  )}
                  <span>{subPath.name}</span>
                </S.TrafficName>
              </S.BusStop>
              <S.BusStopInfo>
                <div>
                  {dataLength > 1 && index > 0 && <span>환승</span>}
                  {subPath.startStation}
                </div>
                <div>
                  {dataLength > 1 && index !== dataLength - 1 && (
                    <span>환승</span>
                  )}
                  {subPath.endStation}
                </div>
              </S.BusStopInfo>
            </S.SubPath>
          ))}
        </S.RouteBusInfo>
      </S.RouteDetail>
    )
  );
};

export default StationInfo;
