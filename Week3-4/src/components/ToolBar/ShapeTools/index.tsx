import {
  RxBlendingMode,
  RxPencil1,
  RxBorderWidth,
  RxBorderStyle,
} from "react-icons/rx";
import Divider from "components/ToolBar/Divider";
import ExtenseButton from "components/common/ExtenseButton";
import ToolBarIconWithColor from "components/common/ToolBarIconWithColor";
import { useAtomValue } from "jotai";
import { activatedObjectAtom } from "atoms";
import { useEffect, useState } from "react";

const ShapeTools = () => {
  const activatedObject = useAtomValue(activatedObjectAtom);
  const [curObjectBgColor, setCurObjectBgColor] = useState<string>("");
  const [curObjectStrokeColor, setCurObjectStrokeColor] = useState("");

  useEffect(() => {
    console.log(activatedObject);
    if (
      activatedObject &&
      activatedObject.fill !== undefined &&
      typeof activatedObject.fill === "string"
    ) {
      setCurObjectBgColor(activatedObject.fill);
    }
    if (activatedObject && activatedObject.stroke !== undefined) {
      setCurObjectStrokeColor(activatedObject.stroke);
    }
  }, [activatedObject]);

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
            color={curObjectBgColor}
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
            color={curObjectStrokeColor}
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
