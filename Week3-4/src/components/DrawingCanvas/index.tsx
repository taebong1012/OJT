import { useEffect } from "react";
import fabric from "controller/fabric";
import { useAtom } from "jotai";
import { activatedObjectsAtom } from "atoms";

type selectedImageType = {
  path: string;
  imageId: string;
};

let drawingCanvas: fabric.Canvas;

/** fabric 캔버스 생성 */
const DrawingCanvas = () => {
  const [activatedObjects, setActivatedObjects] = useAtom(activatedObjectsAtom);

  /** 캔버스 내의 오브젝트가 선택됐을 시 작동할 함수 */
  const handleOnClickCanvasObject = () => {
    const newActivatedObjects: fabric.Object[] =
      drawingCanvas.getActiveObjects();
    setActivatedObjects(newActivatedObjects);
  };

  useEffect(() => {
    drawingCanvas = new fabric.Canvas("drawing-canvas", {
      width: 800,
      height: 500,
      backgroundColor: "white",
    });

    /** 캔버스 객체 선택 발생 이벤트 */
    drawingCanvas.on("selection:created", handleOnClickCanvasObject);

    /** 캔버스 선택 객체 변경 이벤트 */
    drawingCanvas.on("selection:updated", handleOnClickCanvasObject);

    /** 캔버스 선택 객체 해제 이벤트 */
    drawingCanvas.on("selection:cleared", () => {
      setActivatedObjects([]);
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

/** 보기 상자 추가 */
export const addChoice = () => {
  if (!drawingCanvas) {
    console.error("drawingCanvas does not exist");
  } else {
    console.log("보기 상자 추가");

    const newRect = new fabric.Rect({
      top: 200,
      left: 350,
      width: 100,
      height: 100,
      fill: "white",
      stroke: "#D0D0D0",
      strokeUniform: true,
      strokeWidth: 2,
      rx: 10,
      ry: 10,
      name: "choice",
    });

    const shadow = new fabric.Shadow({
      color: "rgba(0,0,0,0.15)",
      offsetX: 0,
      offsetY: 0,
      blur: 10,
    });

    newRect.set("shadow", shadow);

    drawingCanvas.add(newRect);

    drawingCanvas.setActiveObject(newRect);
    drawingCanvas.requestRenderAll();
  }
};

/** 텍스트 추가 */
export const addText = () => {
  if (!drawingCanvas) {
    console.error("drawingCanvas does not exist");
  } else {
    const newText = new fabric.IText("Text", {
      top: 200,
      left: 350,
      fill: "black",
      fontFamily: "Helvetica",
      backgroundColor: "transparent",
    });

    drawingCanvas.add(newText);

    drawingCanvas.setActiveObject(newText);
    drawingCanvas.requestRenderAll();

    console.log(newText);
  }
};

/** 캔버스에 사각형 추가 */
export const drawRect = () => {
  if (!drawingCanvas) {
    console.error("drawingCanvas does not exist");
  } else {
    console.log("사각형 추가");

    const newRect = new fabric.Rect({
      top: 50,
      left: 50,
      width: 100,
      height: 100,
      fill: "white",
      stroke: "black",
      strokeUniform: true,
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
      fill: "white",
      stroke: "black",
      strokeUniform: true,
      strokeWidth: 1,
    });

    drawingCanvas.add(newCircle);

    /** 활성화 시키기 */
    drawingCanvas.setActiveObject(newCircle);
    drawingCanvas.requestRenderAll();
  }
};

/** 캔버스에 선 추가 */
export const drawLine = () => {
  if (!drawingCanvas) {
    console.error("drawingCanvas does not exist");
  } else {
    console.log("직선 추가");

    const newLine = new fabric.Polyline(
      [
        { x: 50, y: 50 },
        { x: 150, y: 150 },
      ],
      {
        stroke: "black",
        strokeWidth: 1,
        strokeUniform: true,
      }
    );

    drawingCanvas.add(newLine);

    /** 활성화 시키기 */
    drawingCanvas.setActiveObject(newLine);
    drawingCanvas.requestRenderAll();
  }
};

/** 캔버스에 이미지 추가 */
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

/** 현재 선택된 도형의 배경 색 변경 */
export const changeFill = (color: string) => {
  const selectedObject = drawingCanvas.getActiveObject() as fabric.Object;
  if (
    selectedObject &&
    (selectedObject instanceof fabric.Rect ||
      selectedObject instanceof fabric.Circle ||
      selectedObject instanceof fabric.IText)
  ) {
    drawingCanvas.getActiveObject()!.set("fill", color);
    drawingCanvas.requestRenderAll();
  }
};

/** 현재 선택된 도형의 테두리 색 변경 */
export const changeStrokeColor = (color: string) => {
  const selectedObject = drawingCanvas.getActiveObject() as fabric.Object;
  if (
    selectedObject &&
    (selectedObject instanceof fabric.Rect ||
      selectedObject instanceof fabric.Circle)
  ) {
    drawingCanvas.getActiveObject()!.set("stroke", color);
    drawingCanvas.requestRenderAll();
  }
};

/** 현재 선택된 도형의 테두리 굵기 변경 */
export const changeStrokeWidth = (width: number) => {
  const selectedObject = drawingCanvas.getActiveObject() as fabric.Object;
  if (
    selectedObject &&
    (selectedObject instanceof fabric.Rect ||
      selectedObject instanceof fabric.Circle)
  ) {
    drawingCanvas.getActiveObject()!.set("strokeWidth", width);
    drawingCanvas.requestRenderAll();
  }
};

/** 현재 선택된 도형의 테두리 스타일 변경 */
export const changeStokeStyle = (dashArray: Array<number>) => {
  console.log(dashArray);
  const selectedObject = drawingCanvas.getActiveObject() as fabric.Object;
  if (
    selectedObject &&
    (selectedObject instanceof fabric.Rect ||
      selectedObject instanceof fabric.Circle)
  ) {
    drawingCanvas.getActiveObject()!.set("strokeDashArray", dashArray);
    drawingCanvas.requestRenderAll();
  }
};

/** 현재 선택된 텍스트의 폰트 스타일 변경 */
export const changeFontFamily = (fontFamily: string) => {
  const selectedObject = drawingCanvas.getActiveObject() as fabric.Object;
  if (selectedObject && selectedObject instanceof fabric.IText) {
    const textObject = selectedObject as fabric.IText;
    textObject.set("fontFamily", fontFamily);

    drawingCanvas.requestRenderAll();
  }
};

/** 현재 선택된 텍스트의 폰트 크기 변경 */
export const changeFontSize = (fontSize: number) => {
  if (drawingCanvas) {
    const selectedObject = drawingCanvas.getActiveObject() as fabric.Object;
    if (selectedObject && selectedObject instanceof fabric.IText) {
      const textObject = selectedObject as fabric.IText;
      textObject.set("fontSize", fontSize);

      drawingCanvas.requestRenderAll();
    }
  }
};

/** 현재 선택된 텍스트의 배경 색 변경 */
export const changeFontBackground = (color: string) => {
  const selectedObject = drawingCanvas.getActiveObject() as fabric.Object;
  if (selectedObject && selectedObject instanceof fabric.IText) {
    const textObject = selectedObject as fabric.IText;
    textObject.set("backgroundColor", color);

    drawingCanvas.requestRenderAll();
  }
};
