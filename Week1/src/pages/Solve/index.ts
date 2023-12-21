import Titlebar from "../../components/Common/Titlebar";
import ContentsDiv from "../../components/Common/ContentsDiv";
import Numbuttons from "../../components/Solve/Numbuttons";
import WrapperDiv from "../../components/Common/WrapperDiv";
import ShapeSvgArea from "../../components/Solve/ShapeSvgArea";
import ExpressionSvgArea from "../../components/Solve/ExpressionSvgArea";
import AnswerComment from "../../components/Solve/AnswerComment";

/** 문제 해결 페이지 */
const Solve = ($app: HTMLElement) => {
  /** 참조하고 있는 랜덤 숫자 배열의 인덱스(= 문제 번호-1) */
  let index: number = 0;

  /** 한 문제당 틀린 횟수 */
  let wrongCnt: number = 0;

  /** 1부터 8까지 랜덤하게 정렬되어 있는 숫자 배열 */
  const randomNums: number[] = Array.from(
    { length: 8 },
    (_, index) => index + 1
  ).sort(() => Math.random() - 0.5);

  /** 사용자가 누르는 숫자 버튼을 활성화/비활성화하는 함수 */
  const makeButtonDisable = (isDisabled: boolean) => {
    const numButtons = document.getElementsByClassName(
      "numbutton"
    ) as HTMLCollectionOf<HTMLButtonElement>;
    for (let i = 0; i < numButtons.length; i++) {
      numButtons[i].disabled = isDisabled;
    }
  };

  /** SVG 및 수식을 렌더링 하는 함수 */
  const renderQuestion = (inputAns: number) => {
    /** 도형 그리는 svg 영역 생성 */
    const shapeSvgArea = ShapeSvgArea(randomNums[index]);

    /** 수식 그리는 svg 영역 생성 */
    const expressionSvgArea = ExpressionSvgArea(randomNums[index], inputAns);

    svgDiv.innerHTML = "";
    svgDiv.appendChild(shapeSvgArea);
    svgDiv.appendChild(expressionSvgArea);
  };

  /** 정답인지 아닌지 띄울 메세지, classify(param): 0-정답입니다! 1-다시 한번생각해보세요 2-정답은 ans였어요 3-삭제 */
  const renderAnswerComment = (classify: number, ans: number) => {
    const answerComment = AnswerComment(classify, ans);

    wrapper.appendChild(answerComment);
  };

  /** 사용자가 버튼 눌렸을 때 작동할 콜백 함수 */
  const handleNumButtonClick: Function = (inputAns: number) => {
    /** 버튼 비활성화 시키기 */
    makeButtonDisable(true);

    const ans = randomNums[index] + 1;

    /** 수식에 사용자가 입력한 숫자 표시 */
    renderQuestion(inputAns);

    /** 정답인지 아닌지 메세지 띄우기 */
    if (inputAns === ans) {
      /** 정답입니다! */
      renderAnswerComment(0, ans);
      /** 틀린 횟수 초기화 */
      wrongCnt = 0;
    } else {
      /** 오답 횟수 증가 */
      wrongCnt++;
      /** 조금 더 생각해보세요! */
      if (wrongCnt < 3) {
        renderAnswerComment(1, ans);
      } else {
        /** 정답은 ans였어요 */
        renderAnswerComment(2, ans);
      }
    }

    /** 정답을 확인할 시간을 위해서 1.5초 후 동작 */
    setTimeout(() => {
      /** 맞았을 경우 */
      if (inputAns === ans) {
        /** 문제를 모두 풀었다면 */
        if (index >= randomNums.length - 1) {
          window.location.href = "/result";
        } else {
          /** 문제가 남아있다면 */
          index++;
          renderStatement();
          renderAnswerComment(3, ans);
        }
      } else {
        /** 틀렸을 경우 */
        /** 3번 이상 틀렸을 경우 */
        if (wrongCnt >= 3) {
          index++;
          renderStatement();
          renderAnswerComment(3, ans);
          wrongCnt = 0;
        } else {
          /** 아직 기회가 있을 경우 */
          renderAnswerComment(3, ans);
        }
      }

      /** -1 전달할 경우 물음표(?)로 표시 */
      renderQuestion(-1);

      /** 버튼 활성화 시키기 */
      makeButtonDisable(false);
    }, 1500);
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

  renderAnswerComment(3, -1);

  contentsdiv.appendChild(statement);
  contentsdiv.appendChild(wrapper);

  $app.appendChild(titlebar);
  $app.appendChild(contentsdiv);
  $app.appendChild(numbuttons);
};

export default Solve;
