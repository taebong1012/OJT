import DragAnswerText from "@/components/Drag/DragAnswerText";
import Container from "@/components/common/Container";
import Header from "@/components/common/Header";
import RemainOpportunity from "@/components/common/RemainOpportunity";
import Statement from "@/components/common/Statement";
import renderDragCanvas from "@/utils/Drag/renderDragCanvas";
import { fabric } from "fabric";

const Drag = ($app: HTMLElement) => {
  /** 문제 번호 */
  let problemNum = 0;

  /** 틀린 횟수 */
  let wrongCnt = 3;

  const header = Header();
  const container = Container();
  const statement = Statement(problemNum);

  const dragCanvas = document.createElement("canvas");
  dragCanvas.setAttribute("id", "drag-canvas");

  /** test 임시 border 처리 */
  dragCanvas.style.border = "1px solid blue";

  const remainDiv = RemainOpportunity(wrongCnt);
  const answerDiv = DragAnswerText();

  container.appendChild(statement);
  container.appendChild(dragCanvas);
  container.appendChild(remainDiv);
  container.appendChild(answerDiv);

  $app.appendChild(header);
  $app.appendChild(container);

  /** fabric canvas 생성 */
  const newCanvas = new fabric.Canvas("drag-canvas");
  newCanvas.setWidth(780);
  newCanvas.setHeight(400);
  /** 그룹 선택 비활성화 */
  newCanvas.selection = false;

  type Character = {
    name: string;
    areaIndex: number;
  };
  const tmpArr: Character[] = [
    {
      name: "boo",
      areaIndex: 2,
    },
    {
      name: "poi",
      areaIndex: 1,
    },
    {
      name: "doctorCo",
      areaIndex: 3,
    },
    {
      name: "bearkong",
      areaIndex: 1,
    },
  ];
  renderDragCanvas(newCanvas, 1, tmpArr);
};

export default Drag;
