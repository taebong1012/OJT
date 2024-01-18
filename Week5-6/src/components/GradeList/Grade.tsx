import {
  AchievementWrapper,
  ClassifiedWrapper,
  DateTimeWrapper,
  GradeAlphabetColorWrapper,
} from "@/components/GradeList/TextWrappers";
import { questionInfoType } from "@/types/questionType";
import { simpleResultType } from "@/types/resultType";

type GradeProp = {
  questionInfo: questionInfoType;
  simpleResult: simpleResultType;
};

const Grade = ({ questionInfo, simpleResult }: GradeProp) => {
  return (
    <div className="h-20 rounded-10 border-[1px] border-[#D1D1D1] flex items-center px-[40px] font-bold justify-between">
      <GradeAlphabetColorWrapper
        grade={questionInfo.grade}
        color={questionInfo.color}
      />
      <ClassifiedWrapper text={questionInfo.classify} />
      <DateTimeWrapper text={simpleResult.date} />
      <DateTimeWrapper text={simpleResult.time} />
      <AchievementWrapper text={simpleResult.achievement.toString()} />
    </div>
  );
};

export default Grade;
