import { useEffect } from "react";
import fabric from "controller/fabric";
import { useSetAtom } from "jotai";
import { activatedObjectAtom } from "atoms";
import Controller from "controller/core";

/** 커스텀 fabric 인스턴스 */
const controller = Controller.getInstance();

/** fabric 캔버스 생성 */
const DrawingCanvas = () => {
  const setActivatedObject = useSetAtom(activatedObjectAtom);

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

      /** 캔버스 객체 선택 변경 이벤트 */
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

