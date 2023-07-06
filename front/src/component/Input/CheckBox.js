import * as S from './style';

const CustomCheckBox = ({ children, defaultChecked, onClick }) => {
  const handleInputChange = (event) => {
    onClick(event.target.checked);
  };

  return (
    <S.TagWrapper>
      <input
        type='checkbox'
        id='tagInput'
        checked={defaultChecked}
        onChange={handleInputChange}
      />
      <S.TagLabel htmlFor='tagInput'>{children}</S.TagLabel>
    </S.TagWrapper>
  );
};

export default CustomCheckBox;
