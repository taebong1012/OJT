import Grade from "@/components/GradeList/Grade";
import GradeTitle from "@/components/GradeList/GradeTitle";
import Title from "@/components/common/Title";
import { gradeDataArr } from "@/data/gradeDataArr";
import { simpleResultType } from "@/types/resultType";

/** 진단 평가의 리스트들 */
const GradeList = () => {
  // json 더미 데이터
  type SimpleResultsDummyType = {
    [key: string]: simpleResultType;
  };
  const simpleResultsDummy: SimpleResultsDummyType = {
    F: {
      achievement: 20,
      date: "2023-12-11",
      time: "00:05:01",
    },
    E: {
      achievement: 37,
      date: "2023-12-13",
      time: "00:12:52",
    },
  };

  return (
    <div className="w-full flex flex-col">
      <Title text="진단 단계 선택" />
      <select className="bg-transparent w-[130px] font-bold text-darkgrey mb-10">
        <option value="math">재능스스로수학</option>
      </select>
      {/* 타이틀 */}
      <GradeTitle />
      <div className="flex flex-col gap-2.5">
        {gradeDataArr.map((gradeData, index) => (
          <Grade
            key={index}
            gradeData={gradeData}
            simpleResult={simpleResultsDummy[gradeData.grade]}
          />
        ))}
      </div>
    </div>
  );
};

export default GradeList;
