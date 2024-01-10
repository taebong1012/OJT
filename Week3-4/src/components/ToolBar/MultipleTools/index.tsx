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
import { answerObjectsAtom } from "atoms";

const MultipleTools = () => {
  const drawer = Drawer.getInstance();
  const [answerObjects, setAnswerObjects] = useAtom(answerObjectsAtom);

  /** 선택된 객체들 그룹화 */
  const makeGroup = () => {
    const activatedObject = drawer.canvas!.getActiveObject();

    if (activatedObject instanceof fabric.ActiveSelection) {

      const updatedAnswerObjects = [...answerObjects];

      activatedObject._objects.map((obj) => {
        
        const index = answerObjects.findIndex((answerObject) => {
          let answerObjectId;
          if (answerObject instanceof fabric.Group) {
            answerObjectId = answerObject._objects[0].data.id;
          } else {
            answerObjectId = answerObject.data.id;
          }
          return answerObjectId === obj.data.id;
        });

        

      });

      activatedObject.toGroup();
      drawer.canvas!.requestRenderAll();
    } else {
      console.error("makeGroup: no ActiveSelection");
    }
  };

  /** answer 배열에서 id 찾아서 삭제 */
  const deleteFromAnswerObjects = (targetObjId: string) => {
    const index = answerObjects.findIndex((answerObject) => {
      let answerObjectId;
      if (answerObject instanceof fabric.Group) {
        answerObjectId = answerObject._objects[0].data.id;
      } else {
        answerObjectId = answerObject.data.id;
      }
      return answerObjectId === targetObjId;
    });

    if (index !== -1) {
      const updatedAnswerObjects = [...answerObjects];
      updatedAnswerObjects.splice(index, 1);
      setAnswerObjects(updatedAnswerObjects);
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
