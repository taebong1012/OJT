import Titlebar from "../../components/Common/Titlebar";
import ContentsDiv from "../../components/Common/ContentsDiv";
import Numbuttons from "../../components/Common/Numbuttons";
import WrapperDiv from "../../components/Common/WrapperDiv";
import ShapeSvgArea from "../../components/Solve/ShapeSvgArea";
import ExpressionSvgArea from "../../components/Solve/ExpressionSvgArea";

/** 문제 해결 페이지 */
const Solve = ($app: HTMLElement) => {
  /** 참조하고 있는 랜덤 숫자 배열의 인덱스(= 문제 번호-1) */
  let index: number = 0;

  /** 1부터 8까지 랜덤하게 정렬되어 있는 숫자 배열 */
  const randomNums: number[] = Array.from(
    { length: 8 },
    (_, index) => index + 1
  ).sort(() => Math.random() - 0.5);

  /** 사용자가 입력한 숫자 */
  let inputNum: number = 0;

  /** SVG 및 수식을 렌더링 하는 함수 */
  const renderQuestion = (num: number) => {
    /** 도형 그리는 svg 영역 생성 */
    const shapeSvgArea = ShapeSvgArea(randomNums[index]);

    /** 수식 그리는 svg 영역 생성 */
    const expressionSvgArea = ExpressionSvgArea(randomNums[index], -1);

    svgDiv.innerHTML = "";
    svgDiv.appendChild(shapeSvgArea);
    svgDiv.appendChild(expressionSvgArea);
  };

  /** 사용자가 버튼 눌렸을 때 작동할 콜백 함수 */
  const handleNumButtonClick: Function = (num: number) => {
    inputNum = num;

    if (num === randomNums[index] + 1) {
      index++;
      renderQuestion(num);
      renderStatement();
    }
  };

  /** 문제 번호를 재렌더링하는 함수 */
  const renderStatement = () => {
    const newStatement: HTMLElement | null =
      document.getElementById("statement");
    newStatement!.textContent = `두 개의 숫자를 더한 값을 골라주세요! (${
      index + 1
    } / 8)`;
  };

  const titlebar = Titlebar();
  const contentsdiv = ContentsDiv();
  const numbuttons = Numbuttons(handleNumButtonClick);

  /** 설명 문장 */
  const statement = document.createElement("div");
  statement.id = "statement";
  statement.textContent = `두 개의 숫자를 더한 값을 골라주세요! (${
    index + 1
  } / 8)`;

  /** 가운데 정렬을 위한 시각적 요소와 수식 그룹핑 */
  const wrapper = WrapperDiv();

  /** svg를 통해서 시각적 요소 화면 노출 */
  const svgDiv = document.createElement("div");
  svgDiv.id = "svg-div";

  /** 페이지 로딩 시 svg 및 수식 렌더링 */
  renderQuestion(-1);

  wrapper.appendChild(svgDiv);

  contentsdiv.appendChild(statement);
  contentsdiv.appendChild(wrapper);

  $app.appendChild(titlebar);
  $app.appendChild(contentsdiv);
  $app.appendChild(numbuttons);
};

export default Solve;
