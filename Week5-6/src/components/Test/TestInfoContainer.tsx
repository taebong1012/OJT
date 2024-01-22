import TextColorWrapper from "@/components/common/TextColorWrapper";
import getGradeInfo from "@/utils/getGradeInfo";
import getTodayDate from "@/utils/getTodayDate";

const TestInfoContainer = ({ grade }: { grade: string | undefined }) => {
  const { gradeColor, gradeClassify } = getGradeInfo(grade);

  const todayDate = getTodayDate();

  return (
    <div>
      <div className="mb-5 flex items-center font-bold">
        <TextColorWrapper color={gradeColor} text={`${grade}등급`} />
        <span>{gradeClassify}</span>
      </div>
      <div className="mb-[50px] flex font-bold">
        <div className="flex items-center">
          <TextColorWrapper text="실시 일자" />
          <div className="w-[100px]">{todayDate}</div>
        </div>
        <div className="flex items-center">
          <TextColorWrapper text="진행 시간" />
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default TestInfoContainer;
