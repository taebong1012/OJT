import Titlebar from "../../components/Titlebar";

const Home = ($app: HTMLElement) => {
  const titlebar = Titlebar();

  $app.appendChild(titlebar);
};

export default Home;
