import { Chart } from "chart.js/auto";
import { useEffect, useRef } from "react";

const AchievementChart = ({ achievement }: { achievement: number }) => {
  const Label = () => {
    const correctCnt: number = achievement / 10;
    const wrongCnt: number = 10 - correctCnt;

    return (
      <div className="flex flex-col">
        <div className="w-full flex items-center">
          <div className="min-h-[16px] min-w-[16px] bg-[#66D5E3] mr-[10px]" />
          <div className="w-full">
            <span className="mr-[8px]">맞은 문제</span>
            <span>
              <span className="text-l font-bold">{correctCnt}</span>개
            </span>
          </div>
        </div>
        <div className="w-full flex items-center">
          <div className="min-h-[16px] min-w-[16px] bg-[#FD9C9D] mr-[10px]" />
          <div className="w-full">
            <span className="mr-[8px]">틀린 문제</span>
            <span>
              <span className="text-l font-bold">{wrongCnt}</span>개
            </span>
          </div>
        </div>
      </div>
    );
  };

  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const correctCnt: number = achievement / 10;
    const wrongCnt: number = 10 - correctCnt;

    const chartLabels = ["맞은 문제", "틀림 문제"];
    const chartData = [correctCnt, wrongCnt];

    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (ctx) {
        const chartInstance = new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: chartLabels,
            datasets: [
              {
                data: chartData,
                backgroundColor: ["#66D5E3", "#FD9C9D"],
              },
            ],
          },
          options: {
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: false,
              },
            },
            cutout: "80%",
          },
        });

        return () => {
          // 컴포넌트 언마운트 시 이전 차트 파괴
          if (chartInstance) {
            chartInstance.destroy();
          }
        };
      }
    }
  }, [achievement]);

  return (
    <div className="flex items-end justify-between">
      <div className="w-[65%] relative">
        <canvas ref={chartRef} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#66D5E3] text-[56px] font-extrabold">
          {achievement}%
        </div>
      </div>
      <div className="w-[32%]">
        <Label />
      </div>
    </div>
  );
};

export default AchievementChart;
