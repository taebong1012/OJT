/** svg Def들 생성 */
const Def = () => {
  const xmlns = "http://www.w3.org/2000/svg";

  const def = document.createElementNS(xmlns, "defs");

  const circle = document.createElementNS(xmlns, "circle");

  circle.setAttribute("id", "circle");
  circle.setAttribute("r", "36");
  circle.setAttribute("cy", "36");

  const rect = document.createElementNS(xmlns, "rect");
  rect.setAttribute("id", "rect");
  rect.setAttribute("stroke", "#a1bee2");
  rect.setAttribute("stroke-width", "12");
  rect.setAttribute("fill", "transparent");

  def.appendChild(circle);
  def.appendChild(rect);

  return def;
};

export default Def;
