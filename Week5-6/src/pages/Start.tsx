import logo from "@/assets/svg/ic_logo.svg";
import SignIn from "@/components/Start/SignIn";
import SignUp from "@/components/Start/SignUp";
import { setCookieId, setCookieIsLogin } from "@/utils/getSetCookie";
import { useEffect, useState } from "react";

const Start = () => {
  /** 로그인, 회원가입 페이지 진입 시 로그인 쿠키 정보 초기화 */
  useEffect(() => {
    setCookieId("");
    setCookieIsLogin(false);
  }, []);

  /** tab의 인덱스를 가지고 있는 state */
  const [tabIndex, setTabIndex] = useState(0);

  /** 탭의 이름과 담고 있는 배열 */
  const tabArr = [
    { name: "로그인", content: <SignIn /> },
    { name: "회원가입", content: <SignUp setTabIndex={setTabIndex} /> },
  ];

  /** 클릭시 tab 인덱스 변경 */
  const handleOnClick = (index: number) => {
    setTabIndex(index);
  };

  /** Tab 이동 버튼 */
  const TabButton = ({ index }: { index: number }) => {
    return (
      <span
        onClick={() => handleOnClick(index)}
        className={`${
          tabIndex === index
            ? "text-background underline underline-offset-6 hover: cursor-default"
            : "text-background text-opacity-40 hover: cursor-pointer"
        }`}
      >
        {tabArr[index].name}
      </span>
    );
  };

  return (
    /** 배경 */
    <div className="flex justify-center items-center w-screen h-screen bg-secondary">
      <div>
        <img
          className="mb-1.5"
          src={logo}
          alt="JEI 재능교육 스스로 진단 로고"
        />
        {/* 왼쪽 탭 */}
        <div className="flex h-360">
          <div className="w-146 h-full bg-primary rounded-l-10 pt-60 pl-5 text-l font-bold flex flex-col gap-3">
            {/* 로그인, 회원가입 탭 버튼 띄우기 */}
            {tabArr.map((_, index) => {
              return <TabButton key={index} index={index} />;
            })}
          </div>
          <div className="w-304 bg-background rounded-r-10 pl-5 pt-10 pr-40">
            {tabArr[tabIndex].content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
