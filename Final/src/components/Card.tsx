import projectObjectType from "@/types/projectObjType";
import { useNavigate } from "react-router-dom";

const Card = ({
  projectNum,
  projectDescription,
  projectThumbnail,
  projectTitle,
  usedLibrary,
}: projectObjectType) => {
  const navigate = useNavigate();

  return (
    <div
      className="border-[1px] border-[#666666] w-[380px] h-[260px] rounded-[10px] p-[20px] hover:scale-110 cursor-pointer transform transition duration-300"
      onClick={() => navigate(`/week/${projectNum}`)}
    >
      <img
        src={projectThumbnail}
        className="rounded-[10px] h-[140px] mb-[14px]"
      />
      <div className="flex flex-col">
        <span className="font-bold text-[20px] mb-[6px]">{projectTitle}</span>
        <span>{projectDescription}</span>
      </div>
    </div>
  );
};

export default Card;
