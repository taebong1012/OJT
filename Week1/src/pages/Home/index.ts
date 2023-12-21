import ic_jeilogo from "../../assets/svg/ic_jeilogo.svg";
import PathMoveBtn from "../../components/Common/PathMoveBtn";
import WrapperDiv from "../../components/Common/WrapperDiv";

const Home = ($app: HTMLElement) => {
  /** 홈 페이지 전체 레이아웃 */
  const home: HTMLElement = document.createElement("div");
  home.style.backgroundColor = "#19aaaf";
  home.style.width = "100vw";
  home.style.height = "100vh";
  home.style.display = "flex";
  home.style.justifyContent = "center";
  home.style.alignItems = "center";

  const container: HTMLElement = document.createElement("div");
  container.style.minHeight = "400px";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.justifyContent = "space-between";

  const wrapper: HTMLElement = WrapperDiv();

  const logo: HTMLImageElement = document.createElement("img");
  logo.src = ic_jeilogo;
  logo.alt = "jei logo";
  logo.width = 100;

  const hometitle: HTMLElement = document.createElement("span");
  hometitle.textContent = "덧셈";
  hometitle.style.fontFamily = "NPSfontExtrabold";
  hometitle.style.color = "#ffffff";
  hometitle.style.fontSize = "5rem";

  const homelevel: HTMLElement = document.createElement("span");
  homelevel.textContent = "E 1b";
  homelevel.style.fontFamily = "NPSfontBold";
  homelevel.style.color = "#ffffff";
  homelevel.style.fontSize = " 2.5rem";

  /** 학습하기 버튼 */
  const goSolveBtn = PathMoveBtn("/solve", "학습하기");
  goSolveBtn.style.marginBottom = "30px";
  goSolveBtn.style.marginTop = "60px";

  /** 최근 학습 결과 버튼 */
  const goResultBtn = PathMoveBtn("/result", "최근 결과");

  /** wrapper에 자식 노드들 추가 */
  wrapper.appendChild(logo);
  wrapper.appendChild(hometitle);
  wrapper.appendChild(homelevel);

  /** container에 자식 노드들 추가 */
  container.appendChild(wrapper);
  container.appendChild(goSolveBtn);
  container.appendChild(goResultBtn);

  /** home에 자식 노드 추가 */
  home.appendChild(container);

  $app.appendChild(home);
};

export default Home;
