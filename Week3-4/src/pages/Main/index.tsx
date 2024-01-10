import ToolBar from "components/ToolBar";
import * as S from "./style";
import DrawingCanvas from "components/DrawingCanvas";
import { useEffect } from "react";
import ImageModal from "components/modal/ImageModal";
import { useAtomValue } from "jotai";
import {
  activatedObjectAtom,
  isShowImageModalAtom,
  isShowPreviewModalAtom,
} from "atoms";
import Feature from "components/Feature";
import PreviewModal from "components/modal/PreviewModal";

const Main = () => {
  const isShowImageModal: boolean = useAtomValue(isShowImageModalAtom);
  const isShowPreviewModal: boolean = useAtomValue(isShowPreviewModalAtom);

  const activatedObject = useAtomValue(activatedObjectAtom);
  useEffect(() => {
    console.log("activatedObjectsAtom 변경됨", activatedObject);
  }, [activatedObject]);

  return (
    <>
      {isShowImageModal ? <ImageModal /> : null}
      {isShowPreviewModal ? <PreviewModal /> : null}
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
