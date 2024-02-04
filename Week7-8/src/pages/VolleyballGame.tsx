import VolleyballStartScene from "@/scenes/volleyball/VolleyballStartScene";
import VolleyballGameScene from "@/scenes/volleyball/VolleyballGameScene";
import { useEffect } from "react";
import VolleyballResultScene from "@/scenes/volleyball/VolleyballResultScene";

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
          debug: false,
          gravity: { y: 800 },
        },
      },
      scene: [VolleyballStartScene, VolleyballGameScene, VolleyballResultScene],
    });

    return () => {
      volleyballGame.destroy(true);
    };
  }, []);

  return (
    <div
      id="phaser-volleyball"
      className="border-2 border-red-500 h-screen max-h-[800px]"
    />
  );
};

export default VolleyballGame;
