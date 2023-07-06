import styled, { css } from 'styled-components';
// PlaceOrder
export const PlacesSummary = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;

  font-size: 80%;
  text-align: center;
`;

export const PlaceSummary = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 40%;

  margin: 0.3rem;

  svg {
    margin-right: 0.3rem;
  }
`;

// Route

export const RouteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.palette.whitegray};
`;

export const RouteSummary = styled.div`
  display: flex;
  justify-content: space-between;

  width: 80%;
  padding: 3%;
`;

// 경로 몇번  -> 경로 몇번
export const RouteNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30%;
  height: 1.5rem;
  border-radius: 10px;

  font-weight: 600;
  text-align: center;
  font-size: 70%;

  background-color: ${({ theme }) => theme.palette.whitegray};
  color: ${({ theme }) => theme.palette.brightgray};
  border: 1px solid ${({ theme }) => theme.palette.brightgray};

  svg {
    margin-left: 0.3rem;
    margin-right: 0.3rem;
  }

  ${({ active, theme }) =>
    active === 'true' &&
    css`
      background-color: ${theme.palette.mainyellow};
      color: ${theme.palette.black};
      border: 1px solid ${theme.palette.mainyellow};
    `}
`;

/* 시간, 요금, 거리 */

export const RouteInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 70%;
  margin-left: 1rem;

  font-weight: 500;
  font-size: 70%;
  text-align: center;
`;

export const Hr = styled.hr`
  border: 0.2px solid black;
  height: 50%;
`;

export const RouteTime = styled.div`
  width: 40%;

  span {
    ${({ active, theme }) =>
      active === 'true' &&
      css`
        font-size: 130%;
        font-weight: 700;
        color: ${theme.palette.mainyellow};
      `}
  }
`;

export const RouteDistance = styled.div`
  width: 50%;
`;

export const RouteFare = styled.div`
  padding-left: 3%;
  width: 55%;
`;

/* 상세 경로 */
export const RouteDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

/* 경로 버스 그림 */
export const RouteBusInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  width: 85%;

  font-size: 70%;
`;

export const SubPath = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin-top: 3%;
  margin-bottom: 1%;
  padding-top: 2%;
  border-top: 1px solid ${({ theme }) => theme.palette.whitegray};

  width: 85%;
`;

export const BusStop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const TrafficName = styled.div`
  display: flex;
  align-items: center;

  margin-right: 0.3rem;
  span {
    flex-grow: 1;
    width: 80%;
    white-space: nowrap;
  }

  svg {
    color: ${({ theme }) => theme.palette.mainyellow};
    margin-right: 4%;
  }
`;

/* 버스 번호 사이에 점선 */
export const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const DotSeparator = styled.span`
  border: none;
  border-top: 2px dotted ${({ theme }) => theme.palette.black};

  height: 1px;
  width: 100%;
`;

/* 버스 정류장 이름 */
export const BusStopInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 93%;

  div {
    display: flex;
    align-items: center;
    white-space: nowrap;

    span {
      margin-left: 2%;
      padding: 3%;
      background-color: ${({ theme }) => theme.palette.mainyellow};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.palette.black};
      width: 40%;
      height: 1rem;
      font-weight: 700;
    }
  }
`;
