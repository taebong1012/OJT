const DragAnswerText = () => {
  const answerDiv = document.createElement("div");
  answerDiv.style.fontSize = "1.875rem";
  answerDiv.style.fontFamily = "NPSfontExtrabold";
  answerDiv.style.marginTop = "10px";
  answerDiv.style.color = "#6E6BB3";
  answerDiv.style.display = "flex";
  answerDiv.style.flexDirection = "column";
  answerDiv.style.alignItems = "center";

  const comment = document.createElement("span");
  comment.setAttribute("id", "comment-span");
  comment.textContent = "오른쪽 퍼즐 조각을 알맞은 위치로 옮겨주세요!";

  const characterName = document.createElement("span");
  characterName.setAttribute("id", "character-name-span");
  characterName.style.color = "#502E1C";
  characterName.style.marginTop = "8px";

  answerDiv.appendChild(comment);
  answerDiv.appendChild(characterName);

  return answerDiv;
};

export default DragAnswerText;
