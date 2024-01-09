import ToolBar from "components/ToolBar";
import * as S from "./style";
import DrawingCanvas, { deleteObject } from "components/DrawingCanvas";
import { useEffect } from "react";
import ImageModal from "components/modal/ImageModal";
import { useAtomValue } from "jotai";
import { activatedObjectsAtom, isShowImageModalAtom } from "atoms";
import Feature from "components/Feature";

const Main = () => {
  const isShowImageModal: boolean = useAtomValue(isShowImageModalAtom);

  /** main페이지에서 backspace 감지 시 객체 삭제 */
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Backspace") {
      deleteObject();
    }
  };

  const activatedObjects = useAtomValue(activatedObjectsAtom);
  useEffect(() => {
    console.log("activatedObjects", activatedObjects);
  }, [activatedObjects]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    /** TODO: 페이지에서 ctrl+G 눌렸을 시 객체들 그룹화 */

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {isShowImageModal ? <ImageModal /> : null}
      <ToolBar />
      <S.Container>
        <S.CanvasWrapper>
          <DrawingCanvas />
        </S.CanvasWrapper>
        <S.FeatureWrapper>
          <Feature />
        </S.FeatureWrapper>
      </S.Container>
    </>
  );
};

export default Main;
