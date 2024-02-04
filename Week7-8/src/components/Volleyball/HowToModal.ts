export default class HowToModal extends Phaser.GameObjects.Container {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y);

    const modalBackground = new Phaser.GameObjects.Image(
      scene,
      0,
      0,
      "modalYellow"
    );
    this.add(modalBackground);

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
