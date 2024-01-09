import {
  RxPlusCircled,
  RxText,
  RxImage,
  RxSquare,
  RxBorderSolid,
  RxCircle,
} from "react-icons/rx";
import Divider from "components/ToolBar/Divider";
import NamedButton from "components/common/NamedButton";
import fabric from "controller/fabric";
import { useSetAtom } from "jotai";
import { isShowImageModalAtom } from "atoms";
import Controller from "controller/core";

const Default = () => {
  const controller = Controller.getInstance();
  const setIsShowImageModal = useSetAtom(isShowImageModalAtom);

  /** 보기 상자 추가 */
  const addChoice = () => {
    if (!controller.canvas) {
      console.error("controller.canvas does not exist");
    } else {
      const newRect = new fabric.Rect({
        top: 100,
        left: 100,
        width: 100,
        height: 100,
        fill: "white",
        stroke: "#D0D0D0",
        strokeUniform: true,
        strokeWidth: 2,
        rx: 10,
        ry: 10,
        name: "choice",
        originX: "center",
        originY: "center",
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
  const addText = () => {
    if (!controller.canvas) {
      console.error("controller.canvas does not exist");
    } else {
      const newText = new fabric.IText("Text", {
        top: 100,
        left: 100,
        fill: "black",
        fontFamily: "Helvetica",
        backgroundColor: "transparent",
        originX: "center",
        originY: "center",
      });

      controller.add(newText);

      controller.canvas.setActiveObject(newText);
      controller.canvas.requestRenderAll();

      console.log(newText);
    }
  };

  /** 캔버스에 사각형 추가 */
  const drawRect = () => {
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
  const drawCircle = () => {
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
  const drawLine = () => {
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
          originX: "center",
          originY: "center",
        }
      );

      controller.add(newLine);

      /** 활성화 시키기 */
      controller.canvas!.setActiveObject(newLine);
      controller.canvas!.requestRenderAll();
    }
  };

  const handleOnClickAddImage = () => {
    setIsShowImageModal(true);
  };

  return (
    <>
      <NamedButton
        handleOnClick={addChoice}
        icon={<RxPlusCircled />}
        text="답안 보기 추가"
      />
      <Divider />
      <NamedButton
        handleOnClick={addText}
        icon={<RxText />}
        text="텍스트 추가"
      />
      <NamedButton
        handleOnClick={handleOnClickAddImage}
        icon={<RxImage />}
        text="이미지 추가"
      />
      <NamedButton
        handleOnClick={drawRect}
        icon={<RxSquare />}
        text="사각형 추가"
      />
      <NamedButton
        handleOnClick={drawCircle}
        icon={<RxCircle />}
        text="원 추가"
      />
      <NamedButton
        handleOnClick={drawLine}
        icon={<RxBorderSolid />}
        text="직선 추가"
      />
    </>
  );
};

export default Default;
