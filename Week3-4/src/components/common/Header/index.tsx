import { isShowPreviewModalAtom } from "atoms";
import * as S from "components/common/Header/style";
import { useSetAtom } from "jotai";
const Header = () => {
  const setIsShowPreviewModal = useSetAtom(isShowPreviewModalAtom);

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>LCMS</S.Title>
        <S.SubTitle>Learning Contents Management System</S.SubTitle>
      </S.TitleWrapper>
      <S.ButtonWrapper>
        <S.Button
          onClick={() => {
            setIsShowPreviewModal(true);
          }}
        >
          Preview
        </S.Button>
        <S.Button>Save</S.Button>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default Header;
