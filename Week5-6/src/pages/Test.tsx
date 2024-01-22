import ProgressBar from "@/components/Test/ProgressBar";
import TestInfoContainer from "@/components/Test/TestInfoContainer";
import Title from "@/components/common/Title";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Test = () => {
  const { grade } = useParams<{ grade: string }>();

  const [questionNum, setQuestionNum] = useState(0);

  return (
    <div className="w-full flex flex-col mb-15">
      <Title text="평가 진행" />
      <TestInfoContainer grade={grade} />
      <ProgressBar questionNum={questionNum} />
    </div>
  );
};

export default Test;
