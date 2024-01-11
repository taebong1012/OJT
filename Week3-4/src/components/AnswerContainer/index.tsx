import * as S from "./style";
import { RxPlusCircled, RxTrash } from "react-icons/rx";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  activatedObjectAtom,
  answerIdAtom,
  answerObjectsAtom,
  choiceIdArrAtom,
} from "atoms";
import { useEffect, useState } from "react";
import fabric from "controller/fabric";
import getId from "utils/getId";

const AnswerContainer = () => {
  const [answerObjects, setAnswerObjects] = useAtom(answerObjectsAtom);
  const [choiceIdArr, setChoiceIdArr] = useAtom(choiceIdArrAtom);
  const activatedObject = useAtomValue(activatedObjectAtom);
  const [canAdd, setCanAdd] = useState(false);
  const [answerId, setAnswerId] = useAtom(answerIdAtom);

  const removeFromAnswerObjects = (index: number) => {
    if (index < answerObjects.length && index >= 0) {
      const updatedAnswerObjects = [...answerObjects];
      updatedAnswerObjects.splice(index, 1);
      setAnswerObjects(updatedAnswerObjects);

      const updatedChoiceAnswerArr = [...choiceIdArr];
      updatedChoiceAnswerArr.splice(index, 1);
      setChoiceIdArr(updatedChoiceAnswerArr);
    } else {
      console.error("removeFromAnswerObjects: index error");
    }
  };

  /** 캔버스에서 선택한 객체가 있는지 없는지 확인 */
  useEffect(() => {
    /** 여러개 선택한 것이 아니라면 */
    if (
      activatedObject &&
      !(activatedObject instanceof fabric.ActiveSelection)
    ) {
      let activatedObjectId;
      /** 선택한 것이 그룹 객체라면 */
      if (activatedObject instanceof fabric.Group) {
        activatedObjectId = activatedObject._objects[0].data.id;
      } else {
        /** 선택한 것이 그룹 객체가 아니라면 */
        activatedObjectId = activatedObject?.data.id;
      }
      const isInAnswerObjects = getIsInAnswerObjects(activatedObjectId);
      setCanAdd(!isInAnswerObjects);
    } else {
      /** activateObject가 없거나 여러개가 선택됐다면 */
      setCanAdd(false);
    }
  }, [activatedObject]);

  /** 정답에 같은 id를 갖고 있는 오브젝트가 있는지 확인 후 boolean 리턴 */
  const getIsInAnswerObjects = (targetObjId: string) => {
    return answerObjects.some((answerObject) => {
      let answerObjectId;
      if (answerObject instanceof fabric.Group) {
        answerObjectId = answerObject._objects[0].data.id;
      } else {
        answerObjectId = answerObject.data.id;
      }

      return answerObjectId === targetObjId;
    });
  };

  useEffect(() => {
    console.log(choiceIdArr);
  }, [choiceIdArr]);

  /** add 버튼 클릭시 동작 */
  const handleOnClickAddDiv = () => {
    if (activatedObject) {
      setAnswerObjects((prevAnswerObjects) => [
        ...prevAnswerObjects,
        activatedObject,
      ]);

      const activatedObjectId = getId(activatedObject);
      setChoiceIdArr((prevChoiceIdArr) => [
        ...prevChoiceIdArr,
        activatedObjectId,
      ]);

      if (!answerId) {
        setAnswerId(activatedObjectId);
      }

      setCanAdd(false);
    } else {
      console.error("no activated object");
    }
  };

  const ObjectImg = ({ answerObject }: { answerObject: fabric.Object }) => {
    const dataURL = answerObject.toDataURL({ format: "svg" });
    return <S.AnswerImgDiv $url={dataURL}></S.AnswerImgDiv>;
  };

  const [checkedIndex, setCheckedIndex] = useState(0);

  /** answer 배열이 수정되어서 index가 배열안에 없다면 checkedIndex를 0으로 변경*/
  useEffect(() => {
    if (checkedIndex >= answerObjects.length) {
      setCheckedIndex(0);
    }
  }, [answerObjects]);

  const Answer = ({
    index,
    answerObject,
  }: {
    index: number;
    answerObject: fabric.Object;
  }) => {
    const setAnswerId = useSetAtom(answerIdAtom);

    let id: string;
    if (answerObject instanceof fabric.Group) {
      id = answerObject._objects[0].data.id;
    } else {
      id = answerObject.data.id;
    }

    return (
      <S.AnswerWrapper>
        <S.CenterDiv>{index + 1}번</S.CenterDiv>
        <S.CenterDiv>
          <button
            onClick={() => {
              removeFromAnswerObjects(index);
            }}
          >
            <RxTrash color={"red"} />
          </button>
        </S.CenterDiv>

        <S.CenterDiv>
          <ObjectImg answerObject={answerObject} />
        </S.CenterDiv>
        <S.CenterDiv>
          <input
            type="radio"
            name="answerRadio"
            value={id}
            checked={checkedIndex === index}
            onChange={() => {
              setCheckedIndex(index);
              setAnswerId(id);
            }}
          ></input>
        </S.CenterDiv>
      </S.AnswerWrapper>
    );
  };

  return (
    <S.Container>
      <S.AddDiv $canAdd={canAdd} onClick={handleOnClickAddDiv}>
        <RxPlusCircled color={canAdd ? "#333333" : "#999999"} />
      </S.AddDiv>
      <S.AnswersContainer>
        {answerObjects.map((answerObject, index) => {
          return (
            <Answer key={index} answerObject={answerObject} index={index} />
          );
        })}
      </S.AnswersContainer>
    </S.Container>
  );
};

export default AnswerContainer;
