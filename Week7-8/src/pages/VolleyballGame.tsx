import VolleyballStartScene from "@/scenes/volleyball/VolleyballStartScene";
import VolleyballGameScene from "@/scenes/volleyball/VolleyballGameScene";
import VolleyballResultScene from "@/scenes/volleyball/VolleyballResultScene";
import { useEffect } from "react";
import VolleyballPauseScene from "@/scenes/volleyball/VolleyballPauseScene";

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
      scene: [
        VolleyballStartScene,
        VolleyballGameScene,
        VolleyballResultScene,
        VolleyballPauseScene,
      ],
    });

    return () => {
      if (volleyballGame) {
        volleyballGame.destroy(true);
      }
    };
  }, []);

  return <div id="phaser-volleyball" className="w-full h-full bg-[#000000]" />;
};

export default VolleyballGame;
