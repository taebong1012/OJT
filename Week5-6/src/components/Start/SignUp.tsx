import InputTitle from "@/components/Start/InputTitle";
import SignInput from "@/components/Start/SignInput";
import ValidityComment from "@/components/Start/ValidityComment";
import MainButton from "@/components/common/MainButton";
import { userInfoType } from "@/types/userType";
import getAge from "@/utils/getAge";
import getCanRegist from "@/utils/getCanRegist";
import axios from "axios";
import { useEffect, useState } from "react";

interface SignUpProps {
  setTabIndex: React.Dispatch<React.SetStateAction<number>>;
}

const SignUp: React.FC<SignUpProps> = ({ setTabIndex }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputConfirmPw, setInputConfirmPw] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputBirth, setInputBirth] = useState(""); // YYYY-MM-dd

  const [isPossibleId, setIsPossibleId] = useState(false);

  const doSignUp = async () => {
    try {
      const userData: userInfoType = {
        id: inputId,
        password: inputPw,
        name: inputName,
        birth: inputBirth,
        age: getAge(inputBirth),
        acheivement: 0,
      };

      await axios.post("/signup", userData);
      await axios.post("/makeUserResult", { id: inputId });
      window.alert("회원가입이 완료되었습니다.");
      /** 로그인 컴포넌트로 돌아가기 */
      setTabIndex(0);
    } catch (error) {
      console.error("sign-up FAILED: ", error);
    }
  };

  useEffect(() => {
    if (
      inputPw === inputConfirmPw &&
      isPossibleId &&
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
  }, [inputId, inputPw, inputConfirmPw, inputName, inputBirth, isPossibleId]);

  /** 사용자가 입력한 id가 바뀔 때마다 이미 존재하는 id인지 확인 */
  useEffect(() => {
    const handleOnChangeInputId = async () => {
      if (inputId !== "") {
        try {
          const response = await axios.get(`/checkid/${inputId}`);
          setIsPossibleId(response.data);
        } catch (error) {
          console.error("id checking Err: ", error);
        }
      } else {
        setIsPossibleId(false);
      }
    };

    handleOnChangeInputId();
  }, [inputId]);

  return (
    <>
      <div className="h-250 w-full mb-2.5 flex flex-col scroll overflow-y-auto pr-2">
        <InputTitle text="사용할 아이디" />
        <SignInput
          type="text"
          value={inputId}
          handleOnChange={setInputId}
          placeholder="아이디 설정"
          isHaveMarginBottom={inputId === ""}
        />
        {inputId && (
          <ValidityComment isCheckingID={true} isValid={isPossibleId} />
        )}

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
          isHaveMarginBottom={inputPw === ""}
        />
        {inputPw && (
          <ValidityComment
            isCheckingID={false}
            isValid={inputPw === inputConfirmPw && inputPw !== ""}
          />
        )}

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
