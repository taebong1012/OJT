/** 페이지 이동 버튼
 * 필수 - href: 이동할 경로
 * 필수 - text: 버튼 텍스트
 * 선택 - width: 버튼 너비(기본값: 240)
 * 선택 = height: 버튼 높이(기본값: 78)
 */
const Button = (
  href: string,
  text: string,
  width: number = 240,
  height: number = 78
) => {
  const button: HTMLButtonElement = document.createElement("button");

  button.classList.add("custom-button");

  button.textContent = text;

  button.style.width = `${width}px`;
  button.style.height = `${height}px`;
  button.style.color = "#000000";
  button.style.border = "none";
  button.style.borderRadius = "100px";
  button.style.fontFamily = "NPSfontBold";
  button.style.fontSize = "1.875rem";

  /** 버튼 클릭시 해당 페이지로 이동 */
  button.onclick = () => {
    window.location.href = href;
  };

  return button;
};

export default Button;
