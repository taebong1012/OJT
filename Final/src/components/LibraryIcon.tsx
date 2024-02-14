import getLibraryImg from "@/utils/getLibraryImg";

const LibraryIcon = ({ libraryName }: { libraryName: string }) => {
  const libraryImgSrc: string | null = getLibraryImg(libraryName);

  return (
    <div className="h-[30px] w-[30px] flex justify-center items-center">
      {libraryImgSrc && <img src={libraryImgSrc} />}
    </div>
  );
};

export default LibraryIcon;
