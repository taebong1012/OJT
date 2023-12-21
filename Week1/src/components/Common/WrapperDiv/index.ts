/** 가운데 정렬 및 그룹핑을 위한 div 컴포넌트 */
const WrapperDiv = (): HTMLElement => {
  const wrapper = document.createElement("div");

  wrapper.style.height = `calc(100% - 110px)`;
  wrapper.style.display = "flex";
  wrapper.style.flexDirection = "column";
  wrapper.style.justifyContent = "center";
  wrapper.style.alignItems = "center";
  wrapper.style.paddingTop = "20px";

  return wrapper;
};

export default WrapperDiv;
