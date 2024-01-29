import MainScene from "@/scenes/MainScene";
import Phaser from "phaser";
import { useEffect } from "react";

const Game = () => {
  useEffect(() => {
    const game = new Phaser.Game({
      type: Phaser.WEBGL,
      width: "800",
      height: "600",
      physics: {
        default: "arcade",
        arcade: {
          debug: import.meta.env.DEV,
          gravity: { y: 300 },
        },
      },
      scene: [MainScene],
    });

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div className="border-2 border-red-500"></div>;
};

export default Game;
