import DragAnswerText from "@/components/Drag/DragAnswerText";
import Container from "@/components/common/Container";
import Header from "@/components/common/Header";
import RemainOpportunity from "@/components/common/RemainOpportunity";
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

  const header = Header();
  const container = Container();
  const statement = Statement(problemNum);

  const dragCanvas = document.createElement("canvas");
  dragCanvas.setAttribute("id", "drag-canvas");

  /** test 임시 border 처리 */
  dragCanvas.style.border = "1px solid blue";

  const remainDiv = RemainOpportunity(wrongCnt);
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

  /** 랜덤한 캐릭터 배열 가져오기 */
  const newRandomCharacterArr: CharacterInfo[] = randomCharacterArr;

  /** 정답으로 사용할 캐릭터와 퍼즐의 정답 인덱스 고르기 */
  /** 정답으로 사용할 캐릭터(0번째 캐릭터) */
  const answerCharacter: CharacterInfo = randomCharacterArr[0];

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
    characterPuzzleArr
  );
};

export default Drag;
