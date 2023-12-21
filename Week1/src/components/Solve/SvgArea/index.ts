import Def from "../SVGs/Def";
import FrontGroup from "../SVGs/FrontGroup";
import Path from "../SVGs/path";
import BackGroup from "../SVGs/BackGroup";

const SvgArea = (num: number) => {
  const xmlns = "http://www.w3.org/2000/svg";
  const svgArea = document.createElementNS(xmlns, "svg");

  /** path가 시작되는 x좌표 */
  const pathStartX: number = 144 * num - 108;

  /** path가 끝나는 x좌표 */
  const pathEndX: number = pathStartX + 240;

  /** svg의 높이, 너비, 뷰박스 설정 */
  svgArea.setAttribute("width", "880");
  svgArea.setAttribute("height", "200");

  /** 뷰박스의 x좌표 이동을 통해서 svg 가운데 정렬 */
  svgArea.setAttribute("viewBox", `${(pathEndX + 108) / 2 - 400} -200 800 500`);

  /** def */
  const def = Def(num);
  svgArea.appendChild(def);

  /** SVG 이미지 그룹 */
  const svgGroup = document.createElementNS(xmlns, "g");

  const frontGroup = FrontGroup(num);
  const path = Path(pathStartX);
  const backGroup = BackGroup(pathEndX);

  svgGroup.appendChild(frontGroup);
  svgGroup.appendChild(path);
  svgGroup.appendChild(backGroup);

  svgArea.appendChild(svgGroup);

  return svgArea;
};

export default SvgArea;
