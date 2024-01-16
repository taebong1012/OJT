import SignInput from "@/components/Start/SignInput";
import MainButton from "@/components/common/MainButton";
import { useState } from "react";

const Login = () => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleOnClickLogInButton = () => {
    console.log("login btn clicked");
  };

  return (
    <>
      <div className="h-250 w-full mb-2.5 flex flex-col">
        <span className="text-s mb-0.5">아이디</span>
        <SignInput
          type="text"
          value={inputId}
          handleOnChange={setInputId}
          placeholder="아이디 입력"
        />
        <span className="text-s mb-0.5">비밀번호</span>
        <SignInput
          type="password"
          value={inputPw}
          handleOnChange={setInputPw}
          placeholder="비밀번호 입력"
        />
      </div>
      <MainButton
        text="로그인"
        handleOnClick={handleOnClickLogInButton}
        isFull={true}
        isDisabled={inputId.trim() === "" || inputPw.trim() === ""}
      />
    </>
  );
};

export default Login;
