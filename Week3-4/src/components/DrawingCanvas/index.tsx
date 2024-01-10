import { useEffect } from "react";
import fabric from "controller/fabric";
import { useAtom, useSetAtom } from "jotai";
import { activatedObjectAtom, answerObjectsAtom } from "atoms";
import Controller from "controller/core";

/** fabric 캔버스 생성 */
const DrawingCanvas = () => {
  /** 커스텀 fabric 인스턴스 */
  const controller = Controller.getInstance();

  const setActivatedObject = useSetAtom(activatedObjectAtom);

  /** 캔버스 내의 오브젝트가 선택됐을 시 작동할 함수 */
  const handleOnClickCanvasObject = () => {
    const newActivatedObject: fabric.Object | null =
      controller.canvas!.getActiveObject();
    if (newActivatedObject !== null) {
      setActivatedObject(newActivatedObject as fabric.Object);
    }
  };

  /** 캔버스 생성 */
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
