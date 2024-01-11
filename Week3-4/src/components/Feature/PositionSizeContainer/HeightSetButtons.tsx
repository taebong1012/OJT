import { RxPlus, RxMinus } from "react-icons/rx";
import * as S from "./style";
import { useAtom, useAtomValue } from "jotai";
import { activatedObjectAtom, objectHeightValueAtom } from "atoms";
import Drawer from "Instance/Drawer";
import { ChangeEvent } from "react";

const HeightSetButtons = () => {
  const drawer = Drawer.getInstance();
  const activatedObject = useAtomValue(activatedObjectAtom);

  const [height, setHeight] = useAtom(objectHeightValueAtom);

  const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newHeightValue = parseInt(e.target.value);
    setHeight(newHeightValue);
  };

  const setObject = () => {
    activatedObject!.set({ scaleY: height / activatedObject!.width! });
    drawer.canvas!.requestRenderAll();
  };

  const HeightDecrease = () => {
    setHeight((prevHeight) => prevHeight - 1);
    setObject();
  };

  const HeightIncrease = () => {
    setHeight((prevHeight) => prevHeight + 1);
    setObject();
  };

  return (
    <S.Container>
      <S.SetButton onClick={HeightDecrease}>
        <RxMinus />
      </S.SetButton>
      <input
        type="number"
        value={height}
        onBlur={setObject}
        onChange={handleOnChangeInput}
      />
      <S.SetButton onClick={HeightIncrease}>
        <RxPlus />
      </S.SetButton>
    </S.Container>
  );
};

export default HeightSetButtons;
