import { useNavigate } from "react-router-dom";

type CardProps = {
  imageUrl: string;
  projectNum: number;
};

const Card = ({ imageUrl, projectNum }: CardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="border-[1px] border-[#666666] w-[380px] h-[268px] rounded-[10px] p-[20px]"
      onClick={() => navigate(`/week/${projectNum}`)}
    >
      <img src={imageUrl} className="rounded-[10px] h-[140px]" />
    </div>
  );
};

export default Card;
