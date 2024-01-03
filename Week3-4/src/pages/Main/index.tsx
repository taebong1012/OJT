import ToolBar from "components/ToolBar";
import * as S from "./style";
import DrawingCanvas from "components/DrawingCanvas";

const Main = () => {

  return (
    <div>
      <ToolBar />
      <S.Container>
        <S.CanvasWrapper>
          <DrawingCanvas />
        </S.CanvasWrapper>
        <S.FeatureWrapper></S.FeatureWrapper>
      </S.Container>
    </div>
  );
};

export default Main;
