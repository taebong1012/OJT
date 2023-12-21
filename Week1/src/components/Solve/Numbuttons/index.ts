/** 사용자가 클릭할 숫자 버튼 */
const Numbuttons = (handleNumButtonClick: Function): HTMLElement => {
  const numbuttons = document.createElement("div");
  numbuttons.id = "numbuttons";

  for (let num = 0; num < 10; num++) {
    const numbutton: HTMLButtonElement = document.createElement("button");
    numbutton.classList.add("numbutton");
    numbutton.textContent = num.toString();
    numbutton.value = num.toString();

    /** 클릭 이벤트 설정 */
    numbutton.addEventListener("click", () => {
      handleNumButtonClick(parseInt(numbutton.value));
    });

    numbuttons.appendChild(numbutton);
  }

  return numbuttons;
};

export default Numbuttons;
