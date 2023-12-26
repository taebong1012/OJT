import { fabric } from "fabric";

type obj = {
  svgPath: string;
  type: string;
};

const renderPickCanvas = (randomArr: obj[], handleOnClick: Function) => {
  const canvas = new fabric.Canvas("pick-canvas");
  canvas.setWidth(780);
  canvas.setHeight(400);
  /** 그룹 선택 비활성화 */
  canvas.selection = false;

  for (let i = 0; i < randomArr.length; i++) {
    const { svgPath, type } = randomArr[i];

    /** 보기 svg들 */
    fabric.Image.fromURL(svgPath, (svg) => {
      /** 보기 svg 속성 설정 */
      svg.scaleToWidth(140);
      svg.scaleToHeight(140);
      svg.set({
        left: (i % 4) * 200 + 20,
        top: Math.floor(i / 4) * 180 + 40,
        hoverCursor: "pointer",

        /** 오브젝트 선택 비활성화 */
        selectable: false,
      });

      /** 보기 그림 클릭했을 때 작동 */
      svg.on("mousedown", () => {
        const isCorrect = handleOnClick(type, i);
        console.log(isCorrect);

        /** 호버하면 기본 커서로 세팅 */
        svg.set({
          hoverCursor: "default",
        });

        /** 클릭 이벤트 제거 */
        svg.off("mousedown");

        /** 클릭되면 흑백처리 */
        svg.filters!.push(new fabric.Image.filters.Grayscale());
        svg.applyFilters();
        canvas.renderAll();

        /** 피드백 말풍선 띄우기 */
        let feedbackURL = null;
        /** 선택한 보기가 정답이라면 */
        if (isCorrect) {
          feedbackURL = "/src/assets/svg/ic_correct.svg";
        } else {
          /** 선택한 보기가 정답이 아니라면 */
          feedbackURL = "/src/assets/svg/ic_wrong.svg";
        }

        /** 피드백 말풍선 그리기 */
        fabric.Image.fromURL(feedbackURL, (feedbackSvg) => {
          feedbackSvg.scaleToWidth(40);
          feedbackSvg.scaleToHeight(40);

          feedbackSvg.set({
            left: svg.left! + 100,
            top: svg.top,
          });

          canvas.add(feedbackSvg);
        });
      });

      canvas.add(svg);
    });
  }

  canvas.renderAll();
};

export default renderPickCanvas;
