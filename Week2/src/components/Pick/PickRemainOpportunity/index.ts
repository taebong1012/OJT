const PickRemainOpportunity = (wrongCnt: number) => {
  const remainDiv = document.createElement("div");
  remainDiv.style.fontSize = "1.25rem";
  remainDiv.style.marginTop = "40px";
  remainDiv.style.display = "flex";
  remainDiv.textContent = "남은 기회:ㅤ";

  const remainCnt = document.createElement("span");
  remainCnt.setAttribute("id", "remain-cnt");
  remainCnt.textContent = `${wrongCnt}`;

  remainDiv.appendChild(remainCnt);

  return remainDiv;
};

export default PickRemainOpportunity;
