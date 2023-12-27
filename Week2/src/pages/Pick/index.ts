import Container from "@/components/common/Container";
import Header from "@/components/common/Header";
import RemainOpportunity from "@/components/common/RemainOpportunity";
import Statement from "@/components/common/Statement";
import getRandomArr from "@/utils/Pick/getRandomObjArr";
import renderPickCanvas from "@/utils/Pick/renderPickCanvas";
import { fabric } from "fabric";

const Pick = ($app: HTMLElement) => {
  /** 랜덤 문제 생성 */
  const randomQuestion = [
    { type: "animal", text: "동물" },
    { type: "food", text: "음식" },
    { type: "tool", text: "도구" },
    { type: "ride", text: "탈 것" },
  ].sort(() => Math.random() - 0.5);

  /** 문제 번호 */
  let problemNum = 0;

  /** 틀린 횟수 */
  let wrongCnt = 3;

  /** 정답 맞춘 횟수 */
  let correctCnt = 0;

  /** 보기 클릭했을 때 작동할 콜백 함수 */
  const getIsCorrect = (type: string) => {
    if (randomQuestion[problemNum].type === type) {
      return true;
    } else {
      return false;
    }
  };

  const handleOnClick = (isCorrect: boolean) => {
    /** 답이 맞았다면 */
    if (isCorrect) {
      correctCnt++;

      /** 정답 두개 다 맞췄다면 다음 문제로 */
      if (correctCnt >= 2) {
        nextQuestion();
      }
    } else {
      /** 답이 틀렸다면 */
      wrongCnt--;

      /** 틀릴 기회 3번 모두 사용했다면 다음 문제로 */
      if (wrongCnt <= 0) {
        nextQuestion();
      } else {
        /** 아직 기회가 있다면 */
        updateRemain();
      }
    }
  };

  /** 다음 문제를 제출 */
  const nextQuestion = () => {
    /** 정답 화면을 보여줌 */
    renderPickCanvas(newCanvas, randomArr, getIsCorrect, handleOnClick, true);

    /** 1초 후에 다음 문제로 넘어감 */
    setTimeout(() => {
      problemNum++;
      correctCnt = 0;
      wrongCnt = 3;

      /** 문제가 모두 끝났다면 결과 화면으로 */
      if (problemNum >= 4) {
        window.location.href = "/result";
      } else {
        /** 문제가 아직 남았다면 다음 문제로 갱신*/
        randomArr = getRandomArr();
        renderPickCanvas(newCanvas, randomArr, getIsCorrect, handleOnClick);
        updateStatement();
        updateRemain();
      }
    }, 3000);
  };

  /** 문제 지문 업데이트 하기 */
  const updateStatement = () => {
    const newPointText = document.getElementById("point-text");
    newPointText!.textContent = `${randomQuestion[problemNum].text}`;

    const newProblemNumText = document.getElementById("problem-num-text");
    newProblemNumText!.textContent = `( ${problemNum + 1} / 4 )`;
  };

  /** 남은 횟수 업데이트 하기 */
  const updateRemain = () => {
    const remainCnt = document.getElementById("remain-cnt");
    remainCnt!.textContent = `${wrongCnt}`;
  };

  const header = Header();
  const container = Container();

  const statement = Statement(problemNum, randomQuestion[problemNum].text);

  const pickCanvas = document.createElement("canvas");
  pickCanvas.setAttribute("id", "pick-canvas");

  const remainDiv = RemainOpportunity(wrongCnt);

  container.appendChild(statement);
  container.appendChild(pickCanvas);
  container.appendChild(remainDiv);

  $app.appendChild(header);
  $app.appendChild(container);

  let randomArr = getRandomArr();

  /** fabric canvas 생성 */
  const newCanvas = new fabric.Canvas("pick-canvas");
  newCanvas.setWidth(780);
  newCanvas.setHeight(400);
  /** 그룹 선택 비활성화 */
  newCanvas.selection = false;

  /** fabric canvas 초기 렌더링 */
  renderPickCanvas(newCanvas, randomArr, getIsCorrect, handleOnClick);
};

export default Pick;
