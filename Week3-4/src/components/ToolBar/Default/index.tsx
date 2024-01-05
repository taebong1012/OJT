import {
  RxPlusCircled,
  RxText,
  RxImage,
  RxSquare,
  RxBorderSolid,
  RxCircle,
} from "react-icons/rx";
// import polygonSVG from "assets/svg/ic_polygon.svg";
import Divider from "components/ToolBar/Divider";
import NamedButton from "components/common/NamedButton";
import {
  addText,
  drawCircle,
  drawLine,
  drawRect,
} from "components/DrawingCanvas";
import { useSetAtom } from "jotai";
import { isShowImageModalAtom } from "atoms";

const Default = () => {
  const setIsShowImageModal = useSetAtom(isShowImageModalAtom);

  const test = () => {
    console.log("테스트용 함수");
  };

  const handleOnClickAddImage = () => {
    setIsShowImageModal(true);
  };

  return (
    <>
      <NamedButton
        handleOnClick={test}
        icon={<RxPlusCircled />}
        text="답안 보기 추가"
      />
      <Divider />
      <NamedButton
        handleOnClick={addText}
        icon={<RxText />}
        text="텍스트 추가"
      />
      <NamedButton
        handleOnClick={handleOnClickAddImage}
        icon={<RxImage />}
        text="이미지 추가"
      />
      <NamedButton
        handleOnClick={drawRect}
        icon={<RxSquare />}
        text="사각형 추가"
      />
      <NamedButton
        handleOnClick={drawCircle}
        icon={<RxCircle />}
        text="원 추가"
      />
      <NamedButton
        handleOnClick={drawLine}
        icon={<RxBorderSolid />}
        text="직선 추가"
      />
      {/* <NamedButton
        handleOnClick={test}
        icon={<img src={polygonSVG} />}
        text="다각형 추가"
      /> */}
      <Divider />
    </>
  );
};

export default Default;
