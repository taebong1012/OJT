import LibraryIcon from "@/components/LibraryIcon";
import projectObjectType from "@/types/projectObjType";

const Card = ({
  projectNum,
  projectDescription,
  projectThumbnail,
  projectTitle,
  usedLibrary,
}: projectObjectType) => {
  return (
    <div
      className="border-[1px] border-[#666666] w-[380px] h-[260px] rounded-[10px] p-[20px] hover:scale-110 cursor-pointer transform transition duration-300"
      onClick={() => window.open(`/week/${projectNum}`, "_blank")}
    >
      <div className="flex">
        <img
          src={projectThumbnail}
          className="rounded-[10px] h-[140px] mb-[14px]"
        />
        <div className="ml-[10px] pl-[10px] border-l-[0.5px] border-[#999999] mb-[10px]">
          <div className="mb-[6px] font-medium">Libraries</div>
          <div className="flex flex-wrap w-full gap-[6px] h-[10px]">
            {usedLibrary.map((library, index) => {
              return <LibraryIcon key={index} libraryName={library} />;
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-[20px] mb-[6px]">{projectTitle}</span>
        <span>{projectDescription}</span>
      </div>
    </div>
  );
};

export default Card;
