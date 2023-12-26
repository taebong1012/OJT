import Container from "@/components/common/Container";
import Header from "@/components/common/Header";
import Statement from "@/components/common/Statement";

const Drag = ($app: HTMLElement) => {
  const container = Container();
  const statement = Statement(1);

  container.appendChild(statement);

  $app.appendChild(Header());
  $app.appendChild(container);
};

export default Drag;
