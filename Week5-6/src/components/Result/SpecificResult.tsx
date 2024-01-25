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
import loadingCharacter from "@/assets/svg/ic_loadingCharacter.svg";
import DateTime from "@/components/Result/DateTime";

const OnLoadingComponent = () => {
  return (
    <div className="h-[320px] flex flex-col justify-center items-center">
      <img src={loadingCharacter} alt="로딩 이미지" className="w-[340px]" />
      <span className="text-xl font-extrabold text-primary">
        결과를 불러오고 있어요!
      </span>
    </div>
  );
};

interface resultDataInterface {
  simple: simpleResultType;
  specific: specificResultType;
}

const SpecificResult = () => {
  const navigate = useNavigate();
  const { grade } = useParams<{ grade: string }>();
  const { data } = useGradeResults();
  const [resultData, setResultData] = useState<resultDataInterface>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const makeValuableData = () => {
      if (data && (grade === "E" || grade === "F") && data[grade]) {
        setResultData(data[grade]);
      } else {
        console.error("ERR: no grade result");
        navigate("/");
      }
    };

    setTimeout(() => {
      makeValuableData();
      setIsLoading(false);
    }, 2000);
  }, [data, grade, navigate]);

  return (
    <>
      {!isLoading && resultData ? (
        <>
          <div>
            <Statement achievement={resultData.simple.achievement} />
          </div>
          <div className="flex gap-[40px] mb-[40px]">
            <ChartBox achievement={resultData.simple.achievement} />
            <DateTime simpleData={resultData.simple}/>
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
      ) : (
        <OnLoadingComponent />
      )}
    </>
  );
};

export default SpecificResult;
