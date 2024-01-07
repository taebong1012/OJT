import { ReactElement } from "react";
import * as S from "./style";

type ToolBarIconWithColorProps = {
  icon: ReactElement;
  color?: string;
};

const ToolBarIconWithColor = ({
  icon,
  color = "",
}: ToolBarIconWithColorProps) => {
  return (
    <S.Container>
      <div>
        {icon}
        {color !== "" ? <S.Color color={color}></S.Color> : null}
      </div>
    </S.Container>
  );
};

export default ToolBarIconWithColor;
