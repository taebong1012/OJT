import {
  RxPlusCircled,
  RxText,
  RxImage,
  RxSquare,
  RxBorderSolid,
} from "react-icons/rx";
import polygonSVG from "assets/svg/ic_polygon.svg";
import Divider from "components/ToolBar/Divider";
import NamedButton from "components/common/NamedButton";

const Default = () => {
  const test = () => {
    console.log("테스트용 함수");
  };

  return (
    <>
      <NamedButton
        handleOnClick={test}
        icon={<RxPlusCircled />}
        text="답안 보기 추가"
      />
      <Divider />
      <NamedButton handleOnClick={test} icon={<RxText />} text="텍스트 추가" />
      <NamedButton handleOnClick={test} icon={<RxImage />} text="이미지 추가" />
      <NamedButton
        handleOnClick={test}
        icon={<RxSquare />}
        text="사각형 추가"
      />
      <NamedButton
        handleOnClick={test}
        icon={<RxBorderSolid />}
        text="직선 추가"
      />
      <NamedButton
        handleOnClick={test}
        icon={<img src={polygonSVG} />}
        text="다각형 추가"
      />
      <Divider />
    </>
  );
};

export default Default;
