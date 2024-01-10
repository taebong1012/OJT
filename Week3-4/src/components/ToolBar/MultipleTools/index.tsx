import {
  RxGroup,
  RxAlignCenterHorizontally,
  RxAlignCenterVertically,
} from "react-icons/rx";
import Divider from "components/ToolBar/Divider";
import NamedButton from "components/common/NamedButton";
import fabric from "controller/fabric";
import Drawer from "Instance/Drawer";

const MultipleTools = () => {
  const drawer = Drawer.getInstance();

  /** 선택된 객체들 그룹화 */
  const makeGroup = () => {
    const activatedObject = drawer.canvas!.getActiveObject();

    if (activatedObject instanceof fabric.ActiveSelection) {
      activatedObject.toGroup();
      drawer.canvas!.requestRenderAll();
    } else {
      console.error("makeGroup: no ActiveSelection");
    }
  };

  /** 수평적으로 가운데 정렬 */
  const makeCenterHorizontally = () => {
    const activatedObject = drawer.canvas!.getActiveObject();
    if (activatedObject instanceof fabric.ActiveSelection) {
      const activatedObjects = activatedObject.getObjects();
      activatedObjects.forEach((obj) => {
        obj.set("top", 0);
      });
      drawer.canvas!.requestRenderAll();
    } else {
      console.error("makeCenterHorizontally: no ActiveSelection");
    }
  };

  /** 수직적으로 가운데 정렬 */
  const makeCenterVertically = () => {
    const activatedObject = drawer.canvas!.getActiveObject();
    if (activatedObject instanceof fabric.ActiveSelection) {
      const activatedObjects = activatedObject.getObjects();
      activatedObjects.forEach((obj) => {
        obj.set("left", 0);
      });
      drawer.canvas!.requestRenderAll();
    } else {
      console.error("makeCenterHorizontally: no ActiveSelection");
    }
  };

  return (
    <>
      <Divider />
      <NamedButton handleOnClick={makeGroup} icon={<RxGroup />} text="그룹화" />
      <NamedButton
        handleOnClick={makeCenterHorizontally}
        icon={<RxAlignCenterHorizontally />}
        text="가로 중앙 정렬"
      />
      <NamedButton
        handleOnClick={makeCenterVertically}
        icon={<RxAlignCenterVertically />}
        text="세로 중앙 정렬"
      />
    </>
  );
};

export default MultipleTools;
