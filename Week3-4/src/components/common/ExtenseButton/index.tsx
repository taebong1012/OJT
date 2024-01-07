import { ReactElement, useEffect, useRef, useState } from "react";
import * as S from "./style";

type NamedButtonProps = {
  icon: ReactElement;
  text: string;
  type: string;
};

/** 클릭 할 경우 하단에 속성 선택 팝업 띄우기 */
const ExtenseButton = ({ icon, text, type }: NamedButtonProps) => {
  /** 버튼 위에 마우스가 hover 되어있는지 여부 판단 */
  const [isMouseOver, setIsMouseOver] = useState(false);

  /** 버튼을 클릭할 경우 확장 */
  const [isShowPicker, setIsShowPicker] = useState(false);

  const buttonRef = useRef<HTMLDivElement>(null);

  /** 속성 선택 외부 영역 선택 시 닫기 */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsShowPicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsShowPicker]);

  /** 속성 타입에 따라 노출 컨텐츠 변경: 배경색, 테두리 색, 테두리 굵기, 테두리 종류, 폰트 색상 */
  const Contents = () => {
    switch (type) {
      case "backroundColor":
        return <></>;
      case "strokeColor":
        return <></>;
      case "strokeWidth":
        return <></>;
      case "strokeStyle":
        return <></>;
      case "fontColor":
        return <></>;
    }
  };

  return (
    <S.Container ref={buttonRef}>
      <button
        onClick={() => setIsShowPicker(true)}
        onMouseOver={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        {icon}
      </button>

      {/* 마우스가 hover 되어있을때만 tag 띄우기 */}
      {isMouseOver && !isShowPicker ? <S.NameArea>{text}</S.NameArea> : null}

      {/* 클릭된 상태면 속성 고르는 것 띄우기 */}
      {isShowPicker ? (
        <S.Picker>
          <Contents />
        </S.Picker>
      ) : null}
    </S.Container>
  );
};

export default ExtenseButton;
