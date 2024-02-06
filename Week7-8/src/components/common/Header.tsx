import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <div className="w-full h-[80px] bg-[#FFFFFF] flex items-center justify-center">
      <div className="min-w-[1280px] w-[1280px] flex justify-between items-center">
        <div>LOGO</div>
        <div className="flex">
          <div className="w-[414px] h-[44px] bg-[#F2F4F7] rounded-l-[20px] flex items-center pl-[30px]">
            <span className="text-[#CECECE]">검색어를 입력하세요.</span>
          </div>
          <div className="w-[48px] h-[44px] bg-primary rounded-r-[20px] flex items-center justify-center pr-[4px]">
            <IoSearch size="24" color="#FFFFFF" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
