/** 정답인지 아닌지 띄울 메세지, classify(param): 0-정답입니다! 1-다시 한번생각해보세요 2-정답은 ans였어요 3-삭제 */
const AnswerComment = (classify: number, ans: number) => {
  /** answerComment 삭제 */
  const wrapper = document.getElementById("wrapper");
  if (wrapper) {
    const answerComment = wrapper.querySelector("#answer-comment");
    if (answerComment) {
      answerComment.remove();
    }
  }

  const newAnswerComment = document.createElement("div");
  newAnswerComment.id = "answer-comment";

  if (classify === 0) {
    newAnswerComment.style.color = "#19AAAF";
    newAnswerComment.textContent = "정답입니다!";
  } else if (classify === 1) {
    newAnswerComment.style.color = "#F27D6B";
    newAnswerComment.textContent = "천천히 생각해봐요!";
  } else if (classify === 2) {
    newAnswerComment.style.color = "#6E6BB3";
    newAnswerComment.textContent = `아쉬워요. 정답은 ${ans}입니다!`;
  } else {
    newAnswerComment.textContent = "";
  }

  return newAnswerComment;
};

export default AnswerComment;
