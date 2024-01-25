import { simpleResultType } from "@/types/resultType";

const DateTime = ({ simpleData }: { simpleData: simpleResultType }) => {
  /** "23-01-25" 형식의 날짜를 "2023년 01월 25일" 형식으로 바꿔주는 함수 */
  const formatDate = (inputDate: string): string => {
    const [year, month, day] = inputDate.split("-");

    const fullYear = `20${year}`;

    const formattedMonth = parseInt(month).toString();
    const formattedDay = parseInt(day).toString();

    const formattedDate = `${fullYear}년 ${formattedMonth}월 ${formattedDay}일`;

    return formattedDate;
  };

  /** "01:02:34" 형식의 시간을 "1시간 2분 34초" 형식으로 바꿔주는 함수 */
  const formatTime = (inputTime: string): string => {
    const [hour, minute, second] = inputTime.split(":");

    const hourNumber = parseInt(hour);
    const hourMinute = parseInt(minute);
    const hourSecond = parseInt(second);

    let formattedTime = "";

    if (hourNumber !== 0) formattedTime += `${hourNumber}시간 `;
    if (hourMinute !== 0) formattedTime += `${hourMinute}분 `;
    if (hourSecond !== 0) formattedTime += `${hourSecond}초`;

    return formattedTime;
  };

  return (
    <div className="w-[45%] rounded-10 py-8 px-10 flex flex-col items-center justify-center shadow-default gap-[40px]">
      <div className="flex flex-col items-center">
        <span className="font-bold text-l">실시 일자</span>
        <span className="font-extrabold text-3xl text-[#66D5E3]">
          {formatDate(simpleData.date)}
        </span>
      </div>
      <hr className=" border-lightgrey border-[1px] w-full" />
      <div className="flex flex-col items-center">
        <span className="font-bold text-l">평가 소요 시간</span>
        <span className="font-extrabold text-3xl  text-[#66D5E3]">
          {formatTime(simpleData.time)}
        </span>
      </div>
    </div>
  );
};

export default DateTime;
