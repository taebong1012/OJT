const DragAnswerText = () => {
  const answerDiv = document.createElement("div");
  answerDiv.textContent = "오른쪽 퍼즐 조각을 알맞은 위치로 옮겨주세요!";
  answerDiv.style.fontSize = "1.875rem";
  answerDiv.style.fontFamily = "NPSfontExtrabold";
  answerDiv.style.marginTop = "10px";
  answerDiv.style.color = "#6E6BB3";

  return answerDiv;
};

export default DragAnswerText;
