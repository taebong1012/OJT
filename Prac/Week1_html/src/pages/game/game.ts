/** 참조하고 있는 랜덤 숫자 배열의 인덱스(= 문제 번호-1) */
let index: number = 0;

/** 현재 문제 번호를 포함하는 div */
const statementDiv: HTMLElement | null = document.getElementById("statement");
if (statementDiv) {
  statementDiv.textContent = `두 개의 숫자를 더한 값을 골라주세요! (${
    index + 1
  } / 8)`;
}

/** 1부터 8까지 랜덤하게 정렬되어 있는 숫자 배열 */
const randomNums: number[] = Array.from(
  { length: 8 },
  (_, index) => index + 1
).sort(() => Math.random() - 0.5);

/** 수식의 첫번째 숫자가 표시될 span */
const questionSpan: HTMLElement | null = document.getElementById("question");
if (questionSpan) {
  questionSpan.textContent = `${randomNums[index]}`;
}

/** 답이 입력될 부분의 span */
const answerSpan: HTMLElement | null = document.getElementById("answer");
if (answerSpan) {
  /** 답을 입력하지 않았을 때의 기본 값: ? */
  answerSpan.textContent = "?";
}

/** 사용자가 클릭할 버튼들의 숫자 배열 */
const buttonNums: number[] = Array.from({ length: 10 }, (_, index) => index);

/** 0부터 9까지의 숫자버튼이 나열되어있는 div */
const numbuttonsDiv: HTMLElement | null = document.getElementById("numbuttons");
buttonNums.forEach((buttonNum) => {
  /** 사용자가 누를 숫자 버튼 */
  const newButton: HTMLButtonElement = document.createElement("button");
  newButton.textContent = buttonNum.toString();
  newButton.value = buttonNum.toString();

  /** 스타일 적용을 위해서 클래스 적용 */
  newButton.classList.add("numbutton");

  /** 클릭 이벤트 설정 */
  newButton.addEventListener("click", () => {
    handleNumButtonClick(parseInt(newButton.value));
  });

  if (numbuttonsDiv) {
    numbuttonsDiv.appendChild(newButton);
  }
});

/** 타입스크립트를 이용해서 svg 만들기 */
/** 5개의 요소 생성 */
/** frontCircle: 수식의 앞 숫자 개수만큼의 주황색 원 */
/** frontRect: 주황색 원을 감싸는 둥근 사각형 */
/** backCircle: 1개의 보라색 원 */
/** backRect: 보라색 원을 감싸는 둥근 사각형 */
/** newPath: 두 개의 둥근 사각형을 잇는 path*/

/** 문제를 시각적으로 표현한 svg가 들어갈 div */
const visualDiv: HTMLElement | null = document.getElementById("visual");

/** svg 그리는 함수 */
const drawSVG = () => {
  if (visualDiv) {
    /** 수식의 앞 숫자 */
    const frontNum: number = randomNums[index];

    const xmlns = "http://www.w3.org/2000/svg";

    /** 시각적으로 표현할 div에 자식요소로 들어갈 svg 엘리먼트 */
    const newSvg: SVGElement = document.createElementNS(xmlns, "svg");

    /** 수식의 앞 숫자만큼 존재하는 원들을 감싸는 테두리 */
    const frontRect: SVGElement = document.createElementNS(xmlns, "rect");
    frontRect.setAttribute("x", "-36");
    frontRect.setAttribute("y", "-36");
    frontRect.setAttribute("rx", "80");
    frontRect.setAttribute("ry", "80");
    frontRect.setAttribute("height", "144");
    frontRect.setAttribute("width", `${144 * frontNum}`);

    /** svg 태그에 frontRect 테두리를 자식요소로 추가 */
    newSvg.appendChild(frontRect);

    /** 수식의 앞 숫자만큼 주황색 원 생성 */
    for (let i = 0; i < frontNum; i++) {
      const frontCircle: SVGElement = document.createElementNS(xmlns, "circle");
      frontCircle.classList.add("frontcircle");
      frontCircle.setAttribute("r", "36");
      frontCircle.setAttribute("cx", `${36 + 144 * i}`);
      frontCircle.setAttribute("cy", "36");
      newSvg.appendChild(frontCircle);
    }

    /** 두 개의 둥근 사각형을 잇는 path */
    const newPath: SVGElement = document.createElementNS(xmlns, "path");
    /** path가 시작되는 x좌표 */
    const pathStartX: number = 144 * frontNum - 108;
    newPath.setAttribute(
      "d",
      `M ${pathStartX} -36 C ${pathStartX} -36, ${pathStartX + 120} -144, ${
        pathStartX + 240
      } -36`
    );
    newSvg.appendChild(newPath);

    /** path가 끝나는 x좌표 */
    const pathEndX: number = pathStartX + 240;

    /** 보라색 원을 감싸는 둥근 사각형 */
    const backRect: SVGElement = document.createElementNS(xmlns, "rect");
    backRect.setAttribute("x", `${pathEndX - 72}`);
    backRect.setAttribute("y", "-36");
    backRect.setAttribute("rx", "80");
    backRect.setAttribute("ry", "80");
    backRect.setAttribute("height", "144");
    backRect.setAttribute("width", "144");
    newSvg.appendChild(backRect);

    /** 1개의 보라색 원 */
    const backCircle: SVGElement = document.createElementNS(xmlns, "circle");
    backCircle.classList.add("backcircle");
    backCircle.setAttribute("r", "36");
    backCircle.setAttribute("cx", `${pathEndX}`);
    backCircle.setAttribute("cy", "36");
    newSvg.appendChild(backCircle);

    /** svg의 높이, 너비, 뷰박스 설정 */
    newSvg.setAttribute("width", "880");
    newSvg.setAttribute("height", "200");
    newSvg.setAttribute(
      "viewBox",
      `${(pathEndX + 108) / 2 - 400} -200 800 500`
    );

    /** svg 뿌릴 div에 생성한 svg 엘리먼트 추가 */
    visualDiv.appendChild(newSvg);
  }
};

/** svg 그리기 */
drawSVG();

/** 사용자가 버튼 눌렸을 때 작동할 콜백 함수 */
const handleNumButtonClick: Function = (num: number) => {
  /** 사용자가 입력한 값으로 수식 답 변경 */
  if (answerSpan) {
    answerSpan.textContent = `${num}`;
  }

  /** 정답이라면 */
  if (num === randomNums[index] + 1) {
    if (answerSpan) {
      answerSpan.setAttribute("color", "#04C200");
    }

    // 다음 문제를 위해서 index 증가
    index++;

    /** 문제가 모두 끝났다면 */
    if (index >= randomNums.length) {
      console.log("문제 끝");
      /** 결과 페이지로 이동시키기(예정)------------------------------- */
    } else {
      /** 문제가 아직 끝나지 않았다면 */
      /** 수식 span 업데이트 */
      if (questionSpan) {
        questionSpan.textContent = `${randomNums[index]}`;
      }

      /** 사용자 입력 답변 물음표로 다시 돌리기 */
      if (answerSpan) {
        answerSpan.setAttribute("color", "#000000");
        answerSpan.textContent = "?";
      }

      /** 문제번호 업데이트 */
      if (statementDiv) {
        statementDiv.textContent = `두 개의 숫자를 더한 값을 골라주세요! (${
          index + 1
        } / 8)`;
      }

      /** svg가 그려지는 visualDiv의 자식노드 삭제 */
      if (visualDiv) {
        visualDiv.replaceChildren();
      }
      /** 숫자에 맞춰서 svg 업데이트 */
      drawSVG();
    }
  } else {
    /** 오답이라면 */
  }
};
