import { Outlet, useLocation } from "react-router-dom";
import GameWrapper from "@/components/Main/GameWrapper";
import tutorialThumbnail from "@/assets/Main/tutorial-thumbnail.png";
import volleyballThumbnail from "@/assets/Main/volleyball-thumbnail.png";

const GamePageLayout = () => {
  const { pathname } = useLocation();

  let title!: string;
  let subTitle!: string;

  let otherTitle!: string;
  let otherSubTitle!: string;
  let otherImgUrl!: string;
  let navigateUrl!: string;

  if (pathname === "/volleyball") {
    title = "배-구";
    subTitle = "베지와 베어콩과 함께 배구 한판!";
    otherTitle = "페이저 튜토리얼";
    otherSubTitle = "페이저로 만든 첫번째 게임";
    otherImgUrl = tutorialThumbnail;
    navigateUrl = "/tutorial";
  } else {
    title = "페이저 튜토리얼";
    subTitle = "페이저로 만든 첫번째 게임";
    otherTitle = "배-구";
    otherSubTitle = "베지와 베어콩과 함께 배구 한판!";
    otherImgUrl = volleyballThumbnail;
    navigateUrl = "/volleyball";
  }

  return (
    <div className="w-full flex gap-[20px]">
      <div className="flex flex-col">
        <div className="max-h-[700px]">
          <Outlet />
        </div>
        <div className="flex justify-start text-[36px] font-extrabold mt-[16px]">
          {title}
        </div>
        <div className="flex justify-start text-[20px] text-secondary">
          {subTitle}
        </div>
      </div>
      {/* 추천게임 */}
      <div className="border-l-[0.5px] border-secondary pl-4">
        <GameWrapper
          title={otherTitle}
          subTitle={otherSubTitle}
          imageUrl={otherImgUrl}
          navigateUrl={navigateUrl}
        />
      </div>
    </div>
  );
};

export default GamePageLayout;
