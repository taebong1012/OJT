export default class RoundResultModal extends Phaser.GameObjects.Container {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y);

    /** 모달 창 배경 */
    const modalBackground = new Phaser.GameObjects.Image(
      scene,
      0,
      0,
      "modalSmall"
    );
    this.add(modalBackground);

    scene.add.existing(this);
  }
}
