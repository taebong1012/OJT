import logo from "@/assets/svg/ic_logo.svg";

const Header = () => {
  return (
    <div className="w-screen h-16  mb-60 bg-secondary">
      <div className="w-1240 h-full mx-auto px-5 flex items-center">
        <img src={logo} alt="JEI 재능교육 스스로 진단 로고" />
      </div>
    </div>
  );
};

export default Header;
