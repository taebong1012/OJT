import { winCharacterTextStyle } from "@/utils/phaser/phaserTextStyle";

export default class RoundResultModal extends Phaser.GameObjects.Container {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    roundNum: number,
    isBejiWin: boolean
  ) {
    super(scene, x, y);

    /** 모달 창 배경 */
    const modalBackground = new Phaser.GameObjects.Image(
      scene,
      0,
      0,
      "modalSmall"
    );
    this.add(modalBackground);

    const RoundTextStyle = {
      font: "24px NanumSquareRoundEB",
      color: "#333333",
    };
    const RoundText = new Phaser.GameObjects.Text(
      scene,
      0,
      -80,
      `${roundNum} 라운드 결과`,
      RoundTextStyle
    ).setOrigin(0.5);

    let winCharacterImage!: Phaser.GameObjects.Image;
    const winCharacterName = new Phaser.GameObjects.Text(
      scene,
      0,
      10,
      "err",
      winCharacterTextStyle
    ).setOrigin(0.5, 0.5);

    if (isBejiWin) {
      /** 베지가 이겼을 경우 베지의 이미지와 함께 텍스트 출력 */
      winCharacterImage = new Phaser.GameObjects.Image(
        scene,
        -90,
        10,
        "bejiWin"
      ).setScale(0.5);

      winCharacterName.setText("베지");
      winCharacterName.setColor("#F3D000");
    } else {
      /** 베어콩이 이겼을 경우 베어콩의 이미지와 함께 텍스트 출력 */
      winCharacterImage = new Phaser.GameObjects.Image(
        scene,
        -90,
        10,
        "bearkongWin"
      ).setScale(0.5);

      winCharacterName.setText("베어콩");
      winCharacterName.setColor("#D6D648");
    }

    const winText = new Phaser.GameObjects.Text(
      scene,
      90,
      10,
      "승리!",
      winCharacterTextStyle
    ).setOrigin(0.5);

    this.add(RoundText);
    this.add(winCharacterImage);
    this.add(winCharacterName);
    this.add(winText);

    scene.add.existing(this);
  }
}
