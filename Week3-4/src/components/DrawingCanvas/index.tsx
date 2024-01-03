import { useEffect } from "react";
import fabric from "controller/fabric";

let drawingCanvas: fabric.Canvas;

const DrawingCanvas = () => {
  useEffect(() => {
    drawingCanvas = new fabric.Canvas("drawing-canvas", {
      width: 800,
      height: 500,
      backgroundColor: "white",
    });

    return () => {
      if (drawingCanvas) {
        drawingCanvas.dispose();
      }
    };
  }, []);

  return <canvas id="drawing-canvas" />;
};

export default DrawingCanvas;

/** 캔버스에 사각형 추가 */
export const drawRect = () => {
  if (!drawingCanvas) {
    console.error("drawingCanvas does not exist");
  } else {
    console.log("사각형 추가");

    const newRect = new fabric.Rect({
      top: 200,
      left: 350,
      width: 100,
      height: 100,
      fill: "transparent",
      stroke: "black",
      strokeWidth: 1,
    });

    drawingCanvas.add(newRect);

    drawingCanvas.setActiveObject(newRect);
    drawingCanvas.requestRenderAll();
  }
};

/** 캔버스에 원 추가 */
export const drawCircle = () => {
  if (!drawingCanvas) {
    console.error("drawingCanvas does not exist");
  } else {
    console.log("원 추가");

    const newCircle = new fabric.Circle({
      top: 200,
      left: 350,
      radius: 50,
      fill: "transparent",
      stroke: "black",
      strokeWidth: 1,
    });

    drawingCanvas.add(newCircle);

    /** 활성화 시키기 */
    drawingCanvas.setActiveObject(newCircle);
    drawingCanvas.requestRenderAll();
  }
};
