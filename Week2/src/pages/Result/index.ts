import Container from "@/components/common/Container";
import Header from "@/components/common/Header";

const Result = ($app: HTMLElement) => {
  const header = Header();
  const container = Container();

  $app.appendChild(header);
  $app.appendChild(container);
};

export default Result;
