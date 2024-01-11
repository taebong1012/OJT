import LeftSetButtons from "components/Feature/PositionSizeContainer/LeftSetButtons";
import * as S from "./style";
import { activatedObjectAtom } from "atoms";
import { useAtomValue } from "jotai";
import TopSetButtons from "components/Feature/PositionSizeContainer/TopSetButtons";
import WidthSetButtons from "components/Feature/PositionSizeContainer/WidthSetButtons";
import HeightSetButtons from "components/Feature/PositionSizeContainer/HeightSetButtons";

const PositionSizeContainer = () => {
  const activatedObject = useAtomValue(activatedObjectAtom);

  /** 선택된 객체가 있을 경우에만 렌더링 */
  if (activatedObject) {
    return (
      <S.AContainer>
        <S.AttContainer>
          <S.AttTitle>Position</S.AttTitle>
          <S.Div>
            <S.AttWrapper>
              <S.AttName>left</S.AttName>
              <LeftSetButtons />
            </S.AttWrapper>
            <S.AttWrapper>
              <S.AttName>top</S.AttName>
              <TopSetButtons />
            </S.AttWrapper>
          </S.Div>
        </S.AttContainer>
        <S.AttContainer>
          <S.AttTitle>Size</S.AttTitle>
          <S.Div>
            <S.AttWrapper>
              <S.AttName>width</S.AttName>
              <WidthSetButtons />
            </S.AttWrapper>
            <S.AttWrapper>
              <S.AttName>height</S.AttName>
              <HeightSetButtons />
            </S.AttWrapper>
          </S.Div>
        </S.AttContainer>
      </S.AContainer>
    );
  } else {
    return null;
  }
};

export default PositionSizeContainer;
