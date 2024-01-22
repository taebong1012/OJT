import MainButton from "@/components/common/MainButton";

const NoResult = () => {
  const handleOnClickButton = () => {
    console.log("진단하기 버튼 임시 함수");
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
