import tutorialThumbnail from "@/assets/Main/tutorial-thumbnail.png";
import volleyballThumbnail from "@/assets/Main/volleyball-thumbnail.png";
import GameWrapper from "@/components/Main/GameWrapper";

const Main = () => {
  return (
    <div className="w-full">
      <div className="flex justify-start mb-[24px] text-[32px] font-extrabold">
        이런 게임은 어때요?
      </div>
      <div className="flex gap-[24px]">
        <GameWrapper
          imageUrl={tutorialThumbnail}
          title="페이저 튜토리얼"
          subTitle="페이저로 만든 첫번째 게임"
          navigateUrl="/tutorial"
        />
        <GameWrapper
          imageUrl={volleyballThumbnail}
          title="배-구"
          subTitle="베지와 베어콩과 함께 배구 한판!"
          navigateUrl="/volleyball"
        />
      </div>
    </div>
  );
};

export default Main;
