import { RxLayers } from "react-icons/rx";
import Divider from "components/ToolBar/Divider";
import NamedButton from "components/common/NamedButton";
import fabric from "controller/fabric";
import { useAtom } from "jotai";
import { answerObjectsAtom } from "atoms";
import Drawer from "Instance/Drawer";

const GroupTools = () => {
  const drawer = Drawer.getInstance();

  const [answerObjects, setAnswerObjects] = useAtom(answerObjectsAtom);

  /** 선택된 객체들 그룹해제 */
  const makeUnGroup = () => {
    const activatedObject = drawer.canvas!.getActiveObject() as fabric.Group;

    if (activatedObject instanceof fabric.Group) {
      const targetObjId = activatedObject!._objects[0].data.id;
      deleteFromAnswerObjects(targetObjId);

      activatedObject.toActiveSelection();
    } else {
      console.error("makeUnGroup: no Group");
    }
  };

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
