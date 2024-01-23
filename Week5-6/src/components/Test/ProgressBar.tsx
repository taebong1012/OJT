const ProgressBar = ({ questionNum }: { questionNum: number }) => {
  type widthType = Record<number, string>;
  const width: widthType = {
    0: "w-[0px]",
    1: "w-[60px]",
    2: "w-[120px]",
    3: "w-[180px]",
    4: "w-[240px]",
    5: "w-[300px]",
    6: "w-[360px]",
    7: "w-[420px]",
    8: "w-[480px]",
    9: "w-[540px]",
  };

  return (
    <div className="flex justify-center mb-[20px]">
      <div className="h-5 bg-lightgrey rounded-full w-[600px] relative">
        <div
          className={`h-5 bg-primary rounded-full absolute left-0 ${width[questionNum]} transition-all duration-500  
          ease-out`}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
