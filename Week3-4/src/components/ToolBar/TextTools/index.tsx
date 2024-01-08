import { RxChevronUp, RxTriangleDown } from "react-icons/rx";
import Divider from "components/ToolBar/Divider";
import NamedButton from "components/common/NamedButton";
import { changeFontFamily } from "components/DrawingCanvas";
import * as S from "./style";
import ExtenseButton from "components/common/ExtenseButton";
import { useAtomValue } from "jotai";
import { activatedObjectsAtom } from "atoms";
import { useEffect, useRef, useState } from "react";

const TextTools = () => {
  const test = () => {
    changeFontFamily("MICE명조체");
  };

  /** 폰트가 저장된 배열 */
  const fonts = ["Pretendard", "국민연금체", "MICE명조체", "Helvetica"];

  const activatedObjects = useAtomValue(activatedObjectsAtom);
  const [textObject, setTextObject] = useState<fabric.IText>();

  const [isPickerOpened, setIsPickerOpened] = useState(false);

  useEffect(() => {
    if (activatedObjects) {
      const obj = activatedObjects[0] as fabric.IText;
      setTextObject(obj);
    }
  }, [activatedObjects]);

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
        handleOnClick={test}
        icon={<RxChevronUp />}
        text="맨 앞으로"
      />
      {/* <ExtenseButton handleOnClick={test} icon={<RxChevronUp />} text="뒤로" />
      <NamedButton handleOnClick={test} icon={<RxChevronUp />} text="맨 뒤로" /> */}
    </>
  );
};

export default TextTools;
