import { IoSearch } from "react-icons/io5";
import logo from "@/assets/Header/logo.svg";
import jeiLogo from "@/assets/Header/jei_logo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[80px] bg-[#FFFFFF] flex items-center justify-center">
      <div className="min-w-[1280px] w-[1280px] flex justify-between items-center">
        <div
          className="hover: cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} className="h-[48px]"></img>
        </div>
        <div className="flex">
          <div className="w-[414px] h-[44px] bg-[#F2F4F7] rounded-l-[20px] flex items-center pl-[30px]">
            <span className="text-[#CECECE]">검색어를 입력하세요.</span>
          </div>
          <div className="w-[48px] h-[44px] bg-primary rounded-r-[20px] flex items-center justify-center pr-[4px]">
            <IoSearch size="24" color="#FFFFFF" />
          </div>
        </div>
        <img
          onClick={() => window.open("https://www.jei.com/", "_blank")}
          src={jeiLogo}
          className="border-[2px] rounded-full h-[48px] border-[#ECECEC] hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
