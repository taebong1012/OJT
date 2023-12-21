import ExpressionGroup from "../SVGs/ExpressionGroup";

/** 수식 SVG들 출력할 영역 */
const ExpressionSvgArea = (num: number, inputAns: number) => {
  const xmlns = "http://www.w3.org/2000/svg";
  const expressionSvgArea = document.createElementNS(xmlns, "svg");

  expressionSvgArea.id = "expression-svg-area";
  expressionSvgArea.setAttribute("height", "100");
  expressionSvgArea.setAttribute("width", "880");

  const expressionGroup = ExpressionGroup(num, inputAns);

  expressionSvgArea.appendChild(expressionGroup);

  return expressionSvgArea;
};

export default ExpressionSvgArea;
