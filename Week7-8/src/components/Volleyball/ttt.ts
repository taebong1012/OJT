export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "beji");
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.anims.create({
      key: "stand",
      frames: this.anims.generateFrameNames("beji", {
        prefix: "stand",
        start: 1,
        end: 5,
      }),
      repeat: -1,
      frameRate: 5,
    });

    this.anims.create({
      key: "walk",
      frames: this.anims.generateFrameNames("beji", {
        prefix: "walk",
        start: 1,
        end: 6,
      }),
      repeat: -1,
      frameRate: 10,
    });
  }

  update(cursors: Phaser.Types.Input.Keyboard.CursorKeys): void {
    if (cursors.left.isDown) {
      this.setVelocityX(-300);
      this.setFlipX(true);
      this.play("walk", true);
    } else if (cursors.right.isDown) {
      this.setVelocityX(300);
      this.setFlipX(false);
      this.play("walk", true);
    } else {
      this.setVelocityX(0);
      this.play("stand", true);
    }
    if (cursors.space.isDown) {
      this.setVelocityY(-500);
    }
  }
}
