import backgroundImage from "@/assets/volleyball/background.svg";
import modalYellowImage from "@/assets/volleyball/modal-yellow.svg";
import groundImage from "@/assets/volleyball/ground.svg";
import netImage from "@/assets/volleyball/net.svg";
import againButtonImage from "@/assets/volleyball/buttons/again-button.png";
import mainButtonImage from "@/assets/volleyball/buttons/main-long-button.png";
import bejiWinImage from "@/assets/volleyball/beji-win.svg";
import bearkongWinImage from "@/assets/volleyball/bearkong-win.svg";
import AgainButton from "@/components/Volleyball/ResultScene/AgainButton";
import GoToMainButton from "@/components/Volleyball/ResultScene/GoToMainButton";
import {
  characterNameTextStyle,
  resultScoreTextStyle,
  titleTextStyle,
} from "@/utils/phaser/phaserTextStyle";

type dataType = {
  bejiScore: number;
  bearkongScore: number;
  roundNum: number;
};

export default class VolleyballResultScene extends Phaser.Scene {
  private bejiScore!: number;
  private bearkongScore!: number;

  constructor() {
    super({ key: "volleyBallResult" });
  }

  init(data: dataType): void {
    this.bejiScore = data.bejiScore;
    this.bearkongScore = data.bearkongScore;
  }

  preload(): void {
    this.load.image("background", backgroundImage);
    this.load.image("ground", groundImage);
    this.load.image("net", netImage);
    this.load.image("modalYellow", modalYellowImage);
    this.load.image("bearkongWin", bearkongWinImage);
    this.load.image("bejiWin", bejiWinImage);

    this.load.spritesheet("againButton", againButtonImage, {
      frameWidth: 280,
      frameHeight: 92,
    });
    this.load.spritesheet("mainButton", mainButtonImage, {
      frameWidth: 280,
      frameHeight: 92,
    });
  }

  create(): void {
    /** 이전에 게임하던 scene은 종료 */
    this.scene.stop("volleyBallGame");

    /** 배경 설정 */
    this.add.image(400, 300, "background");

    /** 장식 요소 설정 */
    this.add.image(400, 580, "ground");
    this.add.image(400, 464, "net");

    /** 모달 띄우기 */
    this.add.image(400, 300, "modalYellow");

    const titleText = new Phaser.GameObjects.Text(
      this,
      400,
      170,
      "최종 결과",
      titleTextStyle
    ).setOrigin(0.5);

    const scoreText = new Phaser.GameObjects.Text(
      this,
      400,
      280,
      `${this.bejiScore} : ${this.bearkongScore}`,
      resultScoreTextStyle
    ).setOrigin(0.5);

    const bejiNameText = new Phaser.GameObjects.Text(
      this,
      260,
      368,
      "베지",
      characterNameTextStyle
    )
      .setOrigin(0.5, 0.5)
      .setColor("#F3D000");

    const bearkongNameText = new Phaser.GameObjects.Text(
      this,
      540,
      368,
      "베어콩",
      characterNameTextStyle
    )
      .setOrigin(0.5, 0.5)
      .setColor("#D6D648");

    const bejiWinLoseText = new Phaser.GameObjects.Text(
      this,
      260,
      200,
      "",
      characterNameTextStyle
    ).setOrigin(0.5, 0.5);

    const bearkongWinLoseText = new Phaser.GameObjects.Text(
      this,
      540,
      200,
      "",
      characterNameTextStyle
    ).setOrigin(0.5, 0.5);

    if (this.bejiScore > this.bearkongScore) {
      /** 베지가 이겼을 경우 베지에게 WIN 텍스트 달아주고
       * 베어콩에게 LOSE 텍스트 달아주기
       */
      bejiWinLoseText.setText("WIN").setColor("#1447FC");
      bearkongWinLoseText.setText("LOSE").setColor("#E13636");
    } else {
      /** 베지에게 LOSE 텍스트 달아주고
       * 베어콩에게 WIN 텍스트 달아주기
       */
      bejiWinLoseText.setText("LOSE").setColor("#E13636");
      bearkongWinLoseText.setText("WIN").setColor("#1447FC");
    }

    this.add.existing(titleText);
    this.add.existing(scoreText);
    this.add.existing(bejiNameText);
    this.add.existing(bearkongNameText);
    this.add.existing(bejiWinLoseText);
    this.add.existing(bearkongWinLoseText);

    this.add.image(260, 290, "bejiWin").setScale(0.7);
    this.add.image(540, 290, "bearkongWin").setScale(0.7).setFlipX(true);

    /** 게임 다시하기 버튼 */
    new AgainButton(this, 300, 430);

    /** 메인으로 버튼 */
    new GoToMainButton(this, 500, 430);
  }
}
