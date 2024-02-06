import bearkongImg from "@/assets/Tab/bearkongTab.png";
import bejiImg from "@/assets/Tab/bejiTab.png";
import penguinImg from "@/assets/Tab/penguin.png";
import waterdogImg from "@/assets/Tab/waterdog.png";
import TabContent from "@/components/common/TabContent";

const Tab = () => {
  return (
    <div className="w-full bg-[#FFFFFF] flex items-center justify-center">
      <div className="min-w-[1280px] w-[1280px] h-[95px] flex justify-center items-end gap-[52px]">
        <TabContent imageUrl={bearkongImg} isActive={true} title="추천" />
        <TabContent imageUrl={bejiImg} isActive={false} title="캐릭터" />
        <TabContent imageUrl={penguinImg} isActive={false} title="카테고리" />
        <TabContent imageUrl={waterdogImg} isActive={false} title="즐겨찾기" />
      </div>
    </div>
  );
};

export default Tab;
