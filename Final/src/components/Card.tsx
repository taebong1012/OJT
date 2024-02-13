type CardProps = {
  imageUrl: string;
  weekNum: string;
};

const Card = ({ imageUrl, weekNum }: CardProps) => {
  return (
    <div className="border-[1px] border-[#666666] w-[380px] h-[268px] rounded-[10px]">
      <img src={imageUrl} />
    </div>
  );
};

export default Card;
