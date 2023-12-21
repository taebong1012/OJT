const PathMoveBtn = (path: string, btnText: string) => {
  /** 학습하기 버튼 */
  const pageMoveBtn: HTMLButtonElement = document.createElement("button");
  pageMoveBtn.textContent = btnText;
  pageMoveBtn.classList.add("page-move-btn");

  pageMoveBtn.style.borderRadius = "100px";
  pageMoveBtn.style.height = "80px";
  pageMoveBtn.style.width = "220px";
  pageMoveBtn.style.fontSize = "1.875rem";
  pageMoveBtn.style.fontFamily = "NPSfontBold";

  /** 버튼 클릭 시 solve 페이지로 이동 */
  pageMoveBtn.addEventListener("click", () => {
    window.location.href = path;
  });

  return pageMoveBtn;
};

export default PathMoveBtn;
