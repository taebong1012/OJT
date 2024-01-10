import ToolBar from "components/ToolBar";
import * as S from "./style";
import DrawingCanvas from "components/DrawingCanvas";
import { useEffect } from "react";
import ImageModal from "components/modal/ImageModal";
import { useAtomValue } from "jotai";
import { activatedObjectAtom, isShowImageModalAtom } from "atoms";
import Feature from "components/Feature";

const Main = () => {
  const isShowImageModal: boolean = useAtomValue(isShowImageModalAtom);

  const activatedObject = useAtomValue(activatedObjectAtom);
  useEffect(() => {
    console.log("activatedObjectsAtom 변경됨", activatedObject);
  }, [activatedObject]);

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
