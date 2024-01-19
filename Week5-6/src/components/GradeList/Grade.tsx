import {
  AchievementWrapper,
  ClassifiedWrapper,
  DateTimeWrapper,
  GradeAlphabetColorWrapper,
} from "@/components/GradeList/TextWrappers";
import { gradeDataType } from "@/types/gradeType";
import { simpleResultType } from "@/types/resultType";
import { useNavigate } from "react-router-dom";

type GradeProp = {
  gradeData: gradeDataType;
  simpleResult: simpleResultType;
};

const Grade = ({ gradeData, simpleResult }: GradeProp) => {
  /** simpleResult가 없다면 */
  if (!simpleResult) {
    simpleResult = {
      date: "-",
      time: "-",
      achievement: 0,
    };
  }
  const navigate = useNavigate();
  const handleOnClickGrade = () => {
    navigate(`/result/${gradeData.grade}`);
  };

  return (
    <div
      onClick={handleOnClickGrade}
      className="h-20 rounded-10 border-[1px] border-[#D1D1D1] flex items-center px-[40px] font-bold justify-between hover:cursor-pointer"
    >
      <GradeAlphabetColorWrapper
        grade={gradeData.grade}
        color={gradeData.color}
      />
      <ClassifiedWrapper text={gradeData.classify} />
      <DateTimeWrapper text={simpleResult.date} />
      <DateTimeWrapper text={simpleResult.time} />
      <AchievementWrapper text={simpleResult.achievement.toString()} />
    </div>
  );
};

export default Grade;
9;
