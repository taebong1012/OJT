/** 문제 지문 영역 */
import ic_speaker from "@/assets/svg/ic_speaker.svg";

/** 지문 영역
 * 필수 - problemNum: 문제 인덱스(0부터 시작),
 * 선택 - point: 강조될 텍스트
 */
const Statement = (problemNum: number, point: string = "") => {
  const { pathname } = window.location;

  const statement = document.createElement("div");
  statement.style.width = "100%";
  statement.style.marginTop = "40px";
  statement.style.marginBottom = "30px";
  statement.style.display = "flex";
  statement.style.alignItems = "center";
  statement.style.fontSize = "1.5rem";

  /** 누르면 문제를 읽어주는 스피커 이미지 */
  const speechIcon = document.createElement("img");
  speechIcon.addEventListener("click", () => {
    handleSpeech(problemNum, point, pathname);
  });
  speechIcon.setAttribute("src", ic_speaker);
  speechIcon.setAttribute("width", "40");
  speechIcon.setAttribute("height", "40");
  speechIcon.style.marginRight = "10px";

  const statementWrapper = document.createElement("div");
  statementWrapper.style.display = "flex";

  if (pathname === "/pick") {
    const pointText = document.createElement("span");
    pointText.setAttribute("id", "point-text");
    pointText.textContent = point;
    pointText.style.color = "#E5AA17";

    const text = document.createElement("span");
    text.textContent = "을 골라주세요!";
    statementWrapper.appendChild(pointText);
    statementWrapper.appendChild(text);
  } else if (pathname === "/drag") {
    const text = document.createElement("span");
    text.textContent = "초코숲 친구들의 잃어버린 부분을 찾아주세요!";
    statementWrapper.appendChild(text);
  } else {
    console.log("statement Err");
  }

  const problemNumText = document.createElement("span");
  problemNumText.setAttribute("id", "problem-num-text");
  problemNumText.textContent = `(${problemNum} / 4)`;
  problemNumText.style.marginLeft = "10px";

  statement.appendChild(speechIcon);
  statement.appendChild(statementWrapper);
  statement.appendChild(problemNumText);

  /** 임시 영역 테스트 */
  statement.style.border = "1px solid green";

  return statement;
};

/** 문제를 소리로 읽어주는 함수 */
const handleSpeech = (
  problemNum: number,
  pointText: string,
  pathname: string
) => {
  const speechProblemNum = problemNum + 1;
  let speechMent = null;

  if (pathname === "/pick") {
    speechMent = `${speechProblemNum}번째 문제입니다. ${pointText}을 골라주세요.`;
  } else if (pathname === "/drag") {
    speechMent = `${speechProblemNum}번째 문제입니다. 초코숲 친구들의 잃어버린 부분을 찾아주세요.`;
  } else {
    console.log("speechMent Err");
    speechMent = "";
  }

  let utterance = new SpeechSynthesisUtterance(speechMent);

  speechSynthesis.speak(utterance);
};

export default Statement;
