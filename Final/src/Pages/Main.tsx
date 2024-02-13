import Card from "@/components/Card";
import Title from "@/components/Title";
import { projectArr } from "@/constants/projectThumbnailsArr";

const Main = () => {
  return (
    <div className="mx-auto w-[1280px] max-w-[1280px] px-[20px]">
      <Title />
      <div className="flex flex-wrap gap-[50px]">
        {projectArr.map((projectObj, index) => {
          return <Card key={index} {...projectObj} />;
        })}
      </div>
    </div>
  );
};

export default Main;
