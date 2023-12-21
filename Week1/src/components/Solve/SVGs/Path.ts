/** 앞 svg 그룹과 뒤 svg 그룹을 잇는 path */
const Path = (pathStartX: number) => {
  const xmlns = "http://www.w3.org/2000/svg";

  const path = document.createElementNS(xmlns, "path");

  path.setAttribute(
    "d",
    `M ${pathStartX} -36 C ${pathStartX} -36, ${pathStartX + 120} -144, ${
      pathStartX + 240
    } -36`
  );

  path.setAttribute("stroke", "#a1bee2");
  path.setAttribute("stroke-width", "12");
  path.setAttribute("fill", "transparent");

  return path;
};

export default Path;
