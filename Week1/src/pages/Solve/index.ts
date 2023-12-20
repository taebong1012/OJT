import Titlebar from "../../components/Titlebar";

const Solve = ($app: HTMLElement) => {
  const titlebar = Titlebar();

  $app.appendChild(titlebar);
};

export default Solve;
