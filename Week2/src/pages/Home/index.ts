import Wrapper from "@/components/common/Wrapper";
import jeilogo from "../../assets/svg/ic_jeilogo.svg";
import Button from "@/components/common/Button/button";

const Home = ($app: HTMLElement) => {
  const home = document.createElement("div");
  home.style.width = "100vw";
  home.style.height = "100vh";
  home.style.backgroundColor = "#28B0F2";
  home.style.display = "flex";
  home.style.justifyContent = "center";
  home.style.alignItems = "center";

  const mainTitleWrapper: HTMLElement = document.createElement("div");
  mainTitleWrapper.style.width = "100%";
  mainTitleWrapper.style.display = "flex";
  mainTitleWrapper.style.flexDirection = "column";
  mainTitleWrapper.style.alignItems = "center";

  const logo: HTMLImageElement = document.createElement("img");
  logo.src = jeilogo;
  logo.alt = "jei logo";
  logo.width = 100;

  const title: HTMLElement = document.createElement("span");
  title.textContent = "인지";
  title.style.color = "#FFFFFF";
  title.style.fontSize = "5rem";
  title.style.marginBottom = "140px";
  title.style.fontFamily = "NPSfontExtrabold";

  const goToPickGameBtn = Button("pickgame", "도형 고르기");
  goToPickGameBtn.style.marginBottom = "30px";

  const goToDragGameBtn = Button("draggame", "그림 완성하기");
  goToDragGameBtn.style.marginBottom = "40px";

  const goToResultA = document.createElement("a");
  goToResultA.textContent = "최근 학습 결과";
  goToResultA.setAttribute("href", "/result");
  goToResultA.style.fontSize = "1.25rem";
  goToResultA.style.color = "#FFFFFF";
  goToResultA.style.fontFamily = "NPSFontRegular";

  const wrapper = Wrapper();

  mainTitleWrapper.appendChild(logo);
  mainTitleWrapper.appendChild(title);
  mainTitleWrapper.appendChild(goToPickGameBtn);
  mainTitleWrapper.appendChild(goToDragGameBtn);
  mainTitleWrapper.appendChild(goToResultA);

  wrapper.appendChild(mainTitleWrapper);

  home.appendChild(wrapper);

  $app.appendChild(home);
};

export default Home;
