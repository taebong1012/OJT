const PathMoveBtn = (path: string, btnText: string) => {
  /** 학습하기 버튼 */
  const pageMoveBtn: HTMLButtonElement = document.createElement("button");
  pageMoveBtn.id = "page-move-btn";
  pageMoveBtn.textContent = btnText;

  /** 버튼 클릭 시 solve 페이지로 이동 */
  pageMoveBtn.addEventListener("click", () => {
    window.location.href = path;
  });

  return pageMoveBtn;
};

export default PathMoveBtn;
