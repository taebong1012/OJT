/** 수식의 앞 숫자(num)만큼의 원들과 테두리가 합쳐진 svg 그룹 */
const FrontGroup = (num: number) => {
  const xmlns = "http://www.w3.org/2000/svg";

  const frontGroup = document.createElementNS(xmlns, "g");
  frontGroup.setAttribute("id", "front-group");

  /** 수식의 앞 숫자만큼 주황색 원 생성 */
  for (let i = 0; i < num; i++) {
    const frontCircle = document.createElementNS(xmlns, "use");
    frontCircle.setAttribute("href", "#circle");
    frontCircle.setAttribute("x", `${36 + 144 * i}`);
    frontCircle.setAttribute("fill", "#f27d6b");

    /** 그룹의 자식노드로 추가 */
    frontGroup.appendChild(frontCircle);
  }

  /** 주황색 원들을 감싸는 rect 생성 */
  const frontRect = document.createElementNS(xmlns, "rect");
  frontRect.setAttribute("href", "#rect");
  frontRect.setAttribute("x", "-36");
  frontRect.setAttribute("y", "-36");
  frontRect.setAttribute("rx", "80");
  frontRect.setAttribute("ry", "80");
  frontRect.setAttribute("height", "144");
  frontRect.setAttribute("width", `${144 * num}`);

  frontGroup.appendChild(frontRect);

  return frontGroup;
};

export default FrontGroup;
