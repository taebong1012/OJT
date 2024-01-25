type getCanRegistProps = {
  inputId: string;
  inputPw: string;
  inputName: string;
  inputBirth: string;
  setInputBirth: React.Dispatch<React.SetStateAction<string>>;
};

const getCanRegist = ({
  inputId,
  inputPw,
  inputName,
  inputBirth,
  setInputBirth,
}: getCanRegistProps) => {
  /** 오늘 날짜보다 이후의 날짜라면 false 리턴 */
  const todayDate = new Date();
  const birthDate = new Date(inputBirth);
  if (birthDate > todayDate) {
    window.alert("선택한 일자가 오늘 이후입니다. 다시 선택해주세요.");
    setInputBirth("");
    return false;
  }

  if (
    inputId.trim() &&
    inputPw.trim() &&
    inputName.trim() &&
    inputBirth.trim()
  ) {
    return true;
  } else {
    return false;
  }
};

export default getCanRegist;
