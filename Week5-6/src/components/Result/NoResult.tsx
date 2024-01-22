import MainButton from "@/components/common/MainButton";
import { useNavigate, useParams } from "react-router-dom";

const NoResult = () => {
  const { grade } = useParams<{ grade: string }>();
  const navigate = useNavigate();

  const handleOnClickButton = () => {
    if (grade === "E" || grade === "F") {
      navigate(`/test/${grade}`);
    } else {
      window.alert("진단 서비스 제공 예정 등급입니다.");
    }
  };

  return (
    <div className="bg-[url('@/assets/img/img_noResult.png')] w-full h-[544px] flex flex-col justify-center items-center ">
      <span className="font-extrabold text-xl mb-[38px]">
        평가 결과가 없습니다.
      </span>
      <span className="font-extrabold text-xl mb-[70px]">
        진단을 시작하고 성취도를 확인하세요!
      </span>
      <MainButton text="진단하기" handleOnClick={handleOnClickButton} />
    </div>
  );
};

export default NoResult;
