import { MouseEventHandler } from "react";

type MainButtonProps = {
  text: string;
  handleOnClick: MouseEventHandler<HTMLButtonElement>;
  isFull?: boolean;
  isDisabled?: boolean;
};

const MainButton = ({
  text,
  handleOnClick,
  isFull = false,
  isDisabled = false,
}: MainButtonProps) => {
  return (
    <button
      onClick={handleOnClick}
      disabled={isDisabled}
      className={`h-10  font-bold text-background focus:outline-none flex justify-center items-center
      ${isFull ? "w-full" : "w-160"}
      ${
        isDisabled
          ? "bg-darkgrey"
          : "bg-primary hover:bg-buttonhover active:bg-buttonactive"
      }
      `}
    >
      {text}
    </button>
  );
};

export default MainButton;
