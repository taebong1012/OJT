import TextColorWrapper from "@/components/Result/TextColorWrapper";
import { useParams } from "react-router-dom";

export const SimpleResultContainer = () => {
  const { grade } = useParams<{ grade: string }>();

  const {} = getGradeInfo(grade || null);

  return (
    <div>
      <div className="mb-5 flex items-center font-bold">
        <TextColorWrapper color={gradeColor} text={`${grade}등급`} />
        <span>재능스스로수학 | 초2</span>
      </div>
      <div className="mb-[50px] flex font-bold">
        <div className="flex items-center">
          <TextColorWrapper text="실시 일자" />
          <div className="w-[100px]">24-01-15</div>
        </div>
        <div className="flex items-center">
          <TextColorWrapper text="학습 시간" />
          <span>00:01:15</span>
        </div>
      </div>
    </div>
  );
};
