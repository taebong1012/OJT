import Default from "components/ToolBar/DefaultTools";
import * as S from "./style";
import fabric from "controller/fabric";
import { useAtomValue } from "jotai";
import { activatedObjectAtom } from "atoms";
import { useEffect, useState } from "react";
import UpDown from "components/ToolBar/UpDownTools";
import ShapeTools from "components/ToolBar/ShapeTools";
import TextTools from "components/ToolBar/TextTools";
import MultipleTools from "components/ToolBar/MultipleTools";
import GroupTools from "components/ToolBar/GroupTools";
import DeleteTool from "components/ToolBar/DeleteTool";

const ToolBar = () => {
  const activatedObject: fabric.Object | null =
    useAtomValue(activatedObjectAtom);

  const [curObjectType, setCurObjectType] = useState("diselected");

  useEffect(() => {
    if (activatedObject) {
      if (activatedObject instanceof fabric.ActiveSelection) {
        /** 여러개 선택되어있는지 */
        setCurObjectType("multiselected");
      } else if (activatedObject instanceof fabric.Group) {
        /** 그룹이라면 */
        setCurObjectType("group");
      } else if (activatedObject instanceof fabric.Polyline) {
        /** 직선인지 */
        setCurObjectType("line");
      } else if (activatedObject instanceof fabric.Image) {
        /** 이미지인지 */
        setCurObjectType("image");
      } else if (activatedObject instanceof fabric.Text) {
        setCurObjectType("text");
      } else if (activatedObject.name === "choice") {
        /** choice라는 name을 가지고 있다면 보기 상자 */
        setCurObjectType("choice");
      } else if (
        /** 사각형 혹은 원형이라면 */
        activatedObject instanceof fabric.Rect ||
        activatedObject instanceof fabric.Circle
      ) {
        setCurObjectType("shape");
      } else {
        console.error("curObjectType Err");
      }
    } else {
      setCurObjectType("diselected");
    }
  }, [activatedObject]);

  return (
    <S.Container>
      <Default />
      {curObjectType === "shape" ? <ShapeTools /> : null}
      {curObjectType === "text" ? <TextTools /> : null}
      {curObjectType === "multiselected" ? <MultipleTools /> : null}
      {curObjectType !== "diselected" && curObjectType !== "multiselected" ? (
        <UpDown />
      ) : null}
      {curObjectType === "group" ? <GroupTools /> : null}
      {activatedObject ? <DeleteTool /> : null}
    </S.Container>
  );
};

export default ToolBar;
