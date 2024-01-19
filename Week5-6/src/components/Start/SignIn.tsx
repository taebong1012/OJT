import InputTitle from "@/components/Start/InputTitle";
import SignInput from "@/components/Start/SignInput";
import MainButton from "@/components/common/MainButton";
import useSignIn from "@/hooks/useSignIn";
import { signInUserType } from "@/types/userType";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const navigate = useNavigate();

  const signInUserData: signInUserType = {
    id: inputId,
    password: inputPw,
  };

  const { mutate, data, isLoading, isError, error } = useSignIn(signInUserData);

  const handleOnClickLogInButton = async () => {
    mutate();

    if (!isLoading && !isError) {
      console.log("최종: 로그인 성공");
      console.log(data);
      // navigate("/");
    } else {
      console.log("최종: 로그인 실패");
      setInputPw("");
    }
  };

  return (
    <>
      <div className="h-250 w-full mb-2.5 flex flex-col">
        <InputTitle text="아이디" />
        <SignInput
          type="text"
          value={inputId}
          handleOnChange={setInputId}
          placeholder="아이디 입력"
        />
        <InputTitle text="비밀번호" />
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

export default SignIn;
