import VolleyballStartScene from "@/scenes/volleyball/VolleyballStartScene";
import { useEffect } from "react";

const VolleyballGame = () => {
  useEffect(() => {
    const volleyballGame = new Phaser.Game({
      type: Phaser.WEBGL,
      scale: {
        // 게임 div의 id
        parent: "phaser-volleyball",
        // 높이를 꽉 채우고, 비율에 맞게 가로를 조정
        mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
        // 게임이 아래의 해상도로 렌더링
        // 모든 좌표, 크기 설정은 이 크기를 기본으로 계산
        width: 800,
        height: 600,
      },
      physics: {
        default: "arcade",
        arcade: {
          //   debug: import.meta.env.DEV,
          debug: true,
          //   debug: false,
          gravity: { y: 800 },
        },
      },
      scene: [VolleyballStartScene],
    });

    return () => {
      volleyballGame.destroy(true);
    };
  }, []);

  return (
    <div
      id="phaser-volleyball"
      className="border-2 border-red-500 h-screen"
    ></div>
  );
};

export default VolleyballGame;
