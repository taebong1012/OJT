import Grade from "@/components/GradeList/Grade";
import GradeTitle from "@/components/GradeList/GradeTitle";
import Title from "@/components/common/Title";
import { gradeDataArr } from "@/data/gradeDataArr";
import { getResult } from "@/utils/resultDBUtils";
import { useEffect } from "react";

/** 진단 평가의 리스트들 */
const GradeList = () => {
  const test = async () => {
    const res = await getResult("dksxogus1012");
    console.log("진단결과: ", res);
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <div className="w-full flex flex-col">
      <Title text="진단 단계 선택" />
      <select className="bg-transparent w-[130px] font-bold text-darkgrey mb-10">
        <option value="math">재능스스로수학</option>
      </select>
      {/* 타이틀 */}
      <GradeTitle />
      <div className="flex flex-col gap-2.5">
        {/* {gradeDataArr.map((gradeData, index) => (
          <Grade
            key={index}
            gradeData={gradeData}
            simpleResult={}
          />
        ))} */}
      </div>
    </div>
  );
};

export default GradeList;
