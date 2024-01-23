import TextColorWrapper from "@/components/common/TextColorWrapper";
import getGradeInfo from "@/utils/getGradeInfo";
import getTimeString from "@/utils/getTimeString";
import getTodayDate from "@/utils/getTodayDate";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type TestInfoContainerProps = {
  grade: string | undefined;
  isStart: boolean;
  proceedTime: string;
  setProceedTime: Dispatch<SetStateAction<string>>;
};

const TestInfoContainer = ({
  grade,
  isStart,
  proceedTime,
  setProceedTime,
}: TestInfoContainerProps) => {
  const { gradeColor, gradeClassify } = getGradeInfo(grade);

  const todayDate = getTodayDate();

  const [time, setTime] = useState<number>(0);

  /** 평가가 시작되면 초 세기 */
  useEffect(() => {
    let intervalFunc: NodeJS.Timeout;

    const doMeasureTime = () => {
      intervalFunc = setInterval(() => {
        setTime((prev) => prev + 1);
        const timeString = getTimeString(time);
        setProceedTime(timeString);
      }, 1000);
    };

    if (isStart) {
      doMeasureTime();
    }

    return () => {
      clearInterval(intervalFunc);
    };
  }, [isStart, setProceedTime, time]);

  return (
    <div>
      <div className="mb-5 flex items-center font-bold">
        <TextColorWrapper color={gradeColor} text={`${grade}등급`} />
        <span>{gradeClassify}</span>
      </div>
      <div className="mb-[50px] flex font-bold">
        <div className="flex items-center">
          <TextColorWrapper text="실시 일자" />
          <div className="w-[100px]">{todayDate}</div>
        </div>
        <div className="flex items-center">
          <TextColorWrapper text="진행 시간" />
          <span>{proceedTime}</span>
        </div>
      </div>
    </div>
  );
};

export default TestInfoContainer;
