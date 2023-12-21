/** 컨텐츠 영역을 반환하는 컴포넌트 */
const ContentsDiv = (): HTMLElement => {
  const contents = document.createElement("div");
  contents.id = "contents";

  return contents;
};

export default ContentsDiv;
