import { RxTrash } from "react-icons/rx";
import Divider from "components/ToolBar/Divider";
import NamedButton from "components/common/NamedButton";
import fabric from "controller/fabric";
import { useAtom } from "jotai";
import { answerObjectsAtom } from "atoms";
import Controller from "controller/core";

const DeleteTool = () => {
  const controller = Controller.getInstance();

  const [answerObjects, setAnswerObjects] = useAtom(answerObjectsAtom);

  /** 키보드 backspace 입력 시 활성화된 객체 삭제 */
  const deleteObject = () => {
    if (!controller.canvas) {
      console.error("drawingCanvas does not exist");
    } else {
      console.log("오브젝트 삭제");

      const selectedObjects: fabric.Object[] =
        controller.canvas.getActiveObjects();

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

        controller.canvas!.remove(obj);
      });

      controller.canvas.discardActiveObject();
      controller.canvas.requestRenderAll();
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
      // 해당 객체를 answerObjects 배열에서 삭제합니다.
      const updatedAnswerObjects = [...answerObjects];
      updatedAnswerObjects.splice(index, 1);
      setAnswerObjects(updatedAnswerObjects); // answerObjects를 업데이트합니다.
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
