import { RxChevronUp } from "react-icons/rx";
import Divider from "components/ToolBar/Divider";
import ExtenseButton from "components/common/ExtenseButton";

const ShapeTools = () => {
  return (
    <>
      <Divider />
      <ExtenseButton icon={<RxChevronUp />} text="앞으로" type="shape" />
      <ExtenseButton icon={<RxChevronUp />} text="앞으로" type="shape" />
      <ExtenseButton icon={<RxChevronUp />} text="앞으로" type="shape" />
      <ExtenseButton icon={<RxChevronUp />} text="앞으로" type="shape" />
    </>
  );
};

export default ShapeTools;
