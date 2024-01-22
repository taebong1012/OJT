import TextColorWrapper from "@/components/Result/TextColorWrapper";
import { simpleResultType } from "@/types/resultType";
import getGradeInfo from "@/utils/getGradeInfo";

type SimpleResultContainerProps = {
  grade: string | undefined;
  simpleResult: simpleResultType;
};

const SimpleResultContainer = ({
  grade,
  simpleResult,
}: SimpleResultContainerProps) => {
  const { gradeColor, gradeClassify } = getGradeInfo(grade);

  return (
    <div>
      <div className="mb-5 flex items-center font-bold">
        <TextColorWrapper color={gradeColor} text={`${grade}등급`} />
        <span>{gradeClassify}</span>
      </div>
      <div className="mb-[50px] flex font-bold">
        <div className="flex items-center">
          <TextColorWrapper text="실시 일자" />
          <div className="w-[100px]">{simpleResult.date}</div>
        </div>
        <div className="flex items-center">
          <TextColorWrapper text="학습 시간" />
          <span>{simpleResult.time}</span>
        </div>
      </div>
    </div>
  );
};

export default SimpleResultContainer;
