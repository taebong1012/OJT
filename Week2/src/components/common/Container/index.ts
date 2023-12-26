const Container = () => {
  const container = document.createElement("div");

  container.style.width = "880px";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.alignItems = "center";

  return container;
};

export default Container;
