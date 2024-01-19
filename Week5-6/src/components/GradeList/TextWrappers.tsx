type GradeAlphabetColorWrapperType = {
  grade: string;
  color: string;
};

export const GradeAlphabetColorWrapper = ({
  grade,
  color,
}: GradeAlphabetColorWrapperType) => {
  return (
    <div
      className={`w-20 h-8 rounded-full flex justify-center items-center text-background`}
      style={{ backgroundColor: `${color}` }}
    >
      {grade}등급
    </div>
  );
};

export const GradeAlphabetWrapper = ({ text }: { text: string }) => {
  return <div className="w-20 text-center">{text}</div>;
};

export const ClassifiedWrapper = ({ text }: { text: string }) => {
  return <div className="w-[140px] text-center">{text}</div>;
};

export const DateTimeWrapper = ({ text }: { text: string }) => {
  return <div className="w-[100px] text-center">{text}</div>;
};

export const AchievementWrapper = ({ text }: { text: string }) => {
  return (
    <div className="w-12 text-center">
      {text}
      {text !== "성취도" && "%"}
    </div>
  );
};
