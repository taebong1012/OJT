import MainButton from "@/components/common/MainButton";
import { doLogout } from "@/utils/doLogout";
import { useNavigate } from "react-router-dom";
import nofound from "@/assets/svg/ic_noFound.svg";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    doLogout();
    navigate("/");
  };

  return (
    <div className="h-full w-screen min-w-[1240px] flex flex-col items-center justify-center">
      <div className="mb-[40px] flex flex-col items-center">
        <img src={nofound} className="w-[140px] mb-[20px]" />
        <span className="text-l font-extrabold">
          요청하신 페이지를 찾을 수 없습니다.
        </span>
      </div>
      <MainButton text="메인으로" handleOnClick={handleOnClick} />
    </div>
  );
};

export default ErrorPage;
