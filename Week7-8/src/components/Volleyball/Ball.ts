export default class Ball extends Phaser.Physics.Arcade.Image {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "ball");
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setScale(0.4);
    this.setBounce(1);
    this.setMass(0.2);
    this.setCollideWorldBounds(true);
  }
}
