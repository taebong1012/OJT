import { ReactElement, useEffect, useRef, useState } from "react";
import TransparentSvg from "assets/svg/ic_transparent.svg";
import * as S from "./style";
import {
  changeFill,
  changeFontBackground,
  changeStokeStyle,
  changeStrokeColor,
  changeStrokeWidth,
} from "components/DrawingCanvas";

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

  /** 색상 저장 배열 */
  const colors = [
    "transparent",
    "black",
    "white",
    "red",
    "blue",
    "green",
    "yellow",
    "pink",
  ];

  /** 테두리 굵기 저장 배열 */
  const widths = [1, 2, 4, 8, 12, 16];

  /** 테두리 스타일 저장 배열 */
  const strokeStyles = [
    [1, 0],
    [2, 2],
    [20, 10],
  ];

  /** 속성 타입에 따라 노출 컨텐츠 변경: 배경색, 테두리 색, 테두리 굵기, 테두리 종류, 폰트 색상 */
  const Contents = () => {
    switch (type) {
      case "backroundColor":
        return (
          <S.ColorsWrapper>
            {colors.map((color, index) => {
              if (color === "transparent") {
                return (
                  <S.Color onClick={() => changeFill(color)} key={index}>
                    <img src={TransparentSvg} />
                  </S.Color>
                );
              } else {
                return (
                  <S.Color
                    color={color}
                    key={index}
                    onClick={() => {
                      changeFill(color);
                    }}
                  />
                );
              }
            })}
          </S.ColorsWrapper>
        );
      case "strokeColor":
        return (
          <S.ColorsWrapper>
            {colors.map((color, index) => {
              if (color === "transparent") {
                return (
                  <S.Color onClick={() => changeStrokeColor(color)} key={index}>
                    <img src={TransparentSvg} />
                  </S.Color>
                );
              } else {
                return (
                  <S.Color
                    color={color}
                    key={index}
                    onClick={() => {
                      changeStrokeColor(color);
                    }}
                  />
                );
              }
            })}
          </S.ColorsWrapper>
        );
      case "strokeWidth":
        return (
          <S.StrokeContainer>
            {widths.map((width, index) => {
              return (
                <S.StrokeWrapper
                  key={index}
                  onClick={() => {
                    changeStrokeWidth(width);
                  }}
                >
                  <S.Stroke $width={width} />
                  <S.StrokeWidthText>{width}px</S.StrokeWidthText>
                </S.StrokeWrapper>
              );
            })}
          </S.StrokeContainer>
        );
      case "strokeStyle":
        return (
          <S.StrokeStyleContainer>
            {strokeStyles.map((strokeStyle, index) => {
              return (
                <S.StrokeWrapper
                  key={index}
                  onClick={() => {
                    changeStokeStyle(strokeStyle);
                  }}
                >
                  <S.Stroke $dashArray={strokeStyle}></S.Stroke>
                </S.StrokeWrapper>
              );
            })}
          </S.StrokeStyleContainer>
        );
      case "fontColor":
        return (
          <S.ColorsWrapper>
            {colors.map((color, index) => {
              if (color === "transparent") {
                return null;
              } else {
                return (
                  <S.Color
                    color={color}
                    key={index}
                    onClick={() => {
                      changeFill(color);
                    }}
                  />
                );
              }
            })}
          </S.ColorsWrapper>
        );
      case "fontBackground":
        return (
          <S.ColorsWrapper>
            {colors.map((color, index) => {
              if (color === "transparent") {
                return (
                  <S.Color
                    onClick={() => changeFontBackground(color)}
                    key={index}
                  >
                    <img src={TransparentSvg} />
                  </S.Color>
                );
              } else {
                return (
                  <S.Color
                    color={color}
                    key={index}
                    onClick={() => {
                      changeFontBackground(color);
                    }}
                  />
                );
              }
            })}
          </S.ColorsWrapper>
        );
      default:
        console.error("No ExtenseButton type");
        return <></>;
    }
  };

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
