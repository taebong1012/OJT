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
    if (
      activatedObject &&
      !(activatedObject instanceof fabric.ActiveSelection) &&
      !(activatedObject instanceof fabric.Group)
    ) {
      const isInAnswerObjects = answerObjects.find((obj) => {
        if (obj instanceof fabric.Group) {
          return obj._objects[0].data.id === activatedObject.data.id;
        } else {
          return obj.data.id === activatedObject.data.id;
        }
      });
      setCanAdd(!isInAnswerObjects);
    } else if (activatedObject && activatedObject instanceof fabric.Group) {
      const firstActivatedObjectObject = activatedObject._objects[0];
      const isInAnswerObjects = answerObjects.find((obj) => {
        if (obj instanceof fabric.Group) {
          return obj._objects[0].data.id === firstActivatedObjectObject.data.id;
        } else {
          return obj.data.id === firstActivatedObjectObject.data.id;
        }
      });
      setCanAdd(!isInAnswerObjects);
    } else {
      setCanAdd(false);
    }
  }, [activatedObject]);

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
            icon={<RxTrash />}
            text="삭제"
            marginRight={0}
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
