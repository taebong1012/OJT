import {
  RxGroup,
  RxAlignCenterHorizontally,
  RxAlignCenterVertically,
} from "react-icons/rx";
// import polygonSVG from "assets/svg/ic_polygon.svg";
import Divider from "components/ToolBar/Divider";
import NamedButton from "components/common/NamedButton";
import { makeGroup } from "components/DrawingCanvas";

const MultipleTools = () => {
  const test = () => {
    console.log("test");
  };

  return (
    <>
      <Divider />
      <NamedButton handleOnClick={makeGroup} icon={<RxGroup />} text="그룹화" />
      <NamedButton
        handleOnClick={test}
        icon={<RxAlignCenterHorizontally />}
        text="가로 중앙 정렬"
      />
      <NamedButton
        handleOnClick={test}
        icon={<RxAlignCenterVertically />}
        text="세로 중앙 정렬"
      />
    </>
  );
};

export default MultipleTools;
