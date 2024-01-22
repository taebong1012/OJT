import NoResult from "@/components/Result/NoResult";
import SimpleResultContainer from "@/components/Result/SimpleResultContainer";
import SpecificResult from "@/components/Result/SpecificResult";
import Title from "@/components/common/Title";
import useGradeResults from "@/hooks/useGradeResults";
import { simpleResultType } from "@/types/resultType";
import { useParams } from "react-router-dom";

const emptySimpleResult: simpleResultType = {
  achievement: 0,
  date: "-",
  time: "-",
};

const Result = () => {
  const { data } = useGradeResults();
  const { grade } = useParams<{ grade: string }>();

  return (
    <div className="w-full flex flex-col">
      <Title text="평가 결과" />
      <SimpleResultContainer
        grade={grade}
        simpleResult={
          ((grade === "E" || grade === "F") && data?.[grade]?.simple) ||
          emptySimpleResult
        }
      />
      {data ? <SpecificResult /> : <NoResult />}
    </div>
  );
};

export default Result;
