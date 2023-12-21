import jeilogo from "../../assets/svg/jeilogo.svg";
import BigBtn from "../../components/Common/DoSolveBtn";
import WrapperDiv from "../../components/Common/WrapperDiv";

const Home = ($app: HTMLElement) => {
  /** 홈 페이지 전체 레이아웃 */
  const home: HTMLElement = document.createElement("div");
  home.id = "home";

  const container: HTMLElement = document.createElement("div");
  container.id = "container";

  const wrapper: HTMLElement = WrapperDiv();

  const logo: HTMLImageElement = document.createElement("img");
  logo.src = jeilogo;
  logo.alt = "jei logo";
  logo.width = 100;

  const hometitle: HTMLElement = document.createElement("span");
  hometitle.id = "hometitle";
  hometitle.textContent = "덧셈";

  const homelevel: HTMLElement = document.createElement("span");
  homelevel.id = "homelevel";
  homelevel.textContent = "E 1b";

  /** 학습하기 버튼 */
  const doSolveBtn = BigBtn("/solve", "학습하기");
  doSolveBtn.style.marginBottom = "30px";
  doSolveBtn.style.marginTop = "60px";

  /** 최근 학습 결과 버튼 */
  const goResultBtn = BigBtn("/result", "최근 결과");

  /** wrapper에 자식 노드들 추가 */
  wrapper.appendChild(logo);
  wrapper.appendChild(hometitle);
  wrapper.appendChild(homelevel);

  /** container에 자식 노드들 추가 */
  container.appendChild(wrapper);
  container.appendChild(doSolveBtn);
  container.appendChild(goResultBtn);

  /** home에 자식 노드 추가 */
  home.appendChild(container);

  $app.appendChild(home);
};

export default Home;
