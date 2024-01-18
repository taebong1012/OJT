import imgPath from "@/assets/svg/ic_profile.svg";

const ProfileImage = () => {
  return (
    <img
      src={imgPath}
      className="h-20 w-20 border-[1px] border-[#D1D1D1] rounded-full mb-2.5"
    />
  );
};

export default ProfileImage;
