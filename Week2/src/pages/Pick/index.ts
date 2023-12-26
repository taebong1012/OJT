import Container from "@/components/common/Container";
import Header from "@/components/common/Header";
import Statement from "@/components/common/Statement";
import animalsObjArr from "@/utils/Pick/animalsObjArr";
import renderPickCanvas from "@/utils/Pick/renderPickCanvas";

const Pick = ($app: HTMLElement) => {
  const header = Header();
  const container = Container();

  /** 임시 영역 테스트 */
  container.style.border = "1px solid red";

  const statement = Statement(1, "탈 것");

  const pickCanvas = document.createElement("canvas");
  pickCanvas.setAttribute("id", "pick-canvas");

  /** 테스트 영역 확인 */
  pickCanvas.style.border = "1px solid blue";

  container.appendChild(statement);
  container.appendChild(pickCanvas);

  $app.appendChild(header);
  $app.appendChild(container);

  renderPickCanvas();
};

export default Pick;
