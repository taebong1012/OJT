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
  let problemNum = -1;

  /** 틀린 횟수 */
  let wrongCnt = 3;

  /** 정답 캐릭터 정보 */
  let answerCharacter: CharacterInfo;

  /** 학습 시작 시간 */
  const dragStartTime = new Date().toString();

  /** 로컬 스토리지에 저장할 정답 여부 로그 */
  type log = { isComplete: boolean; wrongCnt: number };
  const dragLog: log[] = [];

  /** 문제 생성 함수 */
  const makeProblem = () => {
    /** 틀린 횟수를 3으로 초기화 */
    wrongCnt = 3;

    /** 문제번호 증가 */
    problemNum++;

    /** 문제 번호 업데이트 */
    updateStatement();

    /** 남은 기회 업데이트 */
    updateOpportunity(0);

    /** 정답 부분 업데이트 */
    updateAnswerText(false);

    /** 랜덤한 캐릭터 배열 가져오기 */
    const newRandomCharacterArr: CharacterInfo[] = randomCharacterArr();

    /** 정답으로 사용할 캐릭터와 퍼즐의 정답 인덱스 고르기 */
    /** 정답으로 사용할 캐릭터(0번째 캐릭터) */
    answerCharacter = newRandomCharacterArr[0];

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
    /** 맞았다면 */
    if (isCorrect) {
      /** 정답! 띄우기 */
      updateOpportunity(1);

      /** 정답 캐릭터 정보 띄우기 */
      updateAnswerText(true);

      /** 로그 배열에 저장 */
      pushLog(true);

      /** 지금이 마지막 문제였다면 */
      if (problemNum >= 3) {
        /** 로그 배열을 로컬 스토리지에 저장 */
        saveResult();

        setTimeout(() => {
          window.location.href = "/result";
        }, 2000);
      } else {
        /** 아직 문제가 남았다면 */
        /** 2초 후에 문제 출제 */
        setTimeout(() => {
          makeProblem();
        }, 2000);
      }
    } else {
      /** 틀렸다면 */
      wrongCnt--;

      /** 시도할 수 있는 기회를 모두 썼다면 */
      if (wrongCnt <= 0) {
        /** 정답 캐릭터 정보 띄우기 */
        updateAnswerText(true);

        /** 캔버스 내의 blindBox 지우고 정답 보여주기 */
        const canvasObjects = newCanvas.getObjects();
        for (const obj of canvasObjects) {
          if (obj.name === "blindbox") {
            obj.set({
              fill: "transparent",
              stroke: "#F27D6B",
              strokeWidth: 5,
            });
            newCanvas.renderAll();
          } else if (obj.name === answerCharacter.engName) {
            obj.set({
              stroke: "#F27D6B",
              strokeWidth: 5,
            });
            newCanvas.renderAll();
          }
        }

        /** 로그 배열에 저장 */
        pushLog(false);

        /** 지금이 마지막 문제였다면 */
        if (problemNum >= 3) {
          /** 로그 배열을 로컬 스토리지에 저장 */
          saveResult();

          /** 결과 페이지로 이동 */
          setTimeout(() => {
            window.location.href = "/result";
          }, 2000);
        } else {
          /** 아쉬워요! 띄우기 */
          updateOpportunity(-1);

          /** 아직 문제가 남았다면 */
          /** 1.5 초 후에 문제 출제 */
          setTimeout(() => {
            makeProblem();
          }, 2000);
        }
      } else {
        /** 아직 시도할 수 있는 기회가 남았다면 */
        /** 남은 기회 업데이트 */
        updateOpportunity(0);
      }
    }
  };

  /** 로그 배열에 정보 저장 */
  const pushLog = (isComplete: boolean) => {
    dragLog.push({ isComplete: isComplete, wrongCnt: wrongCnt });
  };

  /** 로컬 스토리지에 로그 저장 */
  const saveResult = () => {
    /** 학습 끝나는 시간 */
    const dragEndTime = new Date().toString();

    /** 문제 풀이 정보들을 json화 */
    const dragLogJson = JSON.stringify(dragLog);

    localStorage.setItem("dragStartTime", dragStartTime);
    localStorage.setItem("dragEndTime", dragEndTime);
    localStorage.setItem("dragLogJson", dragLogJson);
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
  const updateAnswerText = (isShowCharacterInfo: boolean) => {
    const $comment = document.getElementById("comment-span");
    const $characterName = document.getElementById("character-name-span");

    if (isShowCharacterInfo) {
      $comment!.textContent = answerCharacter.comment;
      $comment!.style.color = answerCharacter.uniqueColor;

      $characterName!.textContent = `${answerCharacter.korName}(${answerCharacter.engName})`;
    } else {
      $comment!.textContent = "오른쪽 퍼즐 조각을 알맞은 위치로 옮겨주세요!";
      $comment!.style.color = "#6E6BB3";

      $characterName!.textContent = "";
    }
  };

  /** 문제 번호 업데이트 */
  const updateStatement = () => {
    const $originStatement = document.getElementById("statement-div");
    const $newStatement = Statement(problemNum);
    $originStatement?.replaceWith($newStatement);
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
