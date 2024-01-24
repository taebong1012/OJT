import EndInfo from "@/components/Test/EndInfo";
import ProgressBar from "@/components/Test/ProgressBar";
import StartInfo from "@/components/Test/StartInfo";
import TestInfoContainer from "@/components/Test/TestInfoContainer";
import Title from "@/components/common/Title";
import {
  gradeCquestionDataArr,
  gradeFquestionDataArr,
  questionDataType,
} from "@/data/questionDataArr";
import useUpdateResult from "@/hooks/useUpdateResult";
import getTodayDate from "@/utils/getTodayDate";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const Test = () => {
  const { grade } = useParams<{ grade: string }>();

  const [questionNum, setQuestionNum] = useState(0);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isStart, setIsStart] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [proceedTime, setProceedTime] = useState("00:00:00");
  const [wrongQuestion, setWrongQuestion] = useState<Array<string | null>>([]);

  const resultObject = {
    grade: grade,
    wrongQuestion: wrongQuestion,
    time: proceedTime,
    date: getTodayDate(),
  };

  const { resultMutate } = useUpdateResult(resultObject);

  /** 현재 평가 등급에 따라 문제 배열 변경 */
  let questionDataArr: Array<questionDataType>;
  if (grade === "F") {
    questionDataArr = gradeFquestionDataArr;
  } else {
    questionDataArr = gradeCquestionDataArr;
  }

  /** iframe으로 문제 정보를 전달하는 hook */
  useEffect(() => {
    if (
      isStart &&
      !isEnd &&
      iframeRef.current &&
      iframeRef.current.contentWindow &&
      questionNum <= 9
    ) {
      iframeRef.current.contentWindow.postMessage(questionDataArr[questionNum]);
    }
  }, [questionNum, iframeRef, isIframeLoaded, questionDataArr, isStart, isEnd]);

  /** iframe에서 보내는 데이터를 받기 위한 이벤트 등록 hook */
  useEffect(() => {
    const handleOnMessage = (e: MessageEvent) => {
      if (e.data.isWrong !== undefined && e.data.canvasImg !== undefined) {
        setWrongQuestion((prev) => [...prev, e.data.canvasImg]);

        setTimeout(() => {
          setQuestionNum((prev) => prev + 1);
        }, 2000);
      }
    };

    window.addEventListener("message", handleOnMessage);

    return () => {
      window.removeEventListener("message", handleOnMessage);
    };
  }, [wrongQuestion]);

  /** 문제 번호(index 기준)가 9를 초과하면 EndInfo 컴포넌트 띄우기 */
  useEffect(() => {
    if (questionNum > 9) {
      setIsEnd(true);
      setIsStart(false); // 진행 시간 멈추기 위해서 false로 변경
      resultMutate();

      console.log(wrongQuestion);
    }
  }, [questionNum, resultMutate, wrongQuestion]);

  return (
    <div className="w-full flex flex-col mb-15">
      <Title text="평가 진행" />
      <TestInfoContainer
        grade={grade}
        isStart={isStart}
        proceedTime={proceedTime}
        setProceedTime={setProceedTime}
      />
      <ProgressBar questionNum={questionNum} />
      {/* 문제 띄우는 iframe */}
      {isEnd ? (
        <EndInfo grade={grade} />
      ) : isStart ? (
        <iframe
          ref={iframeRef}
          src="../../public/index.html"
          className="w-[802px] h-[602px] mx-auto border-[1px]"
          onLoad={() => {
            setIsIframeLoaded(true);
          }}
        />
      ) : (
        <StartInfo setIsStart={setIsStart} />
      )}
    </div>
  );
};

export default Test;
