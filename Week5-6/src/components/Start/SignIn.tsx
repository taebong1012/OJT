import InputTitle from "@/components/Start/InputTitle";
import SignInput from "@/components/Start/SignInput";
import MainButton from "@/components/common/MainButton";
import { signInUserType } from "@/types/userType";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const navigate = useNavigate();

  const handleOnClickLogInButton = async () => {
    const signInUserData: signInUserType = {
      id: inputId,
      password: inputPw,
    };

    try {
      await axios.post("/signin", signInUserData);
      navigate("/");
    } catch (error: any) {
      if (error.response.status === 400) {
        window.alert("아이디 혹은 비밀번호가 틀렸습니다.");
      } else {
        window.alert(error.message);
      }
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
