import Drag from "@/pages/Drag";
import Home from "@/pages/Home";
import Pick from "@/pages/Pick";

const App = ($app: HTMLElement) => {
  /** 라우팅 처리 함수 */
  const router = () => {
    const { pathname } = window.location;

    if (pathname === "/") {
      Home($app);
    } else if (pathname === "/pick") {
      Pick($app);
    } else if (pathname === "/drag") {
      Drag($app);
    } else {
    }
  };

  /** URL이 변경되면 app의 내용을 지우고 route 함수 실행 */
  window.addEventListener("popstate", () => {
    $app.innerHTML = "";
    router();
    [];
  });

  /** router 함수 실행 */
  router();
};

export default App;
