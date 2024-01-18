export const GradeAlphabetColorWrapper = ({
  grade,
  color,
}: {
  grade: string;
  color: string;
}) => {
  return (
    <div
      className={`w-20 h-8 rounded-full bg-[${color}] flex justify-center items-center text-background`}
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
  return <div className="w-[80px] text-center">{text}</div>;
};

export const AchievementWrapper = ({ text }: { text: string }) => {
  return <div className="w-12 text-center">{text}</div>;
};
