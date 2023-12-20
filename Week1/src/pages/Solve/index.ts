import Titlebar from "../../components/Titlebar";
import ContentsDiv from "../../components/ContentsDiv";
import Numbuttons from "../../components/Numbuttons";
import WrapperDiv from "../../components/WrapperDiv";

/** 참조하고 있는 랜덤 숫자 배열의 인덱스(= 문제 번호-1) */
let index: number = 0;

/** 1부터 8까지 랜덤하게 정렬되어 있는 숫자 배열 */
const randomNums: number[] = Array.from(
  { length: 8 },
  (_, index) => index + 1
).sort(() => Math.random() - 0.5);

/** 사용자가 입력한 숫자 */
let inputNum: number = 0;

/** 사용자가 버튼 눌렸을 때 작동할 콜백 함수 */
const handleNumButtonClick: Function = (num: number) => {
  inputNum = num;
};

/** 문제 해결 페이지 */
const Solve = ($app: HTMLElement) => {
  const titlebar = Titlebar();
  const contentsdiv = ContentsDiv();
  const numbuttons = Numbuttons(handleNumButtonClick);

  /** 가운데 정렬을 위한 시각적 요소와 수식 그룹핑 */
  const wrapper = WrapperDiv();

  /** svg를 통해서 시각적 요소 화면 노출 */
  const svgdiv = document.createElement("div");
  svgdiv.id = "svgdiv";

  /** 수식 화면 노출 */
  const expression = document.createElement("div");
  expression.id = "expression";

  /** 1~8까지의 랜덤한 숫자 */
  const question = document.createElement("span");
  question.textContent = randomNums[index].toString();
  question.id = "question";

  /** + 1 = 식 */
  const plus = document.createElement("span");
  plus.textContent = " + 1 = ";

  /** 사용자의 답 */
  const answer = document.createElement("span");
  answer.textContent = inputNum.toString();

  expression.appendChild(question);
  expression.appendChild(plus);
  expression.appendChild(answer);

  wrapper.appendChild(svgdiv);
  wrapper.appendChild(expression);

  contentsdiv.appendChild(wrapper);

  $app.appendChild(titlebar);
  $app.appendChild(contentsdiv);
  $app.appendChild(numbuttons);
};

export default Solve;
