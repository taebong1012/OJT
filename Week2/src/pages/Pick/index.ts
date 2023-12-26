import Container from "@/components/common/Container";
import Header from "@/components/common/Header";
import Statement from "@/components/common/Statement";
import getRandomArr from "@/utils/Pick/getRandomObjArr";
import renderPickCanvas from "@/utils/Pick/renderPickCanvas";

const Pick = ($app: HTMLElement) => {
  /** 랜덤 문제 생성 */
  const randomQuestion = ["animal", "food", "tool", "ride"].sort(
    () => Math.random() - 0.5
  );

  /** 문제 번호 */
  let problemNum = 0;

  /** 보기 클릭했을 때 작동할 콜백 함수 */
  const handleOnClick = (type: string) => {
    console.log(type);
    /** 정답일 경우 true 리턴 */
    if (randomQuestion[problemNum] === type) return true;
    /** 정답이 아닐 경우 false 리턴 */ else return false;
  };

  const header = Header();
  const container = Container();

  /** 임시 영역 테스트 */
  container.style.border = "1px solid red";

  const statement = Statement(0, randomQuestion[problemNum]);

  const pickCanvas = document.createElement("canvas");
  pickCanvas.setAttribute("id", "pick-canvas");

  /** 테스트 영역 확인 */
  pickCanvas.style.border = "1px solid blue";

  container.appendChild(statement);
  container.appendChild(pickCanvas);

  $app.appendChild(header);
  $app.appendChild(container);

  let randomArr = getRandomArr();
  renderPickCanvas(randomArr, handleOnClick);
};

export default Pick;
