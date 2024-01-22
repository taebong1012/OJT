interface TextColorWrapperProps {
  color?: string;
  text: string;
}

const TextColorWrapper = ({
  color = "#E5E5E5",
  text,
}: TextColorWrapperProps) => {
  return (
    <div
      className={`h-8 rounded-full flex justify-center items-center font-bold mr-5 ${
        color === "#E5E5E5" ? "w-[100px]" : "w-20"
      }`}
      style={{
        backgroundColor: `${color}`,
        color: `${color === "#E5E5E5" ? "#A8A8A8" : "#FCFCFC"}`,
      }}
    >
      {text}
    </div>
  );
};

export default TextColorWrapper;
