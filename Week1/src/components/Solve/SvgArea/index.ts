import Def from "../SVGs/Def";
import FrontGroup from "../SVGs/FrontGroup";

const SvgArea = (num: number) => {
  const xmlns = "http://www.w3.org/2000/svg";
  const svgArea = document.createElementNS(xmlns, "svg");

  /** svg의 높이, 너비, 뷰박스 설정 */
  svgArea.setAttribute("width", "880");
  svgArea.setAttribute("height", "200");
  svgArea.setAttribute("viewBox", "0 -200 800 500");

  /** def */
  const def = Def();
  svgArea.appendChild(def);

  const frontGroup = FrontGroup(num);

  svgArea.appendChild(frontGroup);

  return svgArea;
};

export default SvgArea;
