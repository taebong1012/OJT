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
import Drawer from "Instance/Drawer";

const Default = () => {
  const drawer = Drawer.getInstance();
  const setIsShowImageModal = useSetAtom(isShowImageModalAtom);

  /** 보기 상자 추가 */
  const addChoice = () => {
    if (!drawer.canvas) {
      console.error("drawer.canvas does not exist");
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

      drawer.add(newRect);

      drawer.canvas.setActiveObject(newRect);
      drawer.canvas.requestRenderAll();
    }
  };

  /** 텍스트 추가 */
  const addText = () => {
    if (!drawer.canvas) {
      console.error("drawer.canvas does not exist");
    } else {
      const newText = new fabric.IText("Text", {
        top: 300,
        left: 400,
        fill: "black",
        fontFamily: "Helvetica",
        backgroundColor: "transparent",
        originX: "center",
        originY: "center",
        fontSize: 40,
      });

      drawer.add(newText);

      drawer.canvas.setActiveObject(newText);
      drawer.canvas.requestRenderAll();
    }
  };

  /** 캔버스에 사각형 추가 */
  const drawRect = () => {
    if (!drawer.canvas) {
      console.error("drawer.canvas does not exist");
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

      drawer.add(newRect);

      drawer.canvas.setActiveObject(newRect);
      drawer.canvas.requestRenderAll();
    }
  };

  /** 캔버스에 원 추가 */
  const drawCircle = () => {
    if (!drawer.canvas) {
      console.error("drawer.canvas does not exist");
    } else {
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

      drawer.add(newCircle);

      /** 활성화 시키기 */
      drawer.canvas!.setActiveObject(newCircle);
      drawer.canvas!.requestRenderAll();
    }
  };

  /** 캔버스에 선 추가 */
  const drawLine = () => {
    if (!drawer.canvas) {
      console.error("drawer.canvas! does not exist");
    } else {
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

      drawer.add(newLine);

      /** 활성화 시키기 */
      drawer.canvas!.setActiveObject(newLine);
      drawer.canvas!.requestRenderAll();
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
