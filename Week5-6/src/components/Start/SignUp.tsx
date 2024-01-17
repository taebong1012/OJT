import InputTitle from "@/components/Start/InputTitle";
import SignInput from "@/components/Start/SignInput";
import ValidityComment from "@/components/Start/ValidityComment";
import MainButton from "@/components/common/MainButton";
import { userType } from "@/types/userType";
import getCanRegist from "@/utils/getCanRegist";
import axios from "axios";
import { useEffect, useState } from "react";

const SignUp = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputConfirmPw, setInputConfirmPw] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputBirth, setInputBirth] = useState(""); // YYYY-MM-dd

  const doSignUp = async () => {
    try {
      const userData: userType = {
        id: inputId,
        password: inputPw,
        name: inputName,
        birth: inputBirth,
      };

      await axios.post("/signup", userData);
      console.log("sign-up SUCCESS");
    } catch (error: any) {
      console.error("sign-up FAILED: ", error);
    }
  };

  useEffect(() => {
    if (
      inputPw === inputConfirmPw &&
      getCanRegist({
        inputId,
        inputPw,
        inputName,
        inputBirth,
      })
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [inputId, inputPw, inputConfirmPw, inputName, inputBirth]);

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
        <ValidityComment isCheckingID={true} isValid={false} />

        <InputTitle text="사용할 비밀번호" />
        <SignInput
          type="password"
          value={inputPw}
          handleOnChange={setInputPw}
          placeholder="비밀번호 설정"
          isHaveMarginBottom={true}
        />
        <InputTitle text="비밀번호 확인" />
        <SignInput
          type="password"
          value={inputConfirmPw}
          handleOnChange={setInputConfirmPw}
          placeholder="비밀번호 확인"
          isHaveMarginBottom={false}
        />
        <ValidityComment
          isCheckingID={false}
          isValid={inputPw === inputConfirmPw}
        />

        <InputTitle text="이름 입력" />
        <SignInput
          type="text"
          value={inputName}
          handleOnChange={setInputName}
          placeholder="이름 입력"
        />
        <InputTitle text="생년월일" />
        <SignInput
          type="date"
          value={inputBirth}
          handleOnChange={setInputBirth}
          placeholder="이름 입력"
        />
      </div>

      <MainButton
        text="회원가입"
        // handleOnClick={handleOnClickSignUpButton}
        handleOnClick={doSignUp}
        isFull={true}
        isDisabled={isDisabled}
      />
    </>
  );
};

export default SignUp;
