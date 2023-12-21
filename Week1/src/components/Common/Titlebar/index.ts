const Titlebar = (): HTMLElement => {
  /** 타이틀바 레이아웃 div */
  const titlebar: HTMLElement = document.createElement("div");
  titlebar.id = "titlebar";

  const title: HTMLElement = document.createElement("div");
  title.id = "title";

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
