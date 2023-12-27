import { fabric } from "fabric";

type CharacterPuzzle = {
  name: string;
  areaIndex: number;
};

const renderDragCanvas = (
  answer: string,
  canvas: any,
  blindIndex: number,
  characterArr: CharacterPuzzle[]
) => {
  /** 캔버스 객체 초기화 */
  canvas.clear();

  /** borderBox 설정 */
  const borderBox = new fabric.Rect({
    width: 395,
    height: 395,
    left: 380,
    fill: "transparent",
    stroke: "#D9D9D9",
    strokeWidth: 5,
    rx: 20,
    ry: 20,
    selectable: false,
    hoverCursor: "default",
  });

  /** 가릴 부분 설정 */
  const blindBox = new fabric.Rect({
    top: Math.floor(blindIndex / 2) * 150 + 50,
    left: (blindIndex % 2) * 150,
    width: 150,
    height: 150,
    fill: "#FFFFFF",
    selectable: false,
    hoverCursor: "default",
  });

  canvas.add(blindBox);

  /** 맞출 이미지 설정 */
  fabric.Image.fromURL(
    `/src/assets/svg/characters/${answer}/ic_${answer}.svg`,
    (svg) => {
      /** 보기 svg 속성 설정 */
      svg.scaleToWidth(300);
      svg.scaleToHeight(300);
      svg.set({
        top: 50,
        selectable: false,
        hoverCursor: "default",
      });

      canvas.add(svg);

      /** 가림막을 가장 앞으로 두기 */
      blindBox.bringToFront();
    }
  );

  canvas.add(borderBox);
  borderBox.sendToBack();

  /** 퍼즐 보기들 객체 생성 */
  for (let i = 0; i < characterArr.length; i++) {
    const { name, areaIndex } = characterArr[i];

    fabric.Image.fromURL(getSvgPath(name, areaIndex), (svg) => {
      svg.scaleToWidth(150);
      svg.scaleToHeight(150);
      svg.set({
        left: (i % 2) * 170 + 420,
        top: Math.floor(i / 2) * 170 + 40,

        /** 오브젝트 크기 변경, 회전 비활성화 */
        hasControls: false,

        /** 선택했을 때 테두리 비활성화 */
        hasBorders: false,
      });

      canvas.add(svg);
    });
  }

  canvas.renderAll();
};

export default renderDragCanvas;

/** 보기 이미지들 경로 세팅 */
const getSvgPath = (name: string, areaIndex: number) => {
  return `/src/assets/svg/characters/${name}/ic_${name}-${areaIndex}.svg`;
};
