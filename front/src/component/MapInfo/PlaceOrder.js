import { FaLongArrowAltRight } from 'react-icons/fa';
import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
  TbCircleNumber4,
  TbCircleNumber5,
} from 'react-icons/tb';

import * as S from './style';

const numberIcons = [
  <TbCircleNumber1 size={13} />,
  <TbCircleNumber2 size={13} />,
  <TbCircleNumber3 size={13} />,
  <TbCircleNumber4 size={13} />,
  <TbCircleNumber5 size={13} />,
];

const PlaceOrder = ({ data }) => {
  return (
    <S.PlacesSummary>
      {data.map((place, index) => (
        <S.PlaceSummary key={index}>
          {index > 0 && <FaLongArrowAltRight size={13} />}

          {numberIcons[index]}
          {place}
        </S.PlaceSummary>
      ))}
    </S.PlacesSummary>
  );
};

export default PlaceOrder;
