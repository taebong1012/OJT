import { atom } from "jotai";
import fabric from "controller/fabric";

/** 모달의 열림 여부 */
export const isShowImageModalAtom = atom(false);

/** 현재 선택되어있는 객체들 배열 */
export const activatedObjectAtom = atom<fabric.Object | null>(null);
