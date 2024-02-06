import { useNavigate } from "react-router-dom";

type GameWrapperProps = {
  imageUrl: string;
  title: string;
  subTitle: string;
  navigateUrl: string;
};

const GameWrapper = ({
  imageUrl,
  title,
  subTitle,
  navigateUrl,
}: GameWrapperProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-start hover:cursor-pointer"
      onClick={() => navigate(navigateUrl)}
    >
      <div
        className="w-[286px] h-[200px] mb-[8px] rounded-[20px] hover:shadow-lg transform hover:scale-110"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          transition: "transform 0.3s ease-in-out",
        }}
      />
      <span className="text-[20px] font-bold">{title}</span>
      <span className="text-secondary">{subTitle}</span>
    </div>
  );
};

export default GameWrapper;
