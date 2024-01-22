import Grade from "@/components/GradeList/Grade";
import GradeTitle from "@/components/GradeList/GradeTitle";
import Title from "@/components/common/Title";
import { gradeDataArr } from "@/data/gradeDataArr";
import useGradeResults from "@/hooks/useGradeResults";
import { simpleResultType } from "@/types/resultType";

const emptySimpleResult: simpleResultType = {
  date: "-",
  time: "-",
  achievement: 0,
};

/** 진단 평가의 리스트들 */
const GradeList = () => {
  const { data } = useGradeResults();

  return (
    <div className="w-full flex flex-col">
      <Title text="진단 단계 선택" />
      <select className="bg-transparent w-[130px] font-bold text-darkgrey mb-10">
        <option value="math">재능스스로수학</option>
      </select>
      {/* 타이틀 */}
      <GradeTitle />
      <div className="flex flex-col gap-2.5">
        {gradeDataArr.map((gradeData, index) => {
          let simpleResult;
          if (!data || (gradeData.grade !== "E" && gradeData.grade !== "F")) {
            simpleResult = emptySimpleResult;
          } else {
            if (data[gradeData.grade] && data[gradeData.grade]!.simple) {
              simpleResult = data[gradeData.grade]!.simple;
            } else {
              simpleResult = emptySimpleResult;
            }
          }

          return (
            <Grade
              key={index}
              gradeData={gradeData}
              simpleResult={simpleResult}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GradeList;
