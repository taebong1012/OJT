import { atom } from "jotai";

/** 모달의 열림 여부 */
export const isShowImageModalAtom = atom(false);

/** 현재 선택되어있는 객체들 배열 */
export const activatedObjectsAtom = atom([]);

/** 현재 선택되어있는 객체들의 타입
 * "none": 선택 X
 * "shape": 삼각형, 사각형,
 * "line": 직선
 * "image": 이미지
 * "text": 텍스트
 * "group": 그룹(다중 선택)
 * "choice": 정답 보기
 */
export const activatedObjectTypeAtom = atom("none");
