import { RxPlus, RxMinus } from "react-icons/rx";
import * as S from "./style";
import { useAtom, useAtomValue } from "jotai";
import { activatedObjectAtom, objectTopValueAtom } from "atoms";
import Drawer from "Instance/Drawer";
import { ChangeEvent } from "react";

const TopSetButtons = () => {
  const drawer = Drawer.getInstance();
  const activatedObject = useAtomValue(activatedObjectAtom);

  const [top, setTop] = useAtom(objectTopValueAtom);

  const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newTopValue = parseInt(e.target.value);
    setTop(newTopValue);
  };

  const setObject = () => {
    activatedObject!.set({ top: top });
    drawer.canvas!.requestRenderAll();
  };

  const TopDecrease = () => {
    setTop((prevTop) => prevTop - 1);
    setObject();
  };

  const TopIncrease = () => {
    setTop((prevTop) => prevTop + 1);
    setObject();
  };

  return (
    <S.Container>
      <S.SetButton onClick={TopDecrease}>
        <RxMinus />
      </S.SetButton>
      <input
        type="number"
        value={top}
        onBlur={setObject}
        onChange={handleOnChangeInput}
      />
      <S.SetButton onClick={TopIncrease}>
        <RxPlus />
      </S.SetButton>
    </S.Container>
  );
};

export default TopSetButtons;
