/** 컨텐츠 영역을 반환하는 컴포넌트 */
const ContentsDiv = (): HTMLElement => {
  const contents = document.createElement("div");

  contents.style.width = "880px";
  contents.style.height = `calc(100vh - 80px)`;
  contents.style.minHeight = "600px";
  contents.style.padding = "40px 0 80px 0";
  contents.style.display = "flex";
  contents.style.flexDirection = "column";
  contents.style.alignItems = "center";
  contents.style.position = "relative";

  return contents;
};

export default ContentsDiv;
