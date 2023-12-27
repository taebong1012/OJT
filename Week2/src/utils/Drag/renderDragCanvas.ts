import { fabric } from "fabric";

type CharacterPuzzle = {
  name: string;
  areaIndex: number;
};

const renderDragCanvas = (
  answerName: string,
  canvas: any,
  blindIndex: number,
  puzzleArr: CharacterPuzzle[]
) => {
  /** 캔버스 객체 초기화 */
  canvas.clear();

  puzzleArr.sort(() => Math.random() - 0.5);

  /** borderBox 설정 */
  const borderBox = new fabric.Rect({
    width: 395,
    height: 395,
    left: 380,
    fill: "transparent",
    stroke: "#D9D9D9",
    strokeWidth: 5,
    rx: 20,
    ry: 20,
    selectable: false,
    hoverCursor: "default",
  });

  /** 가릴 부분 설정 */
  const blindBox = new fabric.Rect({
    top: Math.floor(blindIndex / 2) * 150 + 50,
    left: (blindIndex % 2) * 150,
    width: 150,
    height: 150,
    fill: "#FFFFFF",
    selectable: false,
    hoverCursor: "default",
    hasBorders: false,
  });

  canvas.add(blindBox);

  /** 맞출 이미지 설정 */
  fabric.Image.fromURL(
    `/src/assets/svg/characters/${answerName}/ic_${answerName}.svg`,
    (svg) => {
      /** 보기 svg 속성 설정 */
      svg.scaleToWidth(300);
      svg.scaleToHeight(300);
      svg.set({
        top: 50,
        selectable: false,
        hoverCursor: "default",
      });

      canvas.add(svg);

      /** 가림막을 가장 앞으로 두기 */
      blindBox.bringToFront();
    }
  );

  canvas.add(borderBox);
  borderBox.sendToBack();

  /** svg들의 원래 위치 */
  let prevLeft = 0;
  let prevTop = 0;

  /** 퍼즐 보기들 객체 생성 */
  for (let i = 0; i < puzzleArr.length; i++) {
    const { name, areaIndex } = puzzleArr[i];

    fabric.Image.fromURL(getSvgPath(name, areaIndex), (svg) => {
      svg.scaleToWidth(150);
      svg.scaleToHeight(150);
      svg.set({
        left: (i % 2) * 170 + 420,
        top: Math.floor(i / 2) * 170 + 40,

        /** 오브젝트 크기 변경, 회전 비활성화 */
        hasControls: false,

        /** 선택했을 때 테두리 비활성화 */
        hasBorders: false,

        /** svg object에 name 부여 */
        name: name,
      });

      svg.on("mousedown", () => {
        prevLeft = svg.left!;
        prevTop = svg.top!;
      });

      canvas.add(svg);
    });
  }

  /** 오브젝트 이동 감지 이벤트 설정 */
  canvas.on("object:modified", (e: fabric.IEvent) => {
    /** 움직여진 퍼즐 조각 */
    const movedPuzzle: fabric.Object = e.target as fabric.Object;

    /** 비어있는 퍼즐 위치로 갔는지 확인 */
    /** 움직인 퍼즐의 이름과 답의 이름이 같고, 비어있는 위치 근처로 갔다면 알맞게 재배치 */
    if (movedPuzzle.name === answerName && isNear(movedPuzzle, blindBox)) {
      /** 캔버스 내 오브젝트 이동하지 못하게 처리 */
      canvas.selection = false;

      /** 퍼즐 조각을 애니메이션으로 알맞게 이동시키기 */
      movedPuzzle.animate(
        { left: blindBox.left!, top: blindBox.top! },
        {
          duration: 500,
          onChange: canvas.renderAll.bind(canvas),
          onComplete: () => {
            console.log("이동 완료!");
          },
        }
      );
    } else {
      /** 퍼즐 조각을 원래 자리로 다시 이동시키기 */
      /** 퍼즐 조각을 애니메이션으로 알맞게 이동시키기 */
      movedPuzzle.animate(
        { left: prevLeft, top: prevTop },
        {
          duration: 500,
          onChange: canvas.renderAll.bind(canvas),
          onComplete: () => {
            console.log("이동 완료!");
          },
        }
      );
    }
  });

  canvas.renderAll();
};

export default renderDragCanvas;

/** 보기 이미지들 경로 세팅 */
const getSvgPath = (name: string, areaIndex: number) => {
  return `/src/assets/svg/characters/${name}/ic_${name}-${areaIndex}.svg`;
};

/** 근처에 있는지 여부 리턴하는 함수 */
const isNear = (movedPuzzle: fabric.Object, blindBox: fabric.Object) => {
  if (
    movedPuzzle.left !== undefined &&
    movedPuzzle.top !== undefined &&
    blindBox.left !== undefined &&
    blindBox.top !== undefined
  ) {
    const diffX = Math.abs(movedPuzzle.left - blindBox.left);
    const diffY = Math.abs(movedPuzzle.top - blindBox.top);

    /** 가로세로가 40 이하로 차이날 경우에만 빈 공간 근처라고 판단 */
    if (diffX <= 40 && diffY <= 40) {
      console.log("근처!");
      return true;
    } else {
      console.log("근처 노노");
      return false;
    }
  } else {
    console.log("movedPuzzle position Err");
    return false;
  }
};
