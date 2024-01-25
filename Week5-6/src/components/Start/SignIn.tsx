import InputTitle from "@/components/Start/InputTitle";
import SignInput from "@/components/Start/SignInput";
import MainButton from "@/components/common/MainButton";
import useSignIn from "@/hooks/useSignIn";
import { signInUserType } from "@/types/userType";
import { setCookieId, setCookieIsLogin } from "@/utils/getSetCookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const navigate = useNavigate();

  const signInUserData: signInUserType = {
    id: inputId,
    password: inputPw,
  };

  const { isError, isSuccess, signInMutate } = useSignIn(signInUserData);

  const handleOnClickLogInButton = () => {
    signInMutate();
  };

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("handleOnKeyPress: ", e.key);
    if (e.key === "Enter" && inputId.trim() !== "" && inputPw.trim() !== "") {
      handleOnClickLogInButton();
    }
  };

  /** error가 없고 성공했을 경우에 로그인 유저의 정보를 쿠키에 저장하고 메인페이지로 이동 */
  useEffect(() => {
    if (!isError && isSuccess) {
      setCookieId(inputId);
      setCookieIsLogin(true);
      navigate("/");
    } else {
      setInputPw("");
    }
  }, [inputId, isError, isSuccess, navigate]);

  return (
    <>
      <div className="h-250 w-full mb-2.5 flex flex-col">
        <InputTitle text="아이디" />
        <SignInput
          type="text"
          value={inputId}
          handleOnChange={setInputId}
          placeholder="아이디 입력"
          onKeyPress={handleOnKeyPress}
        />
        <InputTitle text="비밀번호" />
        <SignInput
          type="password"
          value={inputPw}
          handleOnChange={setInputPw}
          placeholder="비밀번호 입력"
          onKeyPress={handleOnKeyPress}
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
