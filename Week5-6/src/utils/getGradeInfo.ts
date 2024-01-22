import { gradeDataArr } from "@/data/gradeDataArr";

const getGradeInfo = (grade: string | null) => {
  for (const gradeData of gradeDataArr) {
    if (gradeData.grade === grade) {
      return { gradeColor: gradeData.color, gradeClassify: gradeData.classify };
    }
  }
  return { gradeColor: "#E5E5E5", gradeClassify: "err" };
};

export default getGradeInfo;
