const Titlebar = (): HTMLElement => {
  /** 타이틀바 레이아웃 div */
  const titlebar: HTMLElement = document.createElement("div");
  titlebar.style.width = "100vw";
  titlebar.style.height = "80px";
  titlebar.style.backgroundColor = "#19aaaf";
  titlebar.style.display = "flex";
  titlebar.style.alignItems = "center";
  titlebar.style.justifyContent = "center";

  const title: HTMLElement = document.createElement("div");
  title.style.fontFamily = "NPSfontBold";
  title.style.fontSize = "1.5rem";
  title.style.color = "#ffffff";
  title.style.width = "100%";
  title.style.minWidth = "880px";
  title.style.maxWidth = "880px";
  title.style.display = "flex";
  title.style.justifyContent = "space-between";

  const maintitle: HTMLElement = document.createElement("span");

  /** 경로에 따라서 요소 변경 */
  const { pathname } = window.location;
  if (pathname === "/solve") {
    /** 메인 타이틀 제목 */
    maintitle.textContent = "문제 해결";
  } else if (pathname === "/result") {
    maintitle.textContent = "학습 결과";
  }

  /** 현재 학습 단계 레벨 */
  const level: HTMLElement = document.createElement("span");
  level.textContent = "E 1b";

  title.appendChild(maintitle);
  title.appendChild(level);

  titlebar.appendChild(title);

  return titlebar;
};

export default Titlebar;
