import useUserProfileData from "@/hooks/useUserInfo";
import { useEffect, useState } from "react";

const Statement = ({ achievement }: { achievement: number }) => {
  const { data } = useUserProfileData();
  const [statement, setStatement] = useState<string>("");

  useEffect(() => {
    if (achievement >= 70) {
      setStatement("매우 훌륭");
    } else {
      setStatement("노력이 필요");
    }
  }, [achievement]);

  return (
    <div className="flex flex-col text-3xl font-extrabold mb-[40px]">
      <span>{data?.name} 님의</span>
      <div className="flex items-end">
        <div>성취도는 {achievement}%로&nbsp;</div>
        <div className="text-4xl text-primary">{statement}</div>합니다.
      </div>
    </div>
  );
};

export default Statement;
