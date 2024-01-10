import Drawer from "Instance/Drawer";
import { answerIdAtom, isShowPreviewModalAtom } from "atoms";
import * as S from "components/common/Header/style";
import { useAtomValue, useSetAtom } from "jotai";
const Header = () => {
  const setIsShowPreviewModal = useSetAtom(isShowPreviewModalAtom);
  const answerId = useAtomValue(answerIdAtom);

  const drawer = Drawer.getInstance();
  const saveCanvasData = () => {
    if (answerId) {
      const canvasDataJson = JSON.stringify(drawer.toData());
      localStorage.setItem("canvasData", canvasDataJson);
      localStorage.setItem("answerId", answerId);
      window.alert("저장되었습니다. [저장 완료]");
    } else {
      window.alert("설정된 정답이 없습니다. [저장 실패]");
    }
  };

  const showPreviewModal = () => {
    const canvasData = localStorage.getItem("canvasData");
    const answerId = localStorage.getItem("answerId");

    if (canvasData && answerId) {
      setIsShowPreviewModal(true);
    } else {
      window.alert("저장된 데이터가 없습니다. 저장 후 실행해주세요.");
    }
  };

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>LCMS</S.Title>
        <S.SubTitle>Learning Contents Management System</S.SubTitle>
      </S.TitleWrapper>
      <S.ButtonWrapper>
        <S.Button onClick={showPreviewModal}>Preview</S.Button>
        <S.Button onClick={saveCanvasData}>Save</S.Button>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default Header;
