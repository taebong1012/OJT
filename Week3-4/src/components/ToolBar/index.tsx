import Divider from "components/ToolBar/Divider";
import * as S from "./style";
import { RxPlusCircled } from "react-icons/rx";

const ToolBar = () => {
  return (
    <S.Container>
      <button>
        <RxPlusCircled />
      </button>
      <Divider />
    </S.Container>
  );
};

export default ToolBar;
