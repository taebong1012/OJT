const BackGroup = (pathEndX: number) => {
  const xmlns = "http://www.w3.org/2000/svg";

  const backGroup = document.createElementNS(xmlns, "g");
  backGroup.setAttribute("id", "back-group");

  const backCircle = document.createElementNS(xmlns, "use");
  backCircle.setAttribute("href", "#circle");
  backCircle.setAttribute("x", `${pathEndX}`);
  backCircle.setAttribute("fill", "#6e6bb3");

  const backRect = document.createElementNS(xmlns, "use");
  backRect.setAttribute("href", "#back-rect");
  backRect.setAttribute("x", `${pathEndX - 72}`);
  backRect.setAttribute("y", "-36");
  backRect.setAttribute("rx", "80");
  backRect.setAttribute("ry", "80");

  backGroup.appendChild(backCircle);
  backGroup.appendChild(backRect);

  return backGroup;
};

export default BackGroup;
