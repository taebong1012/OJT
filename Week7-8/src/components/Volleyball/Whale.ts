export default class Whale extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "whale");
    scene.add.existing(this);

    this.setScale(0.3);

    scene.anims.create({
      key: "whaleMove",
      frames: scene.anims.generateFrameNames("whale", { start: 0, end: 6 }),
      frameRate: 6,
      repeat: -1,
    });

    this.play("whaleMove");
  }
}
