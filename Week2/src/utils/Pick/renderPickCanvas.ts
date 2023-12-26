import { fabric } from "fabric";

const renderPickCanvas = () => {
  const canvas = new fabric.Canvas("pick-canvas");
  canvas.setWidth(780);
  canvas.setHeight(400);
  /** 그룹 선택 비활성화 */
  canvas.selection = false;

  for (let i = 0; i < 6; i++) {
    const rect = new fabric.Rect({
      left: (i % 3) * 220 + 96,
      top: Math.floor(i / 3) * 180 + 40,
      width: 140,
      height: 140,
      fill: "red",
      hoverCursor: "pointer",
    });

    /** 오브젝트 선택 비활성화 */
    rect.set("selectable", false);

    canvas.add(rect);
  }

  //   canvas.renderAll();
};

export default renderPickCanvas;
