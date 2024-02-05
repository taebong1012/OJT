import {
  contentTextStyle,
  pointTextStyle,
  subTextStyle,
  titleTextStyle,
} from "@/utils/phaser/phaserTextStyle";

export default class HowToModal extends Phaser.GameObjects.Container {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y);

    /** 모달 창 배경 */
    const modalBackground = new Phaser.GameObjects.Image(
      scene,
      0,
      0,
      "modalYellow"
    );
    this.add(modalBackground);

    /** 닫기 버튼 컴포넌트 생성 및 설정 */
    const closeButton = new Phaser.GameObjects.Sprite(
      scene,
      240,
      -144,
      "closeButton"
    );
    closeButton.setScale(0.2);
    closeButton
      .setInteractive()
      .on("pointerover", this.onHoverCloseButton.bind(this, closeButton))
      .on("pointerout", this.onOutCloseButton.bind(this, closeButton))
      .on("pointerdown", this.onMouseDownCloseButton.bind(this, closeButton))
      .on("pointerup", this.onMouseUpCloseButton.bind(this, closeButton));

    this.add(closeButton);

    /** 모달 제목 추가 */

    const titleText = new Phaser.GameObjects.Text(
      scene,
      -250,
      -160,
      "게임 방법",
      titleTextStyle
    );
    this.add(titleText);

    const contentNo1Text = new Phaser.GameObjects.Text(
      scene,
      -250,
      -100,
      "1. 베지는                     를 통해서 움직일 수 있어요!",
      contentTextStyle
    );
    const contentNo2Text = new Phaser.GameObjects.Text(
      scene,
      -250,
      -24,
      "2. 베어콩은                     를 통해서 움직일 수 있어요!",
      contentTextStyle
    );
    const contentNo3Text = new Phaser.GameObjects.Text(
      scene,
      -250,
      118,
      "3.         을 먼저 획득하면 승리해요!",
      contentTextStyle
    );

    const contentKeyExplainText = new Phaser.GameObjects.Text(
      scene,
      0,
      46,
      "왼쪽으로 이동                   오른쪽으로 이동                   위로 점프",
      subTextStyle
    ).setOrigin(0.5, 0.5);

    const pointText = new Phaser.GameObjects.Text(
      scene,
      -220,
      118,
      "5점",
      pointTextStyle
    );

    this.add(contentNo1Text);
    this.add(contentNo2Text);
    this.add(contentNo3Text);
    this.add(contentKeyExplainText);
    this.add(pointText);

    /** 게임방법 방향키 이미지 추가 */
    /** WASD 키 이미지 */
    this.add(
      new Phaser.GameObjects.Image(scene, -116, -90, "wasdKey").setScale(0.2)
    );
    /** 화살표 키 이미지 */
    this.add(
      new Phaser.GameObjects.Image(scene, -100, -14, "arrowKey").setScale(0.2)
    );

    /** 왼쪽 화살표 키 이미지 */
    this.add(
      new Phaser.GameObjects.Sprite(scene, -155, 72, "seperateKey")
        .setFrame(0)
        .setScale(0.2)
    );
    /** A 키 이미지 */
    this.add(
      new Phaser.GameObjects.Sprite(scene, -124, 72, "seperateKey")
        .setFrame(1)
        .setScale(0.2)
    );

    /** 오른쪽 화살표 키 이미지 */
    this.add(
      new Phaser.GameObjects.Sprite(scene, 0, 72, "seperateKey")
        .setFrame(2)
        .setScale(0.2)
    );
    /** D 키 이미지 */
    this.add(
      new Phaser.GameObjects.Sprite(scene, 31, 72, "seperateKey")
        .setFrame(3)
        .setScale(0.2)
    );

    /** 위쪽 화살표 키 이미지 */
    this.add(
      new Phaser.GameObjects.Sprite(scene, 137, 72, "seperateKey")
        .setFrame(4)
        .setScale(0.2)
    );
    /** W 키 이미지 */
    this.add(
      new Phaser.GameObjects.Sprite(scene, 168, 72, "seperateKey")
        .setFrame(5)
        .setScale(0.2)
    );

    scene.add.existing(this);
  }

  onHoverCloseButton(closeButton: Phaser.GameObjects.Sprite) {
    closeButton.setFrame(1);
    this.scene.input.setDefaultCursor("pointer");
  }

  onOutCloseButton(closeButton: Phaser.GameObjects.Sprite) {
    closeButton.setFrame(0);
    this.scene.input.setDefaultCursor("default");
  }

  onMouseDownCloseButton(closeButton: Phaser.GameObjects.Sprite) {
    closeButton.setFrame(2);
  }

  onMouseUpCloseButton(closeButton: Phaser.GameObjects.Sprite) {
    closeButton.setFrame(0);
    this.destroy();
  }
}
