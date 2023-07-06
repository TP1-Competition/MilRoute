import * as S from './style';

const CustomCheckBox = ({ children, defaultChecked, onClick, category }) => {
  return (
    <S.TagWrapper>
      <input
        type='checkbox'
        id={category}
        checked={defaultChecked}
        onChange={onClick}
      />
      <S.TagLabel htmlFor={category}>{children}</S.TagLabel>
    </S.TagWrapper>
  );
};

export default CustomCheckBox;
