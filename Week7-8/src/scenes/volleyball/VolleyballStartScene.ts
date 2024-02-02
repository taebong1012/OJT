import backgroundImage from "@/assets/volleyball/background.svg";
import groundImage from "@/assets/volleyball/ground.svg";
import whaleImage from "@/assets/volleyball/whale.png";
import gameButtonImage from "@/assets/volleyball/game-button.svg";
import howToImage from "@/assets/volleyball/how-to-game-button.svg";
import Whale from "@/components/Volleyball/Whale";
import StartButton from "@/components/Volleyball/StartButton";
import HowToButton from "@/components/Volleyball/HowToButton";

export default class VolleyballStartScene extends Phaser.Scene {
  constructor() {
    super({ key: "start" });
  }

  preload() {
    this.load.image("background", backgroundImage);
    this.load.image("ground", groundImage);
    this.load.image("gameButton", gameButtonImage);
    this.load.image("howto", howToImage);
    this.load.spritesheet("whale", whaleImage, {
      frameWidth: 320,
      frameHeight: 320,
    });
  }

  create() {
    /** 배경 설정 */
    this.add.image(400, 300, "background");

    /** 중력의 영향을 받지 않는 땅바닥과 네트 설정 */
    const platforms = this.physics.add.staticGroup();
    platforms.create(400, 580, "ground");

    const decorations = this.physics.add.staticGroup();
    decorations.add(new Whale(this, 160, 300));

    /** 게임하기 버튼 생성 */
    new StartButton(this, 400, 400);

    /** 게임방법 버튼 생성 */
    new HowToButton(this, 400, 476);
  }
}
