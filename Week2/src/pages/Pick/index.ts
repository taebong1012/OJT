import Header from "@/components/common/Header";

const Pick = ($app: HTMLElement) => {
  const header = Header();

  $app.appendChild(header);
};

export default Pick;
