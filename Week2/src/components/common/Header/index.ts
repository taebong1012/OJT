const Header = () => {
  const { pathname } = window.location;

  const header: HTMLElement = document.createElement("div");
  header.style.width = "100vw";
  header.style.height = "80px";
  header.style.backgroundColor = "#28B0F2";
  header.style.display = "flex";
  header.style.justifyContent = "center";
  header.style.alignItems = "center";
  header.style.boxShadow = "0px 1px 4px 0px rgba(0, 0, 0, 0.25)";

  const headerWrapper: HTMLElement = document.createElement("div");
  headerWrapper.style.width = "880px";
  headerWrapper.style.display = "flex";
  headerWrapper.style.justifyContent = "space-between";
  headerWrapper.style.backgroundColor = "#28B0F2";

  const title: HTMLElement = document.createElement("span");
  title.style.color = "#FFFFFF";
  title.style.fontSize = "1.5rem";

  if (pathname === "/pick") {
    title.textContent = "그림 고르기";
  } else if (pathname === "/drag") {
    title.textContent = "그림 완성하기";
  } else if (pathname === "/result") {
    title.textContent = "학습 결과";
  } else {
    title.textContent = "No Page";
  }

  const level: HTMLElement = document.createElement("span");
  level.textContent = "A 3a";
  level.style.color = "#FFFFFF";
  level.style.fontSize = "1.5rem";

  headerWrapper.appendChild(title);
  headerWrapper.appendChild(level);

  header.appendChild(headerWrapper);

  return header;
};

export default Header;
