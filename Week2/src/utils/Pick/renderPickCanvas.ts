import { fabric } from "fabric";

type obj = {
  svgPath: string;
  type: string;
};

const renderPickCanvas = (
  canvas: any,
  randomArr: obj[],
  getIsCorrect: Function,
  handleOnClick: Function,
  isShowAnswer: boolean = false
) => {
  /** 캔버스 객체 초기화 */
  canvas.clear();

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
        hoverCursor: `${isShowAnswer ? "default" : "pointer"}`,

        /** 오브젝트 선택 비활성화 */
        selectable: false,
      });

      /** 지금의 SVG가 정답인지 아닌지 판단 */
      const isCorrect = getIsCorrect(type);

      /** 모든 정답을 보여주는 상황이라면 */
      if (isShowAnswer) {
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
      } else {
        /** 모든 정답을 보여주는 상황이 아니라면 */
        /** 보기 그림 클릭했을 때 작동 */
        svg.on("mousedown", () => {
          /** 호버하면 기본 커서로 세팅 */
          svg.set({
            hoverCursor: "default",
          });

          /** 클릭 이벤트 제거 */
          svg.off("mousedown");

          /** 클릭되면 흑백처리 */
          svg.filters!.push(new fabric.Image.filters.Grayscale());
          svg.applyFilters();

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

          /** 클릭 후 상태 업데이트 */
          handleOnClick(isCorrect);
        });
      }

      canvas.add(svg);
    });
  }

  canvas.renderAll();
};

export default renderPickCanvas;
