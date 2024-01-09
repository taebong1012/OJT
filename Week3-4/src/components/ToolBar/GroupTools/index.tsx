import { RxLayers } from "react-icons/rx";
import Divider from "components/ToolBar/Divider";
import NamedButton from "components/common/NamedButton";
import Controller from "controller/core";
import fabric from "controller/fabric";

const GroupTools = () => {
  const controller = Controller.getInstance();

  /** 선택된 객체들 그룹해제 */
  const makeUnGroup = () => {
    const activatedObject = controller.canvas!.getActiveObject();

    if (activatedObject instanceof fabric.Group) {
      activatedObject.toActiveSelection();
    } else {
      console.error("makeUnGroup: no Group");
    }
  };

  return (
    <>
      <Divider />
      <NamedButton
        handleOnClick={makeUnGroup}
        icon={<RxLayers />}
        text="그룹 해제"
      />
    </>
  );
};

export default GroupTools;
