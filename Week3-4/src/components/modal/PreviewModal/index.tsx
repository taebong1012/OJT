import ModalPortal from "components/modal/modalPortal";
import * as S from "./style";
import { RxCross1 } from "react-icons/rx";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { isShowPreviewModalAtom } from "atoms";
import Previewer from "Instance/Previewer";

const PreviewContents = () => {
  const setIsShowPreviewModal = useSetAtom(isShowPreviewModalAtom);

  const previewer = Previewer.getInstance();

  useEffect(() => {
    const canvasElement = document.getElementById(
      "preview-canvas"
    ) as HTMLCanvasElement;
    previewer.injectCanvas(canvasElement);

    if (previewer.canvas) {
      previewer.canvas.backgroundColor = "white";
      previewer.canvas.setDimensions({ width: 800, height: 600 });
      previewer.canvas.selection = false;
    }

    return () => {
      if (previewer.canvas) {
        previewer.canvas.dispose();
      }
    };
  }, []);

  return (
    <S.Backdrop>
      <S.Container>
        <S.TitleWrapper>
          <S.Title>Preview</S.Title>
          <button
            onClick={() => {
              setIsShowPreviewModal(false);
            }}
          >
            <RxCross1 />
          </button>
        </S.TitleWrapper>
        <canvas id="preview-canvas"></canvas>
      </S.Container>
    </S.Backdrop>
  );
};

const PreviewModal = () => {
  return (
    <ModalPortal>
      <PreviewContents />
    </ModalPortal>
  );
};

export default PreviewModal;
