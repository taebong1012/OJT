import { fabric } from "fabric";

type CharacterPuzzle = {
  name: string;
  areaIndex: number;
};

const renderDragCanvas = (
  answerName: string,
  canvas: any,
  blindIndex: number,
  puzzleArr: CharacterPuzzle[],
  handleOnDrag: Function
) => {
  /** 캔버스 객체 초기화 */
  canvas.clear();
  canvas.off("object:modified");

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
    name: "blindbox",
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
        name: "characterAnswerImg",
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

  /** 캔버스가 자체적으로 갖고 있는 틀린 횟수 */
  let wrongCnt = 3;

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

  /** 캔버스 내의 퍼즐 조각들을 움직이거나 움직일 수 없게 하는 함수 */
  const makePuzzlesMove = (canMove: boolean) => {
    canvas.forEachObject((svg: fabric.Object) => {
      /** name 속성이 있을 경우(퍼즐 조각)에만 이동 활성화/비활성화 */
      if (svg.name !== undefined && svg.name !== "blindBox") {
        svg.selectable = canMove;

        if (canMove) {
          svg.on("mousedown", () => {
            prevLeft = svg.left!;
            prevTop = svg.top!;
          });
        } else {
          svg.off("mousedown");
        }
      }
    });
  };

  /** 캔버스의 객체 이동이 완료됐을 때 실행될 함수 */
  const handleObjectModified = (e: fabric.IEvent) => {
    /** 움직여진 퍼즐 조각 */
    const movedPuzzle: fabric.Object = e.target as fabric.Object;

    /** 선택 된 요소 선택 해제 */
    canvas.discardActiveObject();

    /** 옮겨진 퍼즐을 가장 앞으로 데려오기 */
    movedPuzzle.bringToFront();

    /** 다른 요소들 컨트롤 비활성화 */
    makePuzzlesMove(false);

    /** 비어있는 퍼즐 위치로 갔는지 확인 */
    /** 움직인 퍼즐의 이름과 답의 이름이 같고, 비어있는 위치 근처로 갔다면 알맞게 재배치 */
    if (movedPuzzle.name === answerName && isNear(movedPuzzle, blindBox)) {
      /** 퍼즐 조각을 애니메이션으로 알맞게 이동시키기 */
      movedPuzzle.animate(
        { left: blindBox.left!, top: blindBox.top! },
        {
          duration: 500,
          onChange: canvas.renderAll.bind(canvas),
          onComplete: () => {
            handleOnDrag(true);
          },
        }
      );
    } else {
      /** 숏 피드백 띄우기 */
      fabric.Image.fromURL("/src/assets/svg/ic_wrong.svg", (svg) => {
        svg.scaleToWidth(40);
        svg.scaleToHeight(40);
        svg.set({
          left: movedPuzzle.left! + 150,
          top: movedPuzzle.top! - 40,

          /** 오브젝트 선택 비활성화 */
          selectable: false,

          /** 선택했을 때 테두리 비활성화 */
          hasBorders: false,
        });

        canvas.add(svg);

        /** 0.5초 후에 숏피드백을 제거하고 퍼즐 조각을 애니메이션으로 원래 자리로 다시 이동 */
        setTimeout(() => {
          /** 피드백 말풍선 제거 */
          canvas.remove(svg);

          movedPuzzle.animate(
            { left: prevLeft, top: prevTop },
            {
              duration: 500,
              onChange: canvas.renderAll.bind(canvas),
              onComplete: () => {
                handleOnDrag(false);
                wrongCnt--;
                /** 기회가 아직 남아있다면 퍼즐 조각 이동 활성화 */
                if (wrongCnt > 0) {
                  makePuzzlesMove(true);
                }
              },
            }
          );
        }, 500);
      });
    }
  };

  /** 오브젝트 이동 감지 이벤트 설정 */
  canvas.on("object:modified", handleObjectModified);

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
      return true;
    } else {
      return false;
    }
  } else {
    console.log("movedPuzzle position Err");
    return false;
  }
};
