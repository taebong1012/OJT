import backgroundImage from "@/assets/volleyball/images/background.svg";
import whaleImage from "@/assets/volleyball/images/whale.png";
import modalPauseImage from "@/assets/volleyball/images/modal-pause.svg";
import resumeButtonImage from "@/assets/volleyball/images/resume-button.png";
import groundImage from "@/assets/volleyball/images/ground.svg";
import netImage from "@/assets/volleyball/images/net.svg";
import mainButtonImage from "@/assets/volleyball/images/main-short-button.png";
import clickSound from "@/assets/volleyball/sounds/clickSound.mp3";
import ResumeButton from "@/components/Volleyball/PauseScene/ResumeButton";
import Whale from "@/components/Volleyball/Whale";
import MainIconButton from "@/components/Volleyball/PauseScene/MainIconButton";
import {
  contentTextStyle,
  titleTextStyle,
} from "@/utils/phaser/phaserTextStyle";

export default class VolleyballPauseScene extends Phaser.Scene {
  constructor() {
    super({ key: "volleyBallPause" });
  }

  preload(): void {
    this.load.audio("clickSound", clickSound);
    this.load.image("background", backgroundImage);
    this.load.image("ground", groundImage);
    this.load.image("net", netImage);
    this.load.image("modalPause", modalPauseImage);

    this.load.spritesheet("whale", whaleImage, {
      frameWidth: 320,
      frameHeight: 320,
    });
    this.load.spritesheet("resumeButton", resumeButtonImage, {
      frameWidth: 146,
      frameHeight: 146,
    });
    this.load.spritesheet("mainIconButton", mainButtonImage, {
      frameWidth: 146,
      frameHeight: 146,
    });
  }

  create(): void {
    /** 음악 음소거 */
    this.time.delayedCall(300, () => {
      this.sound.pauseAll();
    });

    /** 배경 설정 */
    this.add.image(400, 300, "background");

    new Whale(this, 160, 300);

    this.add.image(400, 464, "net");
    this.add.image(400, 580, "ground");
    this.add.image(400, 300, "modalPause");

    new ResumeButton(this, 340, 310);
    new MainIconButton(this, 460, 310);

    const titleText = new Phaser.GameObjects.Text(
      this,
      400,
      236,
      "일시정지",
      titleTextStyle
    ).setOrigin(0.5);

    const resumeText = new Phaser.GameObjects.Text(
      this,
      340,
      370,
      "게임 재개",
      contentTextStyle
    ).setOrigin(0.5);

    const goToMainText = new Phaser.GameObjects.Text(
      this,
      460,
      370,
      "메인으로",
      contentTextStyle
    ).setOrigin(0.5);

    this.add.existing(titleText);
    this.add.existing(resumeText);
    this.add.existing(goToMainText);
  }
}
