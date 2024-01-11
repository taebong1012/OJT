import { RxTrash } from "react-icons/rx";
import Divider from "components/ToolBar/Divider";
import NamedButton from "components/common/NamedButton";
import fabric from "controller/fabric";
import { useAtom } from "jotai";
import { answerObjectsAtom, choiceIdArrAtom } from "atoms";
import Drawer from "Instance/Drawer";
import getId from "utils/getId";

const DeleteTool = () => {
  const drawer = Drawer.getInstance();

  const [choiceObjects, setChoiceObjects] = useAtom(answerObjectsAtom);
  const [choiceIdArr, setChoiceIdArr] = useAtom(choiceIdArrAtom);

  let updatedAnswerObjects: fabric.Object[];
  let updatedChoiceAnswerArr: string[];

  /** 키보드 backspace 입력 시 활성화된 객체 삭제 */
  const deleteObject = () => {
    if (!drawer.canvas) {
      console.error("drawingCanvas does not exist");
    } else {
      const selectedObjects: fabric.Object[] = drawer.canvas.getActiveObjects();

      updatedAnswerObjects = [...choiceObjects];
      updatedChoiceAnswerArr = [...choiceIdArr];

      selectedObjects.forEach((obj: fabric.Object) => {
        const selectedObjectsId = getId(obj);

        deleteFromAnswerObjects(selectedObjectsId);

        drawer.canvas!.remove(obj);
      });

      drawer.canvas.discardActiveObject();
      drawer.canvas.requestRenderAll();
    }
  };

  const deleteFromAnswerObjects = (targetObjId: string) => {
    const index = choiceObjects.findIndex((choiceObject) => {
      let choiceObjectId = getId(choiceObject);
      return choiceObjectId === targetObjId;
    });

    if (index !== -1) {
      updatedAnswerObjects.splice(index, 1);
      setChoiceObjects(updatedAnswerObjects);

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
