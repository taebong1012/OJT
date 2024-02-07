export default class Whale extends Phaser.GameObjects.Sprite {
  constructor(scene: Phaser.Scene) {
    super(scene, 160, 300, "whale");
    scene.add.existing(this);

    this.setScale(0.3);

    if (!scene.anims.exists("whaleMove")) {
      scene.anims.create({
        key: "whaleMove",
        frames: scene.anims.generateFrameNames("whale", { start: 0, end: 6 }),
        frameRate: 6,
        repeat: -1,
      });
    }
    this.play("whaleMove");
  }
}
