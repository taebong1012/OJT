/** 수식을 나타내는 SVG */
const ExpressionGroup = (num: number, inputAns: number) => {
  const xmlns = "http://www.w3.org/2000/svg";
  const expressionGroup = document.createElementNS(xmlns, "g");
  expressionGroup.id = "expression-group";

  /** 중앙정렬을 위해서 각 text들의 x 좌표 구하기 */
  const numTextSvgX = 410 - 70;
  const operatorTextSvgX = 410 - 32;
  const inputAnsTextSvgX = 410 + 97;

  /** 출제된 숫자 */
  const numTextSvg = document.createElementNS(xmlns, "text");
  numTextSvg.textContent = `${num}`;
  numTextSvg.setAttribute("font-family", "NPSfontBold");
  numTextSvg.setAttribute("font-size", "2.5rem");
  numTextSvg.setAttribute("color", "#000000");
  numTextSvg.setAttribute("x", `${numTextSvgX}`);
  numTextSvg.setAttribute("y", "40");

  /** 연산자 */
  const operatorTextSvg = document.createElementNS(xmlns, "text");
  operatorTextSvg.textContent = "+ 1 = ";
  operatorTextSvg.setAttribute("font-family", "NPSfontBold");
  operatorTextSvg.setAttribute("font-size", "2.5rem");
  operatorTextSvg.setAttribute("letter-spacing", "3");
  operatorTextSvg.setAttribute("color", "#000000");
  operatorTextSvg.setAttribute("x", `${operatorTextSvgX}`);
  operatorTextSvg.setAttribute("y", "40");

  /** 사용자가 입력한 답 */
  const inputAnsTextSvg = document.createElementNS(xmlns, "text");
  inputAnsTextSvg.textContent = `${
    inputAns === -1 ? "?" : inputAns.toString()
  }`;
  inputAnsTextSvg.setAttribute("font-family", "NPSfontBold");
  inputAnsTextSvg.setAttribute("font-size", "2.5rem");
  inputAnsTextSvg.setAttribute("color", "#000000");
  inputAnsTextSvg.setAttribute("x", `${inputAnsTextSvgX}`);
  inputAnsTextSvg.setAttribute("y", "40");

  /** 사용자가 입력한 답 밑에 표시되는 밑줄 */
  const underLineSvg = document.createElementNS(xmlns, "line");
  underLineSvg.setAttribute("x1", "490");
  underLineSvg.setAttribute("x2", "550");
  underLineSvg.setAttribute("y1", "48");
  underLineSvg.setAttribute("y2", "48");
  underLineSvg.setAttribute("stroke-width", "4");
  underLineSvg.setAttribute("stroke", "#19aaaf");

  expressionGroup.appendChild(numTextSvg);
  expressionGroup.appendChild(operatorTextSvg);
  expressionGroup.appendChild(inputAnsTextSvg);
  expressionGroup.appendChild(underLineSvg);

  return expressionGroup;
};

export default ExpressionGroup;
