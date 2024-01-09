import { RxLayers } from "react-icons/rx";
import Divider from "components/ToolBar/Divider";
import NamedButton from "components/common/NamedButton";
import { makeUnGroup } from "components/DrawingCanvas";

const GroupTools = () => {
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
