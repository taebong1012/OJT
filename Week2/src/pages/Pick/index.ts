import Container from "@/components/common/Container";
import Header from "@/components/common/Header";
import Statement from "@/components/common/Statement";

const Pick = ($app: HTMLElement) => {
  const header = Header();
  const container = Container();

  /** 임시 영역 테스트 */
  container.style.border = "1px solid red";

  const statement = Statement(1, "탈 것");

  container.appendChild(statement);

  $app.appendChild(header);
  $app.appendChild(container);
};

export default Pick;
