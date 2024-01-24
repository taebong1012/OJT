type WrongQuestionImageProps = {
  imageUrl: string;
  questionNum: number;
};
const WrongQuestionImage = ({
  imageUrl,
  questionNum,
}: WrongQuestionImageProps) => {
  return (
    <div className="w-[48%] min-h-[200px] flex flex-col border-2 rounded-10 border-lightgrey bg-white">
      <div className="flex justify-end pr-[30px] mb-[10px]">
        <div className="w-[60px] h-[30px] bg-wrong flex justify-center items-center font-bold text-background rounded-b-[8px]">
          {questionNum}
        </div>
      </div>
      <img src={imageUrl} />
    </div>
  );
};

const WrongQuestion = ({
  wrongQuestionData,
}: {
  wrongQuestionData: Array<string | null>;
}) => {
  return (
    <div className="w-full rounded-10 py-8 px-10 flex flex-col items-start shadow-default mb-[60px]">
      <span className="font-bold text-xl mb-1">오답 보기</span>
      <span className="mb-5">
        <span className="text-wrong font-bold">빨간색</span>은 선택했던{" "}
        <span className="font-bold">오답</span>,{" "}
        <span className="text-correct font-bold">초록색</span>은{" "}
        <span className="font-bold">정답</span>입니다.
      </span>
      <div className="flex flex-wrap w-full gap-[34px]">
        {wrongQuestionData.map((data, index) => {
          if (data) {
            return (
              <WrongQuestionImage
                key={index}
                imageUrl={data}
                questionNum={index + 1}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default WrongQuestion;
