import fabric from "controller/fabric";
import { useEffect } from "react";

const DrawingCanvas = () => {
  /** 마운트 되면 fabric 캔버스 생성
   * 언마운트 되면 fabric 캔버스 삭제 -> React.strinctMode 때문에 두개 생성 방지 */
  useEffect(() => {
    const canvas = new fabric.Canvas("drawing-canvas");
    canvas.setWidth(800);
    canvas.setHeight(500);

    return () => {
      canvas.dispose(); // 이전 캔버스 삭제
    };
  }, []);

  return <canvas id="drawing-canvas"></canvas>;
};

export default DrawingCanvas;
