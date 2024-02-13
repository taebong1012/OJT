import Card from "@/components/Card";
import Title from "@/components/Title";
import { projectThumbNailArr } from "@/constants/projectThumbnailsArr";

const Main = () => {
  return (
    <div className="mx-auto w-[1280px] max-w-[1280px] px-[20px]">
      <Title />
      <div className="flex flex-wrap gap-[50px]">
        {projectThumbNailArr.map((thumbnail, index) => {
          return <Card imageUrl={thumbnail} projectNum={index + 1} />;
        })}
      </div>
    </div>
  );
};

export default Main;
