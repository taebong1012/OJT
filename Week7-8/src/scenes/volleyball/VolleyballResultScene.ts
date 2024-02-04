import backgroundImage from "@/assets/volleyball/background.svg";
import modalYellowImage from "@/assets/volleyball/modal-yellow.svg";

export default class VolleyballResultScene extends Phaser.Scene {
  constructor() {
    super({ key: "volleyBallResult" });
  }

  preload() {
    this.load.image("background", backgroundImage);
    this.load.image("modalYellow", modalYellowImage);
  }

  create() {
    /** 배경 설정 */
    this.add.image(400, 300, "background");
    this.add.image(400, 300, "modalYellow");
  }
}
