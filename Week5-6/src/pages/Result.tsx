import NoResult from "@/components/Result/NoResult";
import SimpleResultContainer from "@/components/Result/SimpleResultContainer";
import Title from "@/components/common/Title";

const Result = () => {
  return (
    <div className="w-full flex flex-col">
      <Title text="평가 결과" />
      <SimpleResultContainer />
      <NoResult />
    </div>
  );
};

export default Result;
