import {
  RxChevronUp,
  RxDoubleArrowUp,
  RxChevronDown,
  RxDoubleArrowDown,
} from "react-icons/rx";
import Divider from "components/ToolBar/Divider";
import NamedButton from "components/common/NamedButton";

const UpDown = () => {
  const test = () => {
    console.log("객체 위로 아래로 테스트 함수");
  };

  return (
    <>
      <Divider />
      <NamedButton handleOnClick={test} icon={<RxChevronUp />} text="앞으로" />
      <NamedButton
        handleOnClick={test}
        icon={<RxDoubleArrowUp />}
        text="맨 앞으로"
      />
      <NamedButton handleOnClick={test} icon={<RxChevronDown />} text="뒤로" />
      <NamedButton
        handleOnClick={test}
        icon={<RxDoubleArrowDown />}
        text="맨 뒤로"
      />
    </>
  );
};

export default UpDown;
