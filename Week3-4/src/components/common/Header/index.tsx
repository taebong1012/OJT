import * as S from "components/common/Header/style";
const Header = () => {
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>LCMS</S.Title>
        <S.SubTitle>Learning Contents Management System</S.SubTitle>
      </S.TitleWrapper>
      <S.ButtonWrapper>
        <S.Button>Preview</S.Button>
        <S.Button>Save</S.Button>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default Header;
