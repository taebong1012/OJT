import Grade from "@/components/GradeList/Grade";
import GradeTitle from "@/components/GradeList/GradeTitle";
import Title from "@/components/common/Title";
import { questionInfoType } from "@/types/questionType";
import { simpleResultType } from "@/types/resultType";

/** 진단 평가의 리스트들 */
const GradeList = () => {
  return (
    <div className="border-2 border-pink-400 w-full h-[500px] flex flex-col">
      <Title text="진단 단계 선택" />
      <select className="bg-transparent w-[130px] font-bold text-darkgrey mb-10">
        <option value="math">재능스스로수학</option>
      </select>
      {/* 타이틀 */}
      <GradeTitle />
      <div className="flex flex-col gap-2.5">
        <Grade ></Grade>
      </div>
    </div>
  );
};

export default GradeList;
