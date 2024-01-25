type SignInputProps = {
  type: string;
  value: string;
  handleOnChange: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  isHaveMarginBottom?: boolean;
  onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

const SignInput = ({
  type,
  value,
  handleOnChange,
  placeholder,
  isHaveMarginBottom = true,
  onKeyPress,
}: SignInputProps) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => handleOnChange(e.target.value)}
      placeholder={placeholder}
      className={`min-h-9 bg-lightgrey rounded-10 px-2.5 focus: outline-none focus:outline-primary focus:-outline-offset-2 ${
        isHaveMarginBottom ? "mb-5" : ""
      }
      ${type === "date" ? "w-36" : "w-full"}
      `}
      onKeyPress={onKeyPress}
    />
  );
};

export default SignInput;
