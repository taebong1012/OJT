/** 그림 완성하기 페이지에서 남은 기회, 정답여부 띄우기 */
const DragRemainOpportunity = (wrongCnt: number) => {
  const remainSpan = document.createElement("span");
  remainSpan.setAttribute("id", "remain-span");
  remainSpan.style.fontSize = "1.25rem";
  remainSpan.style.marginTop = "40px";
  remainSpan.textContent = `남은 기회: ${wrongCnt}`;

  return remainSpan;
};

export default DragRemainOpportunity;
