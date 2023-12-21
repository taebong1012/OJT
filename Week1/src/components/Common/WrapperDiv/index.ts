/** 가운데 정렬 및 그룹핑을 위한 div 컴포넌트 */
const WrapperDiv = (): HTMLElement => {
  const wrapper = document.createElement("div");
  wrapper.id = "wrapper";

  return wrapper;
};

export default WrapperDiv;
