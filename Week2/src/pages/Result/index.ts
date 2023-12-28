import ResultContainer from "@/components/Result/ResultContainer";
import Button from "@/components/common/Button/button";
import Container from "@/components/common/Container";
import Header from "@/components/common/Header";
import Wrapper from "@/components/common/Wrapper";

const Result = ($app: HTMLElement) => {
  const header = Header();
  const container = Container();

  const wrapper = Wrapper();
  wrapper.style.paddingTop = "60";
  wrapper.style.width = "";

  /** 그림 맞추기 로그 가져오기 */
  const pickStartTime = localStorage.getItem("pickStartTime");
  const pickEndTime = localStorage.getItem("pickEndTime");
  const pickLogJson = localStorage.getItem("pickLogJson");

  /** 그림 맞추기 가져온 데이터들 가공 */
  const pickStartTimeText = pickStartTime ? translateTime(pickStartTime) : "";
  const pickStudyTime =
    pickStartTime && pickEndTime
      ? getStudyTime(pickStartTime, pickEndTime)
      : "";
  const pickLogArr = pickLogJson ? JSON.parse(pickLogJson) : [];

  const pickResultContainer = ResultContainer(
    "도형 선택",
    pickStartTimeText,
    pickStudyTime,
    pickLogArr
  );
  pickResultContainer.style.marginRight = "60px";

  /** 그림 완성하기 로그 가져오기 */
  const dragStartTime = localStorage.getItem("dragStartTime");
  const dragEndTime = localStorage.getItem("dragEndTime");
  const dragLogJson = localStorage.getItem("dragLogJson");

  /** 그림 맞추기 가져온 데이터들 가공 */
  const dragStartTimeText = dragStartTime ? translateTime(dragStartTime) : "";
  const dragStudyTime =
    dragStartTime && dragEndTime
      ? getStudyTime(dragStartTime, dragEndTime)
      : "";
  const dragLogArr = dragLogJson ? JSON.parse(dragLogJson) : [];

  const dragResultContainer = ResultContainer(
    "그림 완성하기",
    dragStartTimeText,
    dragStudyTime,
    dragLogArr
  );

  const $goToHomeBtn = Button("/", "처음으로", 200, 60);
  $goToHomeBtn.style.fontSize = "1.5rem";
  $goToHomeBtn.style.marginTop = "60px";

  wrapper.appendChild(pickResultContainer);
  wrapper.appendChild(dragResultContainer);

  container.appendChild(wrapper);
  container.appendChild($goToHomeBtn);

  $app.appendChild(header);
  $app.appendChild(container);
};

export default Result;

const translateTime = (time: string) => {
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

  return formattedDate;
};

const getStudyTime = (startTime: string, endTime: string) => {
  const start: Date = new Date(startTime);
  const end: Date = new Date(endTime);

  const studyTimeSec: number = (end.getTime() - start.getTime()) / 1000; // 차이를 초 단위로 계산

  const minutes = Math.floor(studyTimeSec / 60); // 분 계산
  const seconds = Math.floor(studyTimeSec % 60); // 초 계산

  const studyTimeString: string = `${minutes}분 ${seconds}초`;

  return studyTimeString;
};
