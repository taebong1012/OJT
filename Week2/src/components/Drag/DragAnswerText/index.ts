const DragAnswerText = () => {
  const answerDiv = document.createElement("div");
  answerDiv.textContent = "테스트";
  answerDiv.style.border = "1px solid blue";
  answerDiv.style.fontSize = "1.875rem";
  answerDiv.style.fontFamily = "NPSfontExtrabold";
  answerDiv.style.marginTop = "10px";

  return answerDiv;
};

export default DragAnswerText;
