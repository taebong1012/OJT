import {
  RxTriangleDown,
  RxMinus,
  RxPlus,
  RxBlendingMode,
  RxLetterCaseCapitalize,
} from "react-icons/rx";
import Divider from "components/ToolBar/Divider";
import NamedButton from "components/common/NamedButton";
import * as S from "./style";
import ExtenseButton from "components/common/ExtenseButton";
import { useAtomValue } from "jotai";
import { activatedObjectAtom } from "atoms";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import ToolBarIconWithColor from "components/common/ToolBarIconWithColor";
import fabric from "controller/fabric";
import Drawer from "Instance/Drawer";

const TextTools = () => {
  /** 폰트가 저장된 배열 */
  const fonts = ["Pretendard", "국민연금체", "MICE명조체", "Helvetica"];

  const activatedObject = useAtomValue(activatedObjectAtom);
  const [textObject, setTextObject] = useState<fabric.IText>();

  /** 폰트 선택란 노출 여부 */
  const [isPickerOpened, setIsPickerOpened] = useState(false);

  /** IText 오브젝트의 원래 폰트사이즈 */
  let originFontSize: number | undefined;
  if (activatedObject && activatedObject instanceof fabric.IText) {
    originFontSize = activatedObject.fontSize;
  }

  /** 폰트 사이즈 */
  const [fontSize, setFontSize] = useState<number | undefined>(originFontSize);

  useEffect(() => {
    if (activatedObject) {
      const obj = activatedObject as fabric.IText;
      setTextObject(obj);

      if (obj && obj.fontSize) {
        setFontSize(obj.fontSize);
      }
    }
  }, [activatedObject]);

  const fontSizeDecrease = () => {
    if (fontSize) {
      setFontSize(fontSize - 1);
    }
  };

  const fontSizeIncrease = () => {
    if (fontSize) {
      setFontSize(fontSize + 1);
    }
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

  const drawer = Drawer.getInstance();

  /** 현재 선택된 텍스트의 폰트 스타일 변경 */
  const changeFontFamily = (fontFamily: string) => {
    const selectedObject = drawer.canvas!.getActiveObject() as fabric.Object;
    if (selectedObject && selectedObject instanceof fabric.IText) {
      const textObject = selectedObject as fabric.IText;
      textObject.set("fontFamily", fontFamily);

      drawer.canvas!.requestRenderAll();
    }
  };

  /** 현재 선택된 텍스트의 폰트 크기 변경 */
  const changeFontSize = (fontSize: number) => {
    if (drawer.canvas) {
      const selectedObject = drawer.canvas.getActiveObject() as fabric.Object;
      if (selectedObject && selectedObject instanceof fabric.IText) {
        const textObject = selectedObject as fabric.IText;
        textObject.set("fontSize", fontSize);

        drawer.canvas.requestRenderAll();
      }
    }
  };

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
