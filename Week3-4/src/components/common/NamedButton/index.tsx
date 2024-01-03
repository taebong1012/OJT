import { MouseEventHandler, ReactElement, useState } from "react";
import * as S from "./style";

type NamedButtonProps = {
  handleOnClick: MouseEventHandler;
  icon: ReactElement;
  text: string;
};

const NamedButton = ({ handleOnClick, icon, text }: NamedButtonProps) => {
  /** 버튼 위에 마우스가 hover 되어있는지 여부 판단 */
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <S.Container>
      <button
        onClick={handleOnClick}
        onMouseOver={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        {icon}
      </button>

      {/* 마우스가 hover 되어있을때만 tag 띄우기 */}
      {isMouseOver ? <S.NameArea>{text}</S.NameArea> : null}
    </S.Container>
  );
};

export default NamedButton;
