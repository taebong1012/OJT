type TabContentProps = {
  isActive: boolean;
  imageUrl: string;
  title: string;
};

const TabContent = ({ isActive, imageUrl, title }: TabContentProps) => {
  let titleStyle!: string;
  let tagStyle!: string;

  if (isActive) {
    titleStyle = "text-[18px] font-bold text-[#000000]  mt-[2px]";
    tagStyle = "w-[40px] h-[6px] bg-primary rounded-full";
  } else {
    titleStyle = "font-bold text-secondary mt-[2px]";
    tagStyle = "w-[40px] h-[6px] rounded-full";
  }

  return (
    <div className="flex flex-col items-center">
      <img src={imageUrl} className="h-[40px]" />
      <span className={titleStyle}>{title}</span>
      <div className={tagStyle} />
    </div>
  );
};

export default TabContent;
