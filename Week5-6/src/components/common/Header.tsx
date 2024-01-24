import logo from "@/assets/svg/ic_logo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="min-w-[1240px] w-screen h-16  mb-60 bg-secondary shadow-header">
      <div className="w-1240 max-w-1240 h-full mx-auto px-5 flex items-center">
        <img
          src={logo}
          alt="JEI 재능교육 스스로 진단 로고"
          onClick={() => navigate("/")}
          className="hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
