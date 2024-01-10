import ToolBar from "components/ToolBar";
import * as S from "./style";
import DrawingCanvas from "components/DrawingCanvas";
import ImageModal from "components/modal/ImageModal";
import { useAtomValue } from "jotai";
import { isShowImageModalAtom, isShowPreviewModalAtom } from "atoms";
import Feature from "components/Feature";
import PreviewModal from "components/modal/PreviewModal";

const Main = () => {
  const isShowImageModal: boolean = useAtomValue(isShowImageModalAtom);
  const isShowPreviewModal: boolean = useAtomValue(isShowPreviewModalAtom);

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
