/** 사용자가 클릭할 숫자 버튼 */
const Numbuttons = (handleNumButtonClick: Function): HTMLElement => {
  const numbuttons = document.createElement("div");
  numbuttons.id = "numbuttons";

  numbuttons.style.width = "690px";
  numbuttons.style.height = "60px";
  numbuttons.style.display = "flex";
  numbuttons.style.justifyContent = "space-between";
  numbuttons.style.marginTop = "20px";

  for (let num = 0; num < 10; num++) {
    const numbutton: HTMLButtonElement = document.createElement("button");
    numbutton.classList.add("numbutton");
    numbutton.textContent = num.toString();
    numbutton.value = num.toString();

    numbutton.style.borderRadius = "10px";
    numbutton.style.height = "100%";
    numbutton.style.width = "60px";
    numbutton.style.fontSize = "2.5rem";
    numbutton.style.fontFamily = "NPSfontExtrabold";

    /** 클릭 이벤트 설정 */
    numbutton.addEventListener("click", () => {
      handleNumButtonClick(parseInt(numbutton.value));
    });

    numbuttons.appendChild(numbutton);
  }

  return numbuttons;
};

export default Numbuttons;
