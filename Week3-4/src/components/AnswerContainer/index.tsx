import NamedButton from "components/common/NamedButton";
import * as S from "./style";
import { RxPlusCircled, RxTrash } from "react-icons/rx";
import { useAtom, useAtomValue } from "jotai";
import { activatedObjectAtom, answerObjectsAtom } from "atoms";
import { useEffect, useState } from "react";
import fabric from "controller/fabric";

const AnswerContainer = () => {
  const [answerObjects, setAnswerObjects] = useAtom(answerObjectsAtom);
  const activatedObject = useAtomValue(activatedObjectAtom);
  const [canAdd, setCanAdd] = useState(false);

  const removeFromAnswerObjects = () => {
    return <RxTrash />;
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

  /** add 버튼 클릭시 동작 */
  const handleOnClickAddDiv = () => {
    if (activatedObject) {
      setAnswerObjects([...answerObjects, activatedObject]);
      setCanAdd(false);
    } else {
      console.error("no activated object");
    }
  };

  const ObjectImg = ({ answerObject }: { answerObject: fabric.Object }) => {
    const dataURL = answerObject.toDataURL({ format: "svg" });
    return <S.AnswerImgDiv $url={dataURL}></S.AnswerImgDiv>;
  };

  useEffect(() => {}, [answerObjects]);

  const Answer = ({
    index,
    answerObject,
  }: {
    index: number;
    answerObject: fabric.Object;
  }) => {
    return (
      <S.AnswerWrapper>
        <S.CenterDiv>{index + 1}</S.CenterDiv>
        <S.CenterDiv>
          <ObjectImg answerObject={answerObject} />
        </S.CenterDiv>
        <S.CenterDiv>
          <NamedButton
            handleOnClick={removeFromAnswerObjects}
            icon={<RxTrash color={"red"} />}
            text="삭제"
            marginRight={0}
            showName={false}
          />
        </S.CenterDiv>
      </S.AnswerWrapper>
    );
  };

  return (
    <S.Container>
      <S.AddDiv $canAdd={canAdd} onClick={handleOnClickAddDiv}>
        <RxPlusCircled color={canAdd ? "white" : "#666666"} />
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
