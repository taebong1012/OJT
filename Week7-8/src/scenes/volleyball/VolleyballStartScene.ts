import backgroundImage from "@/assets/volleyball/images/background.svg";
import groundImage from "@/assets/volleyball/images/ground.svg";
import whaleImage from "@/assets/volleyball/images/whale.png";
import gameButtonImage from "@/assets/volleyball/images/game-button.png";
import howToButtonImage from "@/assets/volleyball/images/how-to-button.png";
import closeButtonImage from "@/assets/volleyball/images/close-button.png";
import modalYellowImage from "@/assets/volleyball/images/modal-yellow.svg";
import modalSmallImage from "@/assets/volleyball/images/modal-small.svg";
import wasdKeyImage from "@/assets/volleyball/images/key-wasd.svg";
import arrowKeyImage from "@/assets/volleyball/images/key-arrow.svg";
import separateKeyImage from "@/assets/volleyball/images/key-separate.png";
import soundButtonImage from "@/assets/volleyball/images/sound-button.png";
import titleImage from "@/assets/volleyball/images/title.png";
import cursorDefault from "@/assets/volleyball/images/cursor-default.png";
import startBGMusic from "@/assets/volleyball/sounds/startBGMusic.mp3";
import clickSound from "@/assets/volleyball/sounds/clickSound.mp3";
import Whale from "@/components/Volleyball/Whale";
import StartButton from "@/components/Volleyball/StartScene/StartButton";
import HowToButton from "@/components/Volleyball/StartScene/HowToButton";

export default class VolleyballStartScene extends Phaser.Scene {
  constructor() {
    super({ key: "volleyBallStart" });
  }

  preload() {
    /** 로딩 될 때 로딩바 띄우기 */
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();

    progressBox.fillStyle(0x999999, 0.7);
    progressBox.fillRoundedRect(240, 275, 320, 50, 10);

    this.load.on("progress", async (value: number) => {
      progressBar.clear();
      progressBar.fillStyle(0x5170ec, 1);
      progressBar.fillRoundedRect(250, 285, 300 * value, 30, 10);
    });

    this.load.audio("startBGMusic", startBGMusic);
    this.load.audio("clickSound", clickSound);
    this.load.image("titleImage", titleImage);
    this.load.image("background", backgroundImage);
    this.load.image("ground", groundImage);
    this.load.image("modalYellow", modalYellowImage);
    this.load.image("modalSmall", modalSmallImage);
    this.load.image("arrowKey", arrowKeyImage);
    this.load.image("wasdKey", wasdKeyImage);
    this.load.spritesheet("whale", whaleImage, {
      frameWidth: 320,
      frameHeight: 320,
    });
    this.load.spritesheet("gameButton", gameButtonImage, {
      frameWidth: 280,
      frameHeight: 92,
    });
    this.load.spritesheet("howToButton", howToButtonImage, {
      frameWidth: 280,
      frameHeight: 92,
    });
    this.load.spritesheet("closeButton", closeButtonImage, {
      frameWidth: 147,
      frameHeight: 147,
    });
    this.load.spritesheet("seperateKey", separateKeyImage, {
      frameWidth: 120,
      frameHeight: 120,
    });
    this.load.spritesheet("soundButton", soundButtonImage, {
      frameWidth: 146,
      frameHeight: 146,
    });
  }

  create() {
    /** 커서 설정 */
    this.input.setDefaultCursor(`url(${cursorDefault}), default`);

    /** 원래 음악 모두 제거 후 배경음악 설정 */
    this.sound.stopAll();
    this.sound.add("startBGMusic", { loop: true }).setVolume(0.6).play();

    /** 배경 설정 */
    this.add.image(400, 300, "background");

    /** 타이틀 설정 */
    this.add.image(400, 200, "titleImage");

    /** 중력의 영향을 받지 않는 땅바닥과 네트 설정 */
    const platforms = this.physics.add.staticGroup();
    platforms.create(400, 580, "ground");

    new Whale(this);

    /** 게임하기 버튼 생성 */
    new StartButton(this, 400, 400);

    /** 게임방법 버튼 생성 */
    new HowToButton(this, 400, 476);
  }
}
