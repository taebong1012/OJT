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
    return true;
  } else {
    return false;
  }
};

export default getCanRegist;
