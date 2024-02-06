import MainScene from "@/scenes/tutorial/MainScene";
import Phaser from "phaser";
import { useEffect } from "react";

const TutorialGame = () => {
  useEffect(() => {
    const game = new Phaser.Game({
      type: Phaser.WEBGL,
      scale: {
        parent: "phaser-tutorial",
        mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
        width: 800,
        height: 600,
      },
      physics: {
        default: "arcade",
        arcade: {
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

  return <div id="phaser-tutorial" className="w-full h-full"></div>;
};

export default TutorialGame;
