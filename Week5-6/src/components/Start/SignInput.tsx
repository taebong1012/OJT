type SignInputProps = {
  type: string;
  value: string;
  handleOnChange: Function;
  placeholder: string;
  isHaveMarginBottom?: boolean;
};

const SignInput = ({
  type,
  value,
  handleOnChange,
  placeholder,
  isHaveMarginBottom = true,
}: SignInputProps) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => handleOnChange(e.target.value)}
      placeholder={placeholder}
      className={`min-h-9 bg-lightgrey rounded-10 px-2.5 focus: outline-none focus:outline-primary focus:-outline-offset-2 ${
        isHaveMarginBottom ? "mb-5" : ""
      }`}
    />
  );
};

export default SignInput;
