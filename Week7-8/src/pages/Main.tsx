import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      메인페이지
      <button
        className="m-[5px] h-[40px] w-[120px] bg-slate-400 rounded-[10px]"
        onClick={() => {
          navigate("/tutorial");
        }}
      >
        튜토리얼
      </button>
      <button
        className="m-[5px] h-[40px] w-[120px] bg-slate-400 rounded-[10px]"
        onClick={() => {
          navigate("/volleyball");
        }}
      >
        베지배구
      </button>
      <button
        className="m-[5px] h-[40px] w-[120px] bg-slate-400 rounded-[10px]"
        onClick={() => {
          navigate("/tutorial");
        }}
      >
        다른 게임
      </button>
    </div>
  );
};

export default Main;
