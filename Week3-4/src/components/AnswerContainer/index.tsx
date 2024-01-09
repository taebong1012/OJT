import NamedButton from "components/common/NamedButton";
import * as S from "./style";
import { RxPlusCircled, RxTrash } from "react-icons/rx";

const AnswerContainer = () => {
  const answerObjects = [
    "1번 오브젝트",
    "2번 오브젝트",
    "3번 오브젝트",
    "4번 오브젝트",
    "5번 오브젝트",
  ];

  const removeFromAnswerObjects = () => {
    return <RxTrash></RxTrash>;
  };

  const Answer = ({
    index,
    answerObject,
  }: {
    index: number;
    answerObject: string;
  }) => {
    return (
      <S.AnswerWrapper>
        <S.CenterDiv>{index + 1}</S.CenterDiv>
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
      <S.AddDiv>
        <RxPlusCircled style={{}} />
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
