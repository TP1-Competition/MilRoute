import styled from 'styled-components';

export const ShortRouteContainer = styled.div`
  /* padding: 2%; */
`;

// 헤더부터 지도까지

export const TopWrapper = styled.div`
  padding-top: 2%;
  padding-right: 2%;
  padding-left: 2%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 2%;

  h2 {
    width: 50%;
    font-weight: 700;
    line-height: normal;
    font-size: 120%;
    margin-left: 15%;

    @media (max-width: 535px) {
      margin-left: 10%;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${({ theme }) => theme.palette.mainyellow};
    background-color: #fff;
    border: 1.5px solid ${({ theme }) => theme.palette.whitegray};
    border-radius: 5px;
    font-weight: 800;
    text-align: center;
    font-size: 0.8rem;
    width: 30%;
    height: 2rem;
    /* 
    margin-left: 20%; */

    span {
      margin-left: 2%;
    }

    @media (max-width: 535px) {
      width: 40%;
    }
  }
`;

export const ArrowWrapper = styled.div`
  width: 25%;
  height: 2.5rem;

  display: flex;
  align-items: center;
`;

// 자동차, 대중교통 카테고리 선택
export const CategoryWrapper = styled.div`
  display: flex;
  width: 100%;

  :nth-child(1) {
    flex-grow: 1;
  }
  :nth-child(2) {
    flex-grow: 1;
  }

  button {
    height: 2rem;

    font-weight: 600;

    border: 1px solid ${({ theme }) => theme.palette.brightgray};
    background-color: white;
    color: ${({ theme }) => theme.palette.brightgray};
    border-radius: 3px;

    &.active {
      border: 1px solid ${({ theme }) => theme.palette.mainyellow};
      background-color: ${({ theme }) => theme.palette.mainyellow};
      color: ${({ theme }) => theme.palette.black};
    }
  }
`;

// 지도
export const MapWrapper = styled.div`
  width: 100%;
  height: 30rem;
`;

// 가장 맨 위 장소요약 - 해당 경로 정보
export const InfoWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.palette.whitegray};
`;

// --------------------------------
// CarInfo
export const RouteSeparator = styled.div`
  border-top: 1px solid ${({ theme }) => theme.palette.whitegray};
`;
// PublicInfo
// 가장 맨 위 장소요약

export const RouteInfoWrppaer = styled.span`
  border-bottom: 1px solid ${({ theme }) => theme.palette.whitegray};
`;

export const Odsay = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;

  width: 100%;

  p {
    width: 50%;
    font-size: 10px;
  }
`;
