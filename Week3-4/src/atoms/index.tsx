import { atom } from "jotai";
import fabric from "controller/fabric";

/** 이미지 추가 모달의 열림 여부 */
export const isShowImageModalAtom = atom(false);

/** 현재 선택되어있는 객체들 배열 */
export const activatedObjectAtom = atom<fabric.Object | null>(null);

/** 선택한 보기 객체 배열 */
export const answerObjectsAtom = atom<fabric.Object[]>([]);

/** 선택한 보기 객체 id 배열 */
export const choiceIdArrAtom = atom<string[]>([]);

/** 정답 객체의 id */
export const answerIdAtom = atom<string>("");

/** 프리뷰 모달의 열림 여부 */
export const isShowPreviewModalAtom = atom(false);
