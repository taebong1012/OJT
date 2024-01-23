import ProgressBar from "@/components/Test/ProgressBar";
import TestInfoContainer from "@/components/Test/TestInfoContainer";
import MainButton from "@/components/common/MainButton";
import Title from "@/components/common/Title";
import {
  gradeFquestionDataArr,
  questionDataType,
} from "@/data/questionDataArr";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const Test = () => {
  const { grade } = useParams<{ grade: string }>();

  const [questionNum, setQuestionNum] = useState(0);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  let questionDataArr: Array<questionDataType>;
  if (grade === "F") {
    questionDataArr = gradeFquestionDataArr;
  } else {
    /** TODO: 다른 문제 데이터로 분기처리 */
    questionDataArr = gradeFquestionDataArr;
  }

  useEffect(() => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(questionDataArr[questionNum]);
    }
  }, [questionNum, iframeRef, isIframeLoaded, questionDataArr]);

  return (
    <div className="w-full flex flex-col mb-15">
      <Title text="평가 진행" />
      <TestInfoContainer grade={grade} />
      <MainButton
        text="호잇"
        handleOnClick={() => {
          setQuestionNum((prev) => prev + 1);
        }}
      />
      <ProgressBar questionNum={questionNum} />
      {/* 문제 띄우는 iframe */}
      <iframe
        ref={iframeRef}
        src="../../public/index.html"
        className="w-[802px] h-[602px] mx-auto border-[1px]"
        onLoad={() => {
          setIsIframeLoaded(true);
        }}
      ></iframe>
    </div>
  );
};

export default Test;
