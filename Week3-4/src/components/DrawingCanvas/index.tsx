import { useEffect } from "react";
import fabric from "controller/fabric";

type selectedImageType = {
  path: string;
  imageId: string;
};

let drawingCanvas: fabric.Canvas;

/** fabric 캔버스 생성 */
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

/** 키보드 backspace 입력 시 활성화된 객체 삭제 */
export const deleteObject = () => {
  if (!drawingCanvas) {
    console.error("drawingCanvas does not exist");
  } else {
    console.log("오브젝트 삭제");

    const selectedObjects: fabric.Object[] = drawingCanvas.getActiveObjects();

    selectedObjects.forEach((obj: fabric.Object) => {
      drawingCanvas.remove(obj);
    });

    drawingCanvas.discardActiveObject();
    drawingCanvas.requestRenderAll();
  }
};

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
      top: 50,
      left: 50,
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

export const drawLine = () => {
  if (!drawingCanvas) {
    console.error("drawingCanvas does not exist");
  } else {
    console.log("직선 추가");

    const newLine = new fabric.Line([50, 100, 200, 200], {
      top: 50,
      left: 50,
      stroke: "black",
      strokeWidth: 1,
    });

    drawingCanvas.add(newLine);

    /** 활성화 시키기 */
    drawingCanvas.setActiveObject(newLine);
    drawingCanvas.requestRenderAll();
  }
};

export const addImg = (selectedImages: selectedImageType[]) => {
  if (!drawingCanvas) {
    console.error("drawingCanvas does not exist");
  } else {
    console.log("이미지들 추가");

    selectedImages.forEach((selectedImage, index) => {
      fabric.Image.fromURL(selectedImage.path, (img) => {
        img.scaleToWidth(100);
        img.scaleToHeight(100);
        img.set({
          left: 50 + index * 30,
          top: 50 + index * 30,
        });

        drawingCanvas.add(img);
        drawingCanvas.setActiveObject(img);
        drawingCanvas.requestRenderAll();
      });
    });
  }
};
