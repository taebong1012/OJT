import getLibraryImg from "@/utils/getLibraryImg";
import { useState } from "react";

const LibraryIcon = ({ libraryName }: { libraryName: string }) => {
  const [isHover, setIsHover] = useState(false);

  const libraryImgSrc: string | null = getLibraryImg(libraryName);

  return (
    <div
      className="h-[30px] w-[30px] flex justify-center items-center relative"
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => setIsHover(false)}
    >
      {libraryImgSrc && <img src={libraryImgSrc} />}
      {isHover && (
        <div className="absolute top-[30px] text-[12px] bg-[#666666] p-[6px] rounded-[6px] z-10 border-[0.5px] border-[#FFFFFF]">
          {libraryName}
        </div>
      )}
    </div>
  );
};

export default LibraryIcon;
