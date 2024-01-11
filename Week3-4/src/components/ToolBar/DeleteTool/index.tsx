import { RxTrash } from "react-icons/rx";
import Divider from "components/ToolBar/Divider";
import NamedButton from "components/common/NamedButton";
import fabric from "controller/fabric";
import { useAtom } from "jotai";
import { answerObjectsAtom, choiceIdArrAtom } from "atoms";
import Drawer from "Instance/Drawer";

const DeleteTool = () => {
  const drawer = Drawer.getInstance();

  const [answerObjects, setAnswerObjects] = useAtom(answerObjectsAtom);
  const [choiceIdArr, setChoiceIdArr] = useAtom(choiceIdArrAtom);

  /** 키보드 backspace 입력 시 활성화된 객체 삭제 */
  const deleteObject = () => {
    if (!drawer.canvas) {
      console.error("drawingCanvas does not exist");
    } else {
      const selectedObjects: fabric.Object[] = drawer.canvas.getActiveObjects();

      selectedObjects.forEach((obj: fabric.Object) => {
        let selectedObjectsId;
        /** 선택한 것이 그룹 객체라면 */
        if (obj instanceof fabric.Group) {
          selectedObjectsId = obj._objects[0].data.id;
        } else {
          /** 선택한 것이 그룹 객체가 아니라면 */
          selectedObjectsId = obj?.data.id;
        }
        deleteFromAnswerObjects(selectedObjectsId);

        drawer.canvas!.remove(obj);
      });

      drawer.canvas.discardActiveObject();
      drawer.canvas.requestRenderAll();
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

      const updatedChoiceAnswerArr = [...choiceIdArr];
      updatedChoiceAnswerArr.splice(index, 1);
      setChoiceIdArr(updatedChoiceAnswerArr);
    } else {
      /** answerObject 배열에 없으므로 리턴 */
      return;
    }
  };

  return (
    <>
      <Divider />
      <NamedButton
        handleOnClick={deleteObject}
        icon={<RxTrash color={"red"} />}
        text="선택 객체 삭제"
      />
    </>
  );
};

export default DeleteTool;
