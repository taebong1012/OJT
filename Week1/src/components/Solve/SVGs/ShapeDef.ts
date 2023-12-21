/** svg Def들 생성 */
const Def = (num: number) => {
  const xmlns = "http://www.w3.org/2000/svg";

  const def = document.createElementNS(xmlns, "defs");

  const circle = document.createElementNS(xmlns, "circle");

  circle.setAttribute("id", "circle");
  circle.setAttribute("r", "36");
  circle.setAttribute("cy", "36");

  /** 앞의 주황색 원을 감싸는 사각형 SVG 정의(동적으로 너비 설정) */
  const frontRect = document.createElementNS(xmlns, "rect");
  frontRect.setAttribute("id", "front-rect");
  frontRect.setAttribute("stroke", "#a1bee2");
  frontRect.setAttribute("stroke-width", "12");
  frontRect.setAttribute("fill", "transparent");
  frontRect.setAttribute("height", "144");
  frontRect.setAttribute("width", `${144 * num}`);
  frontRect.setAttribute("rx", "80");
  frontRect.setAttribute("ry", "80");

  /** 뒤의 보라색 원을 감싸는 사각형 SVG 정의(너비 144로 고정) */
  const backRect = document.createElementNS(xmlns, "rect");
  backRect.setAttribute("id", "back-rect");
  backRect.setAttribute("stroke", "#a1bee2");
  backRect.setAttribute("stroke-width", "12");
  backRect.setAttribute("fill", "transparent");
  backRect.setAttribute("height", "144");
  backRect.setAttribute("width", "144");
  backRect.setAttribute("rx", "80");
  backRect.setAttribute("ry", "80");

  def.appendChild(circle);
  def.appendChild(frontRect);
  def.appendChild(backRect);

  return def;
};

export default Def;
