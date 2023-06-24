import * as S from './style';

const CustomCheckBox = ({ children }) => {
  return (
    <S.TagWrapper>
      <input type='checkbox' id='tagInput' />
      <S.TagLabel htmlFor='tagInput'>{children}</S.TagLabel>
    </S.TagWrapper>
  );
};

export default CustomCheckBox;
