/** 문제 푸는 페이지로 이동하는 버튼 */
const startbtn = document.getElementById("startbtn");

/** 문제 푸는 페이지로 이동하는 함수 */
const redirectToSolve = () => {
  window.location.href = "./src/pages/game/game.html";
};

/** 학습하기 버튼에 클릭 이벤트 핸들러 등록 */
startbtn?.addEventListener("click", redirectToSolve);
