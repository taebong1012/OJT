import { useEffect } from "react";
import fabric from "controller/fabric";
import { useAtom } from "jotai";
import { activatedObjectAtom } from "atoms";
import Controller from "controller/core";

type selectedImageType = {
  path: string;
  imageId: string;
};

/** 커스텀 fabric 인스턴스 */
const controller = new Controller();

/** fabric 캔버스 생성 */
const DrawingCanvas = () => {
  const [activatedObject, setActivatedObject] = useAtom(activatedObjectAtom);

  /** 캔버스 내의 오브젝트가 선택됐을 시 작동할 함수 */
  const handleOnClickCanvasObject = () => {
    const newActivatedObject: fabric.Object | null =
      controller.canvas!.getActiveObject();
    if (newActivatedObject !== null) {
      setActivatedObject(newActivatedObject as fabric.Object);
    }
  };

  useEffect(() => {
    const canvasElement = document.getElementById(
      "drawing-canvas"
    ) as HTMLCanvasElement;

    /** 캔버스 생성 */
    controller.injectCanvas(canvasElement);

    if (controller.canvas) {
      controller.canvas.backgroundColor = "white";
      controller.canvas.setDimensions({ width: 800, height: 600 });

      /** 캔버스 객체 선택 발생 이벤트 */
      controller.canvas.on("selection:created", handleOnClickCanvasObject);

      /** 캔버스 선택 객체 변경 이벤트 */
      controller.canvas.on("selection:updated", handleOnClickCanvasObject);

      /** 캔버스 선택 객체 해제 이벤트 */
      controller.canvas.on("selection:cleared", () => {
        setActivatedObject(null);
      });
    }

    return () => {
      if (controller.canvas) {
        controller.canvas.dispose();
      }
    };
  }, []);

  return <canvas id="drawing-canvas" />;
};

export default DrawingCanvas;

/** 키보드 backspace 입력 시 활성화된 객체 삭제 */
export const deleteObject = () => {
  if (!controller.canvas) {
    console.error("drawingCanvas does not exist");
  } else {
    console.log("오브젝트 삭제");

    const selectedObjects: fabric.Object[] =
      controller.canvas.getActiveObjects();

    selectedObjects.forEach((obj: fabric.Object) => {
      controller.canvas!.remove(obj);
    });

    controller.canvas.discardActiveObject();
    controller.canvas.requestRenderAll();
  }
};

/** 보기 상자 추가 */
export const addChoice = () => {
  if (!controller.canvas) {
    console.error("controller.canvas does not exist");
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

    controller.add(newRect);

    controller.canvas.setActiveObject(newRect);
    controller.canvas.requestRenderAll();
  }
};

/** 텍스트 추가 */
export const addText = () => {
  if (!controller.canvas) {
    console.error("controller.canvas does not exist");
  } else {
    const newText = new fabric.IText("Text", {
      top: 200,
      left: 350,
      fill: "black",
      fontFamily: "Helvetica",
      backgroundColor: "transparent",
    });

    controller.add(newText);

    controller.canvas.setActiveObject(newText);
    controller.canvas.requestRenderAll();

    console.log(newText);
  }
};

/** 캔버스에 사각형 추가 */
export const drawRect = () => {
  if (!controller.canvas) {
    console.error("controller.canvas does not exist");
  } else {
    const newRect = new fabric.Rect({
      top: 100,
      left: 100,
      width: 100,
      height: 100,
      fill: "white",
      stroke: "black",
      strokeUniform: true,
      strokeWidth: 1,
      originX: "center",
      originY: "center",
    });

    controller.add(newRect);

    controller.canvas.setActiveObject(newRect);
    controller.canvas.requestRenderAll();
  }
};

/** 캔버스에 원 추가 */
export const drawCircle = () => {
  if (!controller.canvas) {
    console.error("controller.canvas does not exist");
  } else {
    console.log("원 추가");

    const newCircle = new fabric.Circle({
      top: 100,
      left: 100,
      radius: 50,
      fill: "white",
      stroke: "black",
      strokeUniform: true,
      strokeWidth: 1,
      originX: "center",
      originY: "center",
    });

    controller.add(newCircle);

    /** 활성화 시키기 */
    controller.canvas!.setActiveObject(newCircle);
    controller.canvas!.requestRenderAll();
  }
};

/** 캔버스에 선 추가 */
export const drawLine = () => {
  if (!controller.canvas) {
    console.error("controller.canvas! does not exist");
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

    controller.add(newLine);

    /** 활성화 시키기 */
    controller.canvas!.setActiveObject(newLine);
    controller.canvas!.requestRenderAll();
  }
};

/** 캔버스에 이미지 추가 */
export const addImg = (selectedImages: selectedImageType[]) => {
  if (!controller.canvas) {
    console.error("controller.canvas does not exist");
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

        controller.add(img);
        controller.canvas!.setActiveObject(img);
        controller.canvas!.requestRenderAll();
      });
    });
  }
};

/** 현재 선택된 도형의 배경 색 변경 */
export const changeFill = (color: string) => {
  const selectedObject = controller.canvas!.getActiveObject() as fabric.Object;
  if (
    selectedObject &&
    (selectedObject instanceof fabric.Rect ||
      selectedObject instanceof fabric.Circle ||
      selectedObject instanceof fabric.IText)
  ) {
    controller.canvas!.getActiveObject()!.set("fill", color);
    controller.canvas!.requestRenderAll();
  }
};

/** 현재 선택된 도형의 테두리 색 변경 */
export const changeStrokeColor = (color: string) => {
  const selectedObject = controller.canvas!.getActiveObject() as fabric.Object;
  if (
    selectedObject &&
    (selectedObject instanceof fabric.Rect ||
      selectedObject instanceof fabric.Circle)
  ) {
    controller.canvas!.getActiveObject()!.set("stroke", color);
    controller.canvas!.requestRenderAll();
  }
};

/** 현재 선택된 도형의 테두리 굵기 변경 */
export const changeStrokeWidth = (width: number) => {
  const selectedObject = controller.canvas!.getActiveObject() as fabric.Object;
  if (
    selectedObject &&
    (selectedObject instanceof fabric.Rect ||
      selectedObject instanceof fabric.Circle)
  ) {
    controller.canvas!.getActiveObject()!.set("strokeWidth", width);
    controller.canvas!.requestRenderAll();
  }
};

/** 현재 선택된 도형의 테두리 스타일 변경 */
export const changeStokeStyle = (dashArray: Array<number>) => {
  const selectedObject = controller.canvas!.getActiveObject() as fabric.Object;
  if (
    selectedObject &&
    (selectedObject instanceof fabric.Rect ||
      selectedObject instanceof fabric.Circle)
  ) {
    controller.canvas!.getActiveObject()!.set("strokeDashArray", dashArray);
    controller.canvas!.requestRenderAll();
  }
};

/** 현재 선택된 텍스트의 폰트 스타일 변경 */
export const changeFontFamily = (fontFamily: string) => {
  const selectedObject = controller.canvas!.getActiveObject() as fabric.Object;
  if (selectedObject && selectedObject instanceof fabric.IText) {
    const textObject = selectedObject as fabric.IText;
    textObject.set("fontFamily", fontFamily);

    controller.canvas!.requestRenderAll();
  }
};

/** 현재 선택된 텍스트의 폰트 크기 변경 */
export const changeFontSize = (fontSize: number) => {
  if (controller.canvas) {
    const selectedObject = controller.canvas.getActiveObject() as fabric.Object;
    if (selectedObject && selectedObject instanceof fabric.IText) {
      const textObject = selectedObject as fabric.IText;
      textObject.set("fontSize", fontSize);

      controller.canvas.requestRenderAll();
    }
  }
};

/** 현재 선택된 텍스트의 배경 색 변경 */
export const changeFontBackground = (color: string) => {
  const selectedObject = controller.canvas!.getActiveObject() as fabric.Object;
  if (selectedObject && selectedObject instanceof fabric.IText) {
    const textObject = selectedObject as fabric.IText;
    textObject.set("backgroundColor", color);

    controller.canvas!.requestRenderAll();
  }
};

/** 선택된 객체들 그룹화 */
export const makeGroup = () => {
  const activatedObject = controller.canvas!.getActiveObject();

  if (activatedObject instanceof fabric.ActiveSelection) {
    activatedObject.toGroup();
    controller.canvas!.requestRenderAll();
  } else {
    console.error("makeGroup: no ActiveSelection");
  }
};

/** 선택된 객체들 그룹해제 */
export const makeUnGroup = () => {
  const activatedObject = controller.canvas!.getActiveObject();

  if (activatedObject instanceof fabric.Group) {
    activatedObject.toActiveSelection();
  } else {
    console.error("makeUnGroup: no Group");
  }
};
