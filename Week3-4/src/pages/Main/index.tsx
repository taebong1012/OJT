import ToolBar from "components/ToolBar";
import * as S from "./style";
import DrawingCanvas, { deleteObject } from "components/DrawingCanvas";
import { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    /** main페이지에서 backspace 감지 시 객체 삭제 */
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Backspace") {
        deleteObject();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    /** TODO: 페이지에서 ctrl+G 눌렸을 시 객체들 그룹화 */

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
