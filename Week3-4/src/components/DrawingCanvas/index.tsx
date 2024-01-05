import { useEffect } from "react";
import fabric from "controller/fabric";
import { activatedObjectTypeAtom } from "atoms";
import { useAtomValue, useSetAtom } from "jotai";

type selectedImageType = {
  path: string;
  imageId: string;
};

let drawingCanvas: fabric.Canvas;

/** fabric 캔버스 생성 */
const DrawingCanvas = () => {
  const setActivatedObjectType = useSetAtom(activatedObjectTypeAtom);

  /** 캔버스 내의 오브젝트가 선택됐을 시 작동할 함수 */
  const handleOnClickCanvasObject = () => {
    const activatedObjects = drawingCanvas.getActiveObjects();
    /** 여러 개 선택되어 있다면 */
    if (activatedObjects.length > 1) {
      setActivatedObjectType("group");
    } else {
      const activatedObject: fabric.Object = activatedObjects[0];
      /** 하나만 선택했다면 */
      /** 직선인지 */
      if (activatedObject instanceof fabric.Polyline) {
        setActivatedObjectType("line");
      } else if (activatedObject instanceof fabric.Image) {
        /** 이미지인지 */
        setActivatedObjectType("image");
      } else if (activatedObject instanceof fabric.Text) {
        setActivatedObjectType("text");
      } else {
        /** 삼각형 혹은 원형인지 */
        /** choice라는 name을 가지고 있다면 보기 상자 */
        if (activatedObject.name === "choice") {
          setActivatedObjectType("choice");
        } else {
          setActivatedObjectType("shape");
        }
      }
    }
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
    drawingCanvas.on("selection:cleared", () => {});

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
    });

    drawingCanvas.add(newText);

    drawingCanvas.setActiveObject(newText);
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

export const drawLine = () => {
  if (!drawingCanvas) {
    console.error("drawingCanvas does not exist");
  } else {
    console.log("직선 추가");

    const newLine = new fabric.Polyline(
      [
        { x: 50, y: 50 },
        { x: 250, y: 250 },
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
