import {
  RxPlusCircled,
  RxTrash,
  RxText,
  RxImage,
  RxSquare,
  RxBorderSolid,
  RxCircle,
} from "react-icons/rx";
import Divider from "components/ToolBar/Divider";
import NamedButton from "components/common/NamedButton";
import fabric from "controller/fabric";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  activatedObjectAtom,
  answerObjectsAtom,
  isShowImageModalAtom,
} from "atoms";
import Controller from "controller/core";
import { useEffect, useState } from "react";

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

  const [answerObjects, setAnswerObjects] = useAtom(answerObjectsAtom);

  /** 키보드 backspace 입력 시 활성화된 객체 삭제 */
  const deleteObject = () => {
    if (!controller.canvas) {
      console.error("drawingCanvas does not exist");
    } else {
      console.log("오브젝트 삭제");

      const selectedObjects: fabric.Object[] =
        controller.canvas.getActiveObjects();

      selectedObjects.forEach((obj: fabric.Object) => {
        let selectedObjectsId;
        /** 선택한 것이 그룹 객체라면 */
        if (obj instanceof fabric.Group) {
          selectedObjectsId = obj._objects[0].data.id;
        } else {
          /** 선택한 것이 그룹 객체가 아니라면 */
          selectedObjectsId = obj?.data.id;
        }
        deleteFromAnswerObjects(selectedObjectsId);

        controller.canvas!.remove(obj);
      });

      controller.canvas.discardActiveObject();
      controller.canvas.requestRenderAll();
    }
  };

  const deleteFromAnswerObjects = (targetObjId: string) => {
    const index = answerObjects.findIndex((answerObject) => {
      let answerObjectId;
      if (answerObject instanceof fabric.Group) {
        answerObjectId = answerObject._objects[0].data.id;
      } else {
        answerObjectId = answerObject.data.id;
      }
      return answerObjectId === targetObjId;
    });

    if (index !== -1) {
      // 해당 객체를 answerObjects 배열에서 삭제합니다.
      const updatedAnswerObjects = [...answerObjects];
      updatedAnswerObjects.splice(index, 1);
      setAnswerObjects(updatedAnswerObjects); // answerObjects를 업데이트합니다.
    } else {
      /** answerObject 배열에 없으므로 리턴 */
      return;
    }
  };

  const activatedObject = useAtomValue(activatedObjectAtom);

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
