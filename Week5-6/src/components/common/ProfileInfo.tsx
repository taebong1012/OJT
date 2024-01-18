type ProfileInfoProps = {
  title: string;
  value: number;
};

/** 로그인한 유저의 나이 혹은 성취도를 노출하는 컴포넌트
 * @param title : "나이" 혹은 "성취도"
 * @param value : 나이 숫자 혹은 성취도 숫자
 */
const ProfileInfo = ({ title, value }: ProfileInfoProps) => {
  return (
    <div className="w-full flex justify-between mb-2.5">
      <span>{title}</span>
      <span className="font-bold">
        {value}
        {title === "나이" ? "세" : "%"}
      </span>
    </div>
  );
};

export default ProfileInfo;
