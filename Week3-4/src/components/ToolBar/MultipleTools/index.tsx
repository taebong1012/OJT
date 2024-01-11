import {
  RxGroup,
  RxAlignCenterHorizontally,
  RxAlignCenterVertically,
} from "react-icons/rx";
import Divider from "components/ToolBar/Divider";
import NamedButton from "components/common/NamedButton";
import fabric from "controller/fabric";
import Drawer from "Instance/Drawer";
import { useAtom } from "jotai";
import { answerObjectsAtom, choiceIdArrAtom } from "atoms";
import getId from "utils/getId";
import { useEffect } from "react";

const MultipleTools = () => {
  const drawer = Drawer.getInstance();
  const [choiceObjects, setChoiceObjects] = useAtom(answerObjectsAtom);
  const [choiceIdArr, setChoiceIdArr] = useAtom(choiceIdArrAtom);

  let updatedAnswerObjects: fabric.Object[];
  let updatedChoiceAnswerArr: string[];

  /** 선택된 객체들 그룹화 */
  const makeGroup = () => {
    const activatedObject = drawer.canvas!.getActiveObject();

    if (activatedObject instanceof fabric.ActiveSelection) {
      updatedAnswerObjects = [...choiceObjects];
      updatedChoiceAnswerArr = [...choiceIdArr];

      /** 현재 설정된 오브젝트들을 탐색 */
      activatedObject._objects.forEach((obj) => {
        const objId = getId(obj);
        deleteFromAnswerObjects(objId);
      });

      activatedObject.toGroup();
      drawer.canvas!.requestRenderAll();
    } else {
      console.error("makeGroup: no ActiveSelection");
    }
  };

  /** answer 배열에서 id 찾아서 삭제 */
  const deleteFromAnswerObjects = (targetObjId: string) => {
    const index = choiceObjects.findIndex((choiceObject) => {
      let answerObjectId;
      if (choiceObject instanceof fabric.Group) {
        answerObjectId = choiceObject._objects[0].data.id;
      } else {
        answerObjectId = choiceObject.data.id;
      }
      return answerObjectId === targetObjId;
    });

    if (index !== -1) {
      // const updatedAnswerObjects = [...choiceObjects];
      updatedAnswerObjects.splice(index, 1);
      setChoiceObjects(updatedAnswerObjects);

      // const updatedChoiceAnswerArr = [...choiceIdArr];
      updatedChoiceAnswerArr.splice(index, 1);
      setChoiceIdArr(updatedChoiceAnswerArr);
    } else {
      /** answerObject 배열에 없으므로 리턴 */
      return;
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
