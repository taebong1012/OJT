import DragAnswerText from "@/components/Drag/DragAnswerText";
import DragRemainOpportunity from "@/components/Drag/DragRemainOpportunity/DragRemainOpportunity";
import Container from "@/components/common/Container";
import Header from "@/components/common/Header";
import Statement from "@/components/common/Statement";
import randomCharacterArr from "@/utils/Drag/getRamdomCharacterArr";
import renderDragCanvas from "@/utils/Drag/renderDragCanvas";
import { fabric } from "fabric";

type CharacterInfo = {
  engName: string;
  korName: string;
  comment: string;
  uniqueColor: string;
};

type CharacterPuzzle = {
  name: string;
  areaIndex: number;
};

const Drag = ($app: HTMLElement) => {
  /** 문제 번호 */
  let problemNum = 0;

  /** 틀린 횟수 */
  let wrongCnt = 3;

  /** 정답 캐릭터 정보 */
  let answerCharacter: CharacterInfo;

  /** 문제 생성 함수 */
  const makeProblem = () => {
    /** 랜덤한 캐릭터 배열 가져오기 */
    const newRandomCharacterArr: CharacterInfo[] = randomCharacterArr;

    /** 정답으로 사용할 캐릭터와 퍼즐의 정답 인덱스 고르기 */
    /** 정답으로 사용할 캐릭터(0번째 캐릭터) */
    answerCharacter = randomCharacterArr[0];

    /** 퍼즐(빈 공간)로 출제할 인덱스 */
    const blindIndex: number = Math.floor(Math.random() * 4);

    /** 캔버스에 넘길 캐릭터 퍼즐 조각 배열 */
    const characterPuzzleArr: CharacterPuzzle[] = [];

    for (const character of newRandomCharacterArr) {
      let name = character.engName;
      let areaIndex = 0;

      /** 정답 캐릭터라면 정해진 퍼즐 조각 인덱스 부여 */
      if (character.engName === answerCharacter.engName) {
        areaIndex = blindIndex;
      } else {
        /** 아니라면 퍼즐 조각 인덱스 랜덤 부여 */
        areaIndex = Math.floor(Math.random() * 4);
      }

      characterPuzzleArr.push({ name: name, areaIndex: areaIndex });
    }

    renderDragCanvas(
      answerCharacter.engName,
      newCanvas,
      blindIndex,
      characterPuzzleArr,
      handleOnDrag
    );
  };

  /** 퍼즐 조각 드래그 완료했을 때 실행할 함수 */
  const handleOnDrag = (isCorrect: boolean) => {
    if (isCorrect) {
    } else {
    }
  };

  /** 남은 기회 업데이트
   * -1: 아쉬워요!, 0: 남은 기회 표시, 1: 정답!
   */
  const updateOpportunity = (type: number) => {
    const opportunitySpan = document.getElementById("remain-span");
    if (type === -1) {
      opportunitySpan!.textContent = "아쉬워요!";
      opportunitySpan!.style.color = "#F27D6B";
    } else if (type === 0) {
      opportunitySpan!.textContent = `남은 기회: ${wrongCnt}`;
      opportunitySpan!.style.color = "#000000";
    } else if (type === 1) {
      opportunitySpan!.textContent = "정답!";
      opportunitySpan!.style.color = "#28B0F2";
    } else {
      console.log("opportuniry update Err");
    }
  };

  /** 정답 멘트 업데이트 */
  const updateAnswerText = () => {};

  /** 문제 번호 업데이트 */
  /** 문제 지문 업데이트 하기 */
  const updateStatement = () => {
    const newProblemNumText = document.getElementById("problem-num-text");
    newProblemNumText!.textContent = `( ${problemNum + 1} / 4 )`;
  };

  const header = Header();
  const container = Container();
  const statement = Statement(problemNum);

  const dragCanvas = document.createElement("canvas");
  dragCanvas.setAttribute("id", "drag-canvas");

  const remainDiv = DragRemainOpportunity(wrongCnt);
  const answerDiv = DragAnswerText();

  container.appendChild(statement);
  container.appendChild(dragCanvas);
  container.appendChild(remainDiv);
  container.appendChild(answerDiv);

  $app.appendChild(header);
  $app.appendChild(container);

  /** fabric canvas 생성 */
  const newCanvas = new fabric.Canvas("drag-canvas");
  newCanvas.setWidth(780);
  newCanvas.setHeight(400);
  /** 그룹 선택 비활성화 */
  newCanvas.selection = false;

  /** 문제 만들기 */
  makeProblem();
};

export default Drag;
