import ProfileImage from "@/components/common/ProfileImage";
import ProfileInfo from "@/components/common/ProfileInfo";
import ProfileName from "@/components/common/ProfileName";
import { userInfoType } from "@/types/userType";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  // TODO: 로그인한 사람의 정보 가져오기
  const userInfo: userInfoType = {
    id: "dksxogus1012",
    password: "an1416",
    name: "안재능",
    birth: "1996-10-12",
  };

  const navigate = useNavigate();
  const moveToStart = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      navigate("/start");
    }
  };

  return (
    <div className="min-w-[198px] h-[256px] bg-background rounded-10 p-5 flex flex-col items-center shadow-default">
      <ProfileImage />
      <ProfileName name={userInfo.name} />
      <ProfileInfo title="나이" value={27} />
      <ProfileInfo title="성취도" value={17} />
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
