import AnswerContainer from "components/Feature/AnswerContainer";
import * as S from "./style";
import PositionSizeContainer from "components/Feature/PositionSizeContainer";

const Feature = () => {
  return (
    <S.Container>
      <AnswerContainer />
      <PositionSizeContainer />
    </S.Container>
  );
};

export default Feature;
