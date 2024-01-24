import AchievementChart from "@/components/Result/AchievementChart";
import BoxTitle from "@/components/Result/BoxTitle";

const ChartBox = ({ achievement }: { achievement: number }) => {
  return (
    <div className="w-[55%] rounded-10 py-8 px-10 flex flex-col shadow-default">
      <BoxTitle text="성취도" />
      <AchievementChart achievement={achievement} />
    </div>
  );
};

export default ChartBox;
