import ChartBox from "@/components/Result/ChartBox";
import Statement from "@/components/Result/Statement";
import WrongQuestion from "@/components/Result/WrongQuestion";
import WrongQuestionImages from "@/components/Result/WrongQuestionImages";
import MainButton from "@/components/common/MainButton";
import useGradeResults from "@/hooks/useGradeResults";
import { simpleResultType, specificResultType } from "@/types/resultType";
import scrollToTop from "@/utils/scrollToTop";
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
          <div className="flex justify-center gap-[40px]">
            <button
              onClick={() => {
                navigate("/");
                scrollToTop();
              }}
              className="h-10 font-bold focus:outline-none flex justify-center items-center w-160 bg-[#EAEAEA] hover:bg-[#D1D1D1] active:bg-[#BCBCBC]"
            >
              메인으로
            </button>
            <MainButton
              text="다시 진단하기"
              handleOnClick={() => {
                navigate(`/test/${grade}`);
                scrollToTop();
              }}
            />
          </div>
        </>
      )}
    </>
  );
};

export default SpecificResult;
