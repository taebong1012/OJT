import {
  RxTriangleDown,
  RxMinus,
  RxPlus,
  RxBlendingMode,
  RxLetterCaseCapitalize,
} from "react-icons/rx";
import Divider from "components/ToolBar/Divider";
import NamedButton from "components/common/NamedButton";
import { changeFontFamily, changeFontSize } from "components/DrawingCanvas";
import * as S from "./style";
import ExtenseButton from "components/common/ExtenseButton";
import { useAtomValue } from "jotai";
import { activatedObjectAtom } from "atoms";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import ToolBarIconWithColor from "components/common/ToolBarIconWithColor";

const TextTools = () => {
  /** 폰트가 저장된 배열 */
  const fonts = ["Pretendard", "국민연금체", "MICE명조체", "Helvetica"];

  const activatedObject = useAtomValue(activatedObjectAtom);
  const [textObject, setTextObject] = useState<fabric.IText>();

  /** 폰트 선택란 노출 여부 */
  const [isPickerOpened, setIsPickerOpened] = useState(false);

  /** 폰트 사이즈 */
  const [fontSize, setFontSize] = useState<number>();

  useEffect(() => {
    if (activatedObject) {
      const obj = activatedObject as fabric.IText;
      setTextObject(obj);

      if (obj && obj.fontSize) {
        setFontSize(obj.fontSize);
      }
    }
  }, [activatedObject]);

  const FontFamilyPicker = () => {
    return (
      <S.PickerContainer>
        {fonts.map((font, index) => {
          return (
            <S.Font
              $font={font}
              key={index}
              onClick={() => {
                changeFontFamily(font);
              }}
            >
              {font}
            </S.Font>
          );
        })}
      </S.PickerContainer>
    );
  };

  const fontSizeDecrease = () => {
    setFontSize(fontSize! - 1);
  };

  const fontSizeIncrease = () => {
    setFontSize(fontSize! + 1);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newFontSize = parseInt(e.target.value);
    if (!isNaN(newFontSize)) {
      setFontSize(newFontSize);
    }
  };

  useEffect(() => {
    changeFontSize(fontSize!);
  }, [fontSize]);

  const buttonRef = useRef<HTMLDivElement>(null);
  /** 속성 선택 외부 영역 선택 시 닫기 */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsPickerOpened(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsPickerOpened]);

  return (
    <>
      <Divider />
      <S.FontFamilyContainer
        ref={buttonRef}
        onClick={() => {
          setIsPickerOpened(true);
        }}
      >
        <S.FontFamilyWrapper>
          {textObject?.fontFamily}
          <RxTriangleDown />
        </S.FontFamilyWrapper>

        {isPickerOpened ? <FontFamilyPicker /> : null}
      </S.FontFamilyContainer>
      <NamedButton
        handleOnClick={fontSizeDecrease}
        icon={<RxMinus />}
        text="폰트 크기 감소"
        marginRight={4}
      />
      <S.FontSizeInput
        type="number"
        value={fontSize}
        onChange={handleInputChange}
      />
      <NamedButton
        handleOnClick={fontSizeIncrease}
        icon={<RxPlus />}
        text="폰트 크기 증가"
      />
      <ExtenseButton
        icon={
          <ToolBarIconWithColor
            icon={<RxBlendingMode />}
            color={
              textObject
                ? (textObject.backgroundColor as string)
                : "transparent"
            }
          />
        }
        text="글자 배경 변경"
        type="fontBackground"
      />
      <ExtenseButton
        icon={
          <ToolBarIconWithColor
            icon={<RxLetterCaseCapitalize />}
            color={textObject ? (textObject.fill as string) : "transparent"}
          />
        }
        text="글자 색 변경"
        type="fontColor"
      />
    </>
  );
};

export default TextTools;