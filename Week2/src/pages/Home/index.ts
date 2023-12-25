const Home = ($app: HTMLElement) => {
  const home = document.createElement("div");

  home.textContent = "테스트";

  $app.appendChild(home);

  return home;
};

export default Home;
