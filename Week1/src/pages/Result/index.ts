import ContentsDiv from "../../components/Common/ContentsDiv";
import PathMoveBtn from "../../components/Common/PathMoveBtn";
import Titlebar from "../../components/Common/Titlebar";
import WrapperDiv from "../../components/Common/WrapperDiv";

/** 학습 결과를 보여주는 페이지 */
const Result = ($app: HTMLElement) => {
  /** 로컬 스토리지에 저장된 시간, 맞춘 개수 가져오기 */
  const time = localStorage.getItem("time");
  const correctCnt = localStorage.getItem("correctCnt");

  if (time && correctCnt) {
    /** 학습한 이력이 있다면 */
    const titleBar = Titlebar();
    const contensDiv = ContentsDiv();
    const wrapper = WrapperDiv();

    /** 저장된 time을 원하는 날짜 형식으로 변경 */
    const dateObject: Date = new Date(time);

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    const formatter: Intl.DateTimeFormat = new Intl.DateTimeFormat(
      "ko-KR",
      options
    );
    const formattedDate: string = formatter.format(dateObject);

    /** "최근 학습 결과" 제목 텍스트 */
    const titleSpan = document.createElement("span");
    titleSpan.textContent = "최근 학습 결과";
    titleSpan.style.fontFamily = "NPSfontBold";
    titleSpan.style.fontSize = "1.25rem";
    titleSpan.style.marginBottom = "20px";

    /** 8문제 중 몇문제 맞췄는지 출력 */
    const resultSpan = document.createElement("span");
    resultSpan.textContent = `${correctCnt} / 8`;
    resultSpan.style.fontFamily = "NPSfontBold";
    resultSpan.style.fontSize = "3.125rem";
    resultSpan.style.marginBottom = "60px";
    resultSpan.style.color = "#19AAAF";

    /** 학습 일자 */
    const timeSpan = document.createElement("span");
    timeSpan.textContent = `${formattedDate} 기준`;
    timeSpan.style.fontSize = "1.25rem";
    resultSpan.style.marginBottom = "80px";

    /** 학습하기 버튼 */
    const goSolveBtn = PathMoveBtn("/solve", "학습하기");
    goSolveBtn.style.marginTop = "80px";

    wrapper.appendChild(titleSpan);
    wrapper.appendChild(resultSpan);
    wrapper.appendChild(timeSpan);
    wrapper.appendChild(goSolveBtn);

    contensDiv.appendChild(wrapper);

    $app.appendChild(titleBar);
    $app.appendChild(contensDiv);
  } else {
    /** 시간 또는 맞춘 개수가 없다면 학습 이력이 없으므로 초기화면으로 이동 */
    window.alert("학습한 이력이 없습니다. 초기 화면으로 이동합니다.");
    window.location.href = "/";
  }
};

export default Result;
