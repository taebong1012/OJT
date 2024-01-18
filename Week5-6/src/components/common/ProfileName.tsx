type ProfileNameProps = {
  name: string;
};

const ProfileName = ({ name }: ProfileNameProps) => {
  return (
    <div className="flex gap-[2px] mb-5">
      <span className="font-bold text-primary">{name}</span> <span>님</span>
    </div>
  );
};

export default ProfileName;
