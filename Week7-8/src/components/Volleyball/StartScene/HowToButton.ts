import HowToModal from "@/components/Volleyball/StartScene/HowToModal";

export default class HowToButton extends Phaser.Physics.Arcade.Image {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "howToButton");
    scene.add.existing(this);

    this.setScale(0.7);

    /** 마우스 hover 했을 경우 포인터 커서로 변경 */
    this.setInteractive()
      .on("pointerover", this.onButtonHover)

      /** 마우스가 버튼 밖으로 나갔을 경우 했을 경우 기본 커서로 변경 */
      .on("pointerout", this.onButtonOut)

      /** 마우스 클릭다운 시 다음 프레임을 통해서 버튼 눌린 이미지 표현 */
      .on("pointerdown", this.onMouseDown)

      /** 마우스 클릭업 시 다음 프레임을 통해서 버튼 눌리지 않은 이미지 표현 */
      .on("pointerup", this.onMouseUp);
  }

  onButtonHover() {
    // scene.input.setDefaultCursor("url(hover-cursor.png), pointer");
    this.scene.input.setDefaultCursor("pointer");
  }
  onButtonOut() {
    // scene.input.setDefaultCursor("url(default-cursor.png), default");
    this.scene.input.setDefaultCursor("default");
  }
  onMouseDown() {
    this.setFrame(1);
  }

  onMouseUp() {
    this.setFrame(0);
    new HowToModal(this.scene, 400, 300);
  }
}