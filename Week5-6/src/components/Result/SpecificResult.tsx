import ChartBox from "@/components/Result/ChartBox";
import Statement from "@/components/Result/Statement";
import WrongQuestion from "@/components/Result/WrongQuestion";
import WrongQuestionImages from "@/components/Result/WrongQuestionImages";
import useGradeResults from "@/hooks/useGradeResults";
import { simpleResultType, specificResultType } from "@/types/resultType";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface resultDataInterface {
  simple: simpleResultType;
  specific: specificResultType;
}

const SpecificResult = () => {
  const navigate = useNavigate();
  const { grade } = useParams<{ grade: string }>();
  const { data } = useGradeResults();
  const [resultData, setResultData] = useState<resultDataInterface>();

  useEffect(() => {
    if (data && (grade === "E" || grade === "F") && data[grade]) {
      setResultData(data[grade]);
    } else {
      console.error("ERR: no grade result");
      navigate("/");
    }
  }, [data, grade, navigate]);

  return (
    <>
      {resultData && (
        <>
          <div>
            <Statement achievement={resultData.simple.achievement} />
          </div>
          <div className="flex gap-[40px] mb-[40px]">
            <ChartBox achievement={resultData.simple.achievement} />
            <div className="w-[45%] rounded-10 py-8 px-10 flex flex-col items-center shadow-default"></div>
          </div>
          <WrongQuestion wrongQuestionData={resultData.specific.wrongImage} />
          <WrongQuestionImages
            wrongQuestionData={resultData.specific.wrongImage}
          />
        </>
      )}
    </>
  );
};

export default SpecificResult;
