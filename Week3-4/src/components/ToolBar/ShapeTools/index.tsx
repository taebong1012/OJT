import {
  RxBlendingMode,
  RxPencil1,
  RxBorderWidth,
  RxBorderStyle,
} from "react-icons/rx";
import Divider from "components/ToolBar/Divider";
import ExtenseButton from "components/common/ExtenseButton";
import ToolBarIconWithColor from "components/common/ToolBarIconWithColor";

const ShapeTools = () => {
  return (
    <>
      <Divider />
      <ExtenseButton
        icon={
          <ToolBarIconWithColor
            icon={
              <RxBlendingMode
                style={{
                  width: "16px",
                  height: "16px",
                }}
              />
            }
            color="red"
          />
        }
        text="도형 색상"
        type="backroundColor"
      />
      <ExtenseButton
        icon={
          <ToolBarIconWithColor
            icon={
              <RxPencil1
                style={{
                  width: "16px",
                  height: "16px",
                }}
              />
            }
            color="red"
          />
        }
        text="테두리 색상"
        type="strokeColor"
      />
      <ExtenseButton
        icon={<RxBorderWidth />}
        text="테두리 굵기"
        type="strokeWidth"
      />
      <ExtenseButton
        icon={<RxBorderStyle />}
        text="테두리 종류"
        type="strokeStyle"
      />
    </>
  );
};

export default ShapeTools;
