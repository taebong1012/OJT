const PickAnswerText = () => {
  const answerSpan = document.createElement("span");
  answerSpan.setAttribute("id", "answer-span");
  answerSpan.textContent = "정답은 2개에요!";
  answerSpan.style.fontSize = "30px";
  answerSpan.style.fontFamily = "NPSfontExtrabold";
  answerSpan.style.color = "#6E6BB3";
  answerSpan.style.marginTop = "10px";

  return answerSpan;
};

export default PickAnswerText;
