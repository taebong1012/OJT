type InputTitleProps = {
  text: string;
};

/** input의 제목 */
const InputTitle = ({ text }: InputTitleProps) => {
  return <span className="text-s font-bold mb-0.5">{text}</span>;
};

export default InputTitle;
