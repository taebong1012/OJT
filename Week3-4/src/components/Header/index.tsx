import * as S from "components/Header/style";
import { MdOutlinePreview, MdOutlineSave } from "react-icons/md";

const Header = () => {
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>LCMS</S.Title>
        <S.SubTitle>Learning Contents Management System</S.SubTitle>
      </S.TitleWrapper>
      <S.ButtonWrapper>
        <S.Button>
          <MdOutlinePreview size="40" />
        </S.Button>
        <S.Button>
          <MdOutlineSave size="40" />
        </S.Button>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default Header;
