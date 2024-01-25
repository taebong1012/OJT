import ProfileImage from "@/components/common/ProfileImage";
import ProfileInfo from "@/components/common/ProfileInfo";
import ProfileName from "@/components/common/ProfileName";
import useUserProfileData from "@/hooks/useUserInfo";
import { doLogout } from "@/utils/doLogout";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const moveToStart = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      doLogout();
      navigate("/start");
    }
  };

  const { data } = useUserProfileData();

  return (
    <div className="min-w-[198px] h-[256px] bg-background rounded-10 p-5 flex flex-col items-center shadow-default">
      <ProfileImage />
      <ProfileName name={data?.name || "err"} />
      <ProfileInfo title="나이" value={data?.age || 0} />
      <ProfileInfo title="종합 성취도" value={data?.acheivement || 0} />
      <span
        onClick={moveToStart}
        className="text-s underline underline-offset-4 text-[#BCBCBC] hover:no-underline hover:cursor-pointer hover:text-primary"
      >
        로그아웃
      </span>
    </div>
  );
};

export default Profile;
