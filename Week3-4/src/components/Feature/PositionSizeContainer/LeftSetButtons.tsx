import { RxPlus, RxMinus } from "react-icons/rx";
import * as S from "./style";
import { useAtom, useAtomValue } from "jotai";
import { activatedObjectAtom, objectLeftValueAtom } from "atoms";
import Drawer from "Instance/Drawer";
import { ChangeEvent } from "react";

const LeftSetButtons = () => {
  const drawer = Drawer.getInstance();
  const activatedObject = useAtomValue(activatedObjectAtom);

  const [left, setLeft] = useAtom(objectLeftValueAtom);

  const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newLeftValue = parseInt(e.target.value);
    setLeft(newLeftValue);
  };

  const setObject = () => {
    activatedObject!.set({ left: left });
    drawer.canvas!.requestRenderAll();
  };

  const LeftDecrease = () => {
    setLeft((prevLeft) => prevLeft - 1);
    setObject();
  };

  const LeftIncrease = () => {
    setLeft((prevLeft) => prevLeft + 1);
    setObject();
  };

  return (
    <S.Container>
      <S.SetButton onClick={LeftDecrease}>
        <RxMinus />
      </S.SetButton>
      <input
        type="number"
        value={left}
        onBlur={setObject}
        onChange={handleOnChangeInput}
      />
      <S.SetButton onClick={LeftIncrease}>
        <RxPlus />
      </S.SetButton>
    </S.Container>
  );
};

export default LeftSetButtons;
