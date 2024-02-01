import MainScene from "@/scenes/tutorial/MainScene";
import Phaser from "phaser";
import { useEffect } from "react";

const TutorialGame = () => {
  useEffect(() => {
    const game = new Phaser.Game({
      type: Phaser.WEBGL,
      width: "800",
      height: "600",
      physics: {
        default: "arcade",
        arcade: {
          //   debug: import.meta.env.DEV,
          debug: false,
          gravity: { y: 300 },
        },
      },
      parent: "phaser-tutorial",
      scene: [MainScene],
    });

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="phaser-tutorial" className="border-2 border-red-500"></div>;
};

export default TutorialGame;