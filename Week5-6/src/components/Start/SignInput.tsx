type SignInputProps = {
  type: string;
  value: string;
  handleOnChange: Function;
  placeholder: string;
};

const SignInput = ({
  type,
  value,
  handleOnChange,
  placeholder,
}: SignInputProps) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => handleOnChange(e.target.value)}
      placeholder={placeholder}
      className="h-9 bg-lightgrey mb-5 rounded-10 px-2.5 focus: outline-none focus:outline-primary focus:-outline-offset-2"
    />
  );
};

export default SignInput;
