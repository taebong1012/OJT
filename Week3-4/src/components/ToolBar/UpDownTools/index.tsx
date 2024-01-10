import {
  RxChevronUp,
  RxDoubleArrowUp,
  RxChevronDown,
  RxDoubleArrowDown,
} from "react-icons/rx";
import Divider from "components/ToolBar/Divider";
import NamedButton from "components/common/NamedButton";
import { useAtomValue } from "jotai";
import { activatedObjectAtom } from "atoms";
import Controller from "controller/core";

const UpDown = () => {
  const controller = Controller.getInstance();
  const activatedObject = useAtomValue(activatedObjectAtom);

  /** 선택된 객체 앞으로 하나 가져오기 */
  const moveForward = () => {
    if (activatedObject) {
      activatedObject.bringForward();
      controller.canvas!.requestRenderAll();
    } else {
      console.error("moveForward: no activatedObject");
    }
  };

  /** 선택된 객체 맨 앞으로 가져오기 */
  const moveFront = () => {
    if (activatedObject) {
      activatedObject.bringToFront();
      controller.canvas!.requestRenderAll();
    } else {
      console.error("moveFront: no activatedObject");
    }
  };

  /** 선택된 객체 뒤로 한칸 보내기 */
  const moveBackward = () => {
    if (activatedObject) {
      activatedObject.sendBackwards();
      controller.canvas!.requestRenderAll();
    } else {
      console.error("moveBackward: no activatedObject");
    }
  };

  /** 선택된 객체 맨 뒤로 보내기 */
  const moveBack = () => {
    if (activatedObject) {
      activatedObject.sendToBack();
      controller.canvas!.requestRenderAll();
    } else {
      console.error("moveBack: no activatedObject");
    }
  };

  return (
    <>
      <Divider />
      <NamedButton
        handleOnClick={moveForward}
        icon={<RxChevronUp />}
        text="앞으로"
      />
      <NamedButton
        handleOnClick={moveFront}
        icon={<RxDoubleArrowUp />}
        text="맨 앞으로"
      />
      <NamedButton
        handleOnClick={moveBackward}
        icon={<RxChevronDown />}
        text="뒤로"
      />
      <NamedButton
        handleOnClick={moveBack}
        icon={<RxDoubleArrowDown />}
        text="맨 뒤로"
      />
    </>
  );
};

export default UpDown;
