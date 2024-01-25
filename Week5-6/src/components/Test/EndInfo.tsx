import MainButton from "@/components/common/MainButton";
import scrollToTop from "@/utils/scrollToTop";
import { useNavigate } from "react-router-dom";

const EndInfo = ({ grade }: { grade: string | undefined }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    if (!grade) {
      window.alert("ERR: no grade");
      navigate("/");
    } else {
      scrollToTop();
      navigate(`/result/${grade}`);
    }
  };

  return (
    <div className="w-[802px] h-[602px] mx-auto border-[1px] flex justify-center items-center bg-lightgrey rounded-10">
      <div className="flex flex-col gap-[80px] items-center">
        <div className="flex flex-col text-l font-bold">
          <span className="font-extrabold text-2xl mb-[40px] text-primary">
            수고하셨습니다!
          </span>
          <span className="mb-[16px]">평가가 종료되었습니다.</span>
          <span>결과 확인 버튼을 눌러 결과를 확인해보세요!</span>
        </div>
        <MainButton text="결과 확인" handleOnClick={handleOnClick} />
      </div>
    </div>
  );
};

export default EndInfo;
