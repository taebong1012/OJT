import ToolBar from "components/ToolBar";
import * as S from "./style";
import fabric from "controller/fabric";
import { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    const canvas = new fabric.Canvas("drawing-canvas");
    return () => {
      canvas.dispose(); // 이전 캔버스 삭제
    };
  }, []);

  return (
    <div>
      <ToolBar />
      <S.Container>
        <S.CanvasWrapper>
          <canvas id="drawing-canvas" width={800} height={500}></canvas>
        </S.CanvasWrapper>
        <S.FeatureWrapper></S.FeatureWrapper>
      </S.Container>
    </div>
  );
};

export default Main;
