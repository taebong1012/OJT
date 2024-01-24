import BoxTitle from "@/components/Result/BoxTitle";
import wrongSvg from "@/assets/svg/ic_wrong.svg";
import correctSvg from "@/assets/svg/ic_correct.svg";

type QuestionWrapperProps = {
  isCorrect: boolean;
  questionNum: number;
};

const QuestionWrapper = ({ isCorrect, questionNum }: QuestionWrapperProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-[12px] font-bold">{questionNum}</div>
      <img src={isCorrect ? correctSvg : wrongSvg} alt="정답 여부 아이콘" />
    </div>
  );
};

const WrongQuestion = ({
  wrongQuestionData,
}: {
  wrongQuestionData: Array<string | null>;
}) => {
  return (
    <div className="w-full rounded-10 py-8 px-10 mb-[40px] flex flex-col shadow-default">
      <BoxTitle text="정답 현황" />
      <div className="flex justify-between">
        {wrongQuestionData.map((data, index) => {
          /** 틀렸다면 */
          if (data !== null) {
            return (
              <QuestionWrapper
                key={index}
                isCorrect={false}
                questionNum={index + 1}
              />
            );
          } else {
            return (
              <QuestionWrapper
                key={index}
                isCorrect={true}
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
