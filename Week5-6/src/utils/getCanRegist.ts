type getCanRegistProps = {
  inputId: string;
  inputPw: string;
  inputName: string;
  inputBirth: string;
};

const getCanRegist = ({
  inputId,
  inputPw,
  inputName,
  inputBirth,
}: getCanRegistProps) => {
  if (
    inputId.trim() &&
    inputPw.trim() &&
    inputName.trim() &&
    inputBirth.trim()
  ) {
    console.log("엥?");
    return true;
  } else {
    return false;
  }
};

export default getCanRegist;
