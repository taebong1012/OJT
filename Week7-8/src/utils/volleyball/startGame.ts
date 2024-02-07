import initializeObjects from "@/utils/volleyball/initializeObjects";
import setColliders from "@/utils/volleyball/setColliders";

const startGame = (scene: Phaser.Scene) => {
  initializeObjects(scene);
  setColliders(scene);
};

export default startGame;
