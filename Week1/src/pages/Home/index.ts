import jeilogo from "../../assets/svg/jeilogo.svg";
import WrapperDiv from "../../components/WrapperDiv";

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
  const startbtn: HTMLButtonElement = document.createElement("button");
  startbtn.id = "startbtn";
  startbtn.textContent = "학습하기";

  /** 학습하기 버튼 클릭 시 solve 페이지로 이동 */
  startbtn.addEventListener("click", () => {
    window.location.href = "/solve";
  });

  /** wrapper에 자식 노드들 추가 */
  wrapper.appendChild(logo);
  wrapper.appendChild(hometitle);
  wrapper.appendChild(homelevel);

  /** container에 자식 노드들 추가 */
  container.appendChild(wrapper);
  container.appendChild(startbtn);

  /** home에 자식 노드 추가 */
  home.appendChild(container);

  $app.appendChild(home);
};

export default Home;
