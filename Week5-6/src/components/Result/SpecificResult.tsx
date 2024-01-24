import Statement from "@/components/Result/Statement";
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
        <div>
          <Statement achievement={resultData!.simple.achievement} />
        </div>
      )}
    </>
  );
};

export default SpecificResult;
