import Home from "@/pages/Home";

const App = ($app: HTMLElement) => {
  /** 라우팅 처리 함수 */
  const router = () => {
    const { pathname } = window.location;

    if (pathname === "/") {
      Home($app);
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
