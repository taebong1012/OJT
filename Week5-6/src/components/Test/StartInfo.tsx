import MainButton from "@/components/common/MainButton";
import Title from "@/components/common/Title";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

interface StartInfoProps {
  setIsStart: Dispatch<SetStateAction<boolean>>;
}

const StartInfo = ({ setIsStart }: StartInfoProps) => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [count, setCount] = useState<number>(3);

  const ImportantText: React.FC<{ text: string }> = ({ text }) => {
    return <span className="font-extrabold text-primary">{text}</span>;
  };

  const CountDown = () => {
    useEffect(() => {
      let timer: NodeJS.Timeout;
      if (count > 0) {
        timer = setTimeout(() => setCount((prev) => prev - 1), 1000);
      } else {
        setIsStart(true);
      }

      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="text-[100px] font-bold text-primary">
        <div className="countdown">{count}</div>
      </div>
    );
  };

  const InfoTexts = () => {
    const handleOnClickStartButton = () => {
      setIsReady(true);
    };

    return (
      <div className="flex flex-col">
        <Title text="평가 전 주의 사항" />
        <div className="flex flex-col gap-3 text-l font-bold">
          <div>
            1. 한번 선택한 정답은 되돌릴 수 없어요.{" "}
            <ImportantText text="선택은 신중히!" />
          </div>
          <div>
            2.
            <ImportantText text="정답 선택 2초 후" />에 다음 문제로 넘어가요!
          </div>
          <div>
            3. 문제는 <ImportantText text="총 10문제" /> 출제돼요!
          </div>
          <div>
            4. 시작 버튼을 누른 후 3초 후에 평가가 시작돼요!{" "}
            <ImportantText text="준비되면 눌러주세요!" />
          </div>
          <div>
            5. 흐른 시간은 <ImportantText text="진행 바 위의 진행 시간" /> 에서
            확인할 수 있어요!
          </div>
        </div>
        <div className="mx-auto mt-[60px]">
          <MainButton
            text="시작하기"
            handleOnClick={handleOnClickStartButton}
          ></MainButton>
        </div>
      </div>
    );
  };

  return (
    <div className="w-[802px] h-[602px] mx-auto border-[1px] flex justify-center items-center bg-lightgrey rounded-10">
      {isReady ? <CountDown /> : <InfoTexts />}
    </div>
  );
};

export default StartInfo;
