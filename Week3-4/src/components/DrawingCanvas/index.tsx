import { useEffect } from "react";
import fabric from "controller/fabric";
import { useSetAtom } from "jotai";
import {
  activatedObjectAtom,
  objectWidthValueAtom,
  objectLeftValueAtom,
  objectTopValueAtom,
  objectHeightValueAtom,
} from "atoms";
import Drawer from "Instance/Drawer";

/** fabric 캔버스 생성 */
const DrawingCanvas = () => {
  /** 커스텀 fabric 인스턴스 */
  const drawer = Drawer.getInstance();

  const setActivatedObject = useSetAtom(activatedObjectAtom);

  const setObjectLeftValue = useSetAtom(objectLeftValueAtom);
  const setObjectTopValue = useSetAtom(objectTopValueAtom);

  const setObjectWidthValueAtom = useSetAtom(objectWidthValueAtom);
  const setObjectHeightValueAtom = useSetAtom(objectHeightValueAtom);

  /** 캔버스 내의 오브젝트가 선택됐을 시 작동할 함수 */
  const handleOnClickCanvasObject = () => {
    const newActivatedObject: fabric.Object | null =
      drawer.canvas!.getActiveObject();
    if (newActivatedObject !== null) {
      setActivatedObject(newActivatedObject as fabric.Object);

      setObjectLeftValue(newActivatedObject.left!);
      setObjectTopValue(newActivatedObject.top!);

      console.log(newActivatedObject);

      setObjectWidthValueAtom(
        newActivatedObject.scaleX! * newActivatedObject.width!
      );
      setObjectHeightValueAtom(
        newActivatedObject.scaleY! * newActivatedObject.height!
      );
    }
  };

  /** 캔버스 생성 */
  useEffect(() => {
    const canvasElement = document.getElementById(
      "drawing-canvas"
    ) as HTMLCanvasElement;

    /** 캔버스 생성 */
    drawer.injectCanvas(canvasElement);

    if (drawer.canvas) {
      drawer.canvas.backgroundColor = "white";
      drawer.canvas.setDimensions({ width: 800, height: 600 });

      /** 캔버스 객체 선택 발생 이벤트 */
      drawer.canvas.on("selection:created", handleOnClickCanvasObject);

      /** 캔버스 객체 선택 변경 이벤트 */
      drawer.canvas.on("selection:updated", handleOnClickCanvasObject);

      /** 캔버스 선택 객체 해제 이벤트 */
      drawer.canvas.on("selection:cleared", () => {
        setActivatedObject(null);
      });

      /** 캔버스 객체 이동 이벤트 감지 */
      drawer.canvas.on("object:moving", (e) => {
        setObjectLeftValue(e.target!.left!);
        setObjectTopValue(e.target!.top!);
      });

      drawer.canvas.on("object:scaling", (e) => {
        setObjectWidthValueAtom(e.target!.scaleX! * e.target!.width!);
        setObjectHeightValueAtom(e.target!.scaleY! * e.target!.height!);
      });
    }

    return () => {
      if (drawer.canvas) {
        drawer.canvas.dispose();
      }
    };
  }, []);

  return <canvas id="drawing-canvas" />;
};

export default DrawingCanvas;
