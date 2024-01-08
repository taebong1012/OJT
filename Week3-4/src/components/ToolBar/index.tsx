import Default from "components/ToolBar/DefaultTools";
import * as S from "./style";
import fabric from "controller/fabric";
import { useAtomValue } from "jotai";
import { activatedObjectsAtom } from "atoms";
import { useEffect, useState } from "react";
import UpDown from "components/ToolBar/UpDownTools";
import ShapeTools from "components/ToolBar/ShapeTools";
import TextTools from "components/ToolBar/TextTools";

const ToolBar = () => {
  const activatedObjects: fabric.Object[] = useAtomValue(activatedObjectsAtom);

  const [curObjectType, setCurObjectType] = useState("diselected");

  useEffect(() => {
    /** 선택이 되어있지 않다면 선택되어 있다면 */
    if (activatedObjects.length <= 0) {
      setCurObjectType("diselected");
    } else if (activatedObjects.length > 1) {
      /** 여러 개 선택되어 있다면 */
      setCurObjectType("group");
    } else {
      /** 하나만 선택했다면 */
      /** 직선인지 */
      if (activatedObjects[0] instanceof fabric.Polyline) {
        setCurObjectType("line");
      } else if (activatedObjects[0] instanceof fabric.Image) {
        /** 이미지인지 */
        setCurObjectType("image");
      } else if (activatedObjects[0] instanceof fabric.Text) {
        setCurObjectType("text");
      } else {
        /** 삼각형 혹은 원형인지 */
        /** choice라는 name을 가지고 있다면 보기 상자 */
        if (activatedObjects[0].name === "choice") {
          setCurObjectType("choice");
        } else {
          setCurObjectType("shape");
        }
      }
    }
  }, [activatedObjects]);

  return (
    <S.Container>
      <Default />
      {curObjectType === "shape" ? <ShapeTools /> : null}
      {curObjectType === "text" ? <TextTools /> : null}
      {curObjectType === "diselected" ? null : <UpDown />}
    </S.Container>
  );
};

export default ToolBar;
