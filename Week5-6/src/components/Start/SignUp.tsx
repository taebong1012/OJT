import InputTitle from "@/components/Start/InputTitle";
import SignInput from "@/components/Start/SignInput";
import MainButton from "@/components/common/MainButton";
import { useState } from "react";

const SignUp = () => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleOnClickLogInButton = () => {
    console.log("login btn clicked");
  };

  return (
    <>
      <div className="h-250 w-full mb-2.5 flex flex-col scroll overflow-y-auto pr-2">
        <InputTitle text="사용할 아이디" />
        <SignInput
          type="text"
          value={inputId}
          handleOnChange={setInputId}
          placeholder="아이디 설정"
          isHaveMarginBottom={false}
        />
        <InputTitle text="사용할 비밀번호" />
        <SignInput
          type="password"
          value={inputPw}
          handleOnChange={setInputPw}
          placeholder="비밀번호 설정"
          isHaveMarginBottom={false}
        />
        <InputTitle text="비밀번호 확인" />
        <SignInput
          type="password"
          value={inputPw}
          handleOnChange={setInputPw}
          placeholder="비밀번호 확인"
          isHaveMarginBottom={false}
        />
        <InputTitle text="이름 입력" />
        <SignInput
          type="password"
          value={inputPw}
          handleOnChange={setInputPw}
          placeholder="이름 입력"
        />
        <InputTitle text="이름 입력" />
        <SignInput
          type="password"
          value={inputPw}
          handleOnChange={setInputPw}
          placeholder="이름 입력"
        />
      </div>

      <MainButton
        text="회원가입"
        handleOnClick={handleOnClickLogInButton}
        isFull={true}
        isDisabled={inputId.trim() === "" || inputPw.trim() === ""}
      />
    </>
  );
};

export default SignUp;
