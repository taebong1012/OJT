const BigBtn = (path: string, btnText: string) => {
  /** 학습하기 버튼 */
  const bigBtn: HTMLButtonElement = document.createElement("button");
  bigBtn.id = "big-btn";
  bigBtn.textContent = btnText;

  /** 버튼 클릭 시 solve 페이지로 이동 */
  bigBtn.addEventListener("click", () => {
    window.location.href = path;
  });

  return bigBtn;
};

export default BigBtn;
