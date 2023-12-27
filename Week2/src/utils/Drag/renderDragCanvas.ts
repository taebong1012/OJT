import { fabric } from "fabric";

type character = {
  svgPath: string;
  name: string;
};

const renderDragCanvas = (
  canvas: any,
  blindIndex: number,
  characterArr: character[]
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
  fabric.Image.fromURL("/src/assets/svg/characters/ic_poi.svg", (svg) => {
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
  });

  canvas.add(borderBox);
  borderBox.sendToBack();

  canvas.renderAll();
};

export default renderDragCanvas;
