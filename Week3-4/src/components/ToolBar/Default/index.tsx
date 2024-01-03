import { RxPlusCircled } from "react-icons/rx";
import Divider from "components/ToolBar/Divider";
import NamedButton from "components/common/NamedButton";

const Default = () => {
  const test = () => {
    console.log("플러스 눌림");
  };

  return (
    <>
      <NamedButton
        handleOnClick={test}
        icon={<RxPlusCircled />}
        text="답안 보기 생성"
      />
      <Divider />
    </>
  );
};

export default Default;
