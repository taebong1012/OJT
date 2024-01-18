import {
  AchievementWrapper,
  ClassifiedWrapper,
  DateTimeWrapper,
  GradeAlphabetWrapper,
} from "@/components/GradeList/TextWrappers";

const GradeTitle = () => {
  return (
    <div className="w-full flex justify-between text-[#BCBCBC] font-bold px-[40px] mb-5">
      <GradeAlphabetWrapper text="등급" />
      <ClassifiedWrapper text="분류" />
      <DateTimeWrapper text="실시 일자" />
      <DateTimeWrapper text="학습 시간" />
      <AchievementWrapper text="성취도" />
    </div>
  );
};

export default GradeTitle;
