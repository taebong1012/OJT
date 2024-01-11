import { RxPlus, RxMinus } from "react-icons/rx";
import * as S from "./style";
import { useAtom, useAtomValue } from "jotai";
import { activatedObjectAtom, objectWidthValueAtom } from "atoms";
import Drawer from "Instance/Drawer";
import { ChangeEvent } from "react";

const WidthSetButtons = () => {
  const drawer = Drawer.getInstance();
  const activatedObject = useAtomValue(activatedObjectAtom);

  const [width, setWidth] = useAtom(objectWidthValueAtom);

  const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newWidthValue = parseInt(e.target.value);
    setWidth(newWidthValue);
  };

  const setObject = () => {
    activatedObject!.set({ scaleX: width / activatedObject!.width! });
    drawer.canvas!.requestRenderAll();
  };

  const WidthDecrease = () => {
    setWidth((prevWidth) => prevWidth - 1);
    setObject();
  };

  const WidthIncrease = () => {
    setWidth((prevWidth) => prevWidth + 1);
    setObject();
  };

  return (
    <S.Container>
      <S.SetButton onClick={WidthDecrease}>
        <RxMinus />
      </S.SetButton>
      <input
        type="number"
        value={width}
        onBlur={setObject}
        onChange={handleOnChangeInput}
      />
      <S.SetButton onClick={WidthIncrease}>
        <RxPlus />
      </S.SetButton>
    </S.Container>
  );
};

export default WidthSetButtons;
