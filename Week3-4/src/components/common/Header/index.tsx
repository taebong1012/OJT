import * as S from "components/common/Header/style";
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
          <MdOutlinePreview style={{ width: "40px", height: "40px" }} />
        </S.Button>
        <S.Button>
          <MdOutlineSave style={{ width: "40px", height: "40px" }} />
        </S.Button>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default Header;
