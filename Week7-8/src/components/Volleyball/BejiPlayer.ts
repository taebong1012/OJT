export default class BejiPlayer extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "bejiPlayer");
    scene.add.existing(this);
    scene.physics.add.existing(this);

    if (!scene.input || !scene.input.keyboard) {
      throw new Error("Keyboard input not available in the scene.");
    }

    this.anims.create({
      key: "bejiWalk",
      frames: this.anims.generateFrameNames("bejiPlayer", {
        prefix: "beji-",
        start: 1,
        end: 3,
        suffix: ".png",
      }),
      repeat: -1,
      yoyo: true,
      frameRate: 6,
    });

    this.anims.create({
      key: "bejiStay",
      frames: this.anims.generateFrameNames("bejiPlayer", {
        prefix: "beji-",
        start: 4,
        end: 5,
        suffix: ".png",
      }),
      repeat: -1,
      frameRate: 4,
    });

    this.anims.create({
      key: "bejiJump",
      frames: this.anims.generateFrameNames("bejiPlayer", {
        prefix: "beji-",
        start: 6,
        end: 8,
        suffix: ".png",
      }),
      frameRate: 8,
    });

    this.setCollideWorldBounds(true);
    this.anims.play("bejiStay");
  }

  update(
    keyA: Phaser.Input.Keyboard.Key,
    keyD: Phaser.Input.Keyboard.Key,
    keyW: Phaser.Input.Keyboard.Key
  ): void {
    if (this.body) {
      if (keyW.isDown && this.body.blocked.down) {
        this.setVelocityY(-500);
        this.anims.play("bejiJump");
      } else if (keyA.isDown) {
        this.setVelocityX(-160);

        if (this.body.blocked.down) {
          this.anims.play("bejiWalk", true);
        }
      } else if (keyD.isDown) {
        if (this.x <= 350) {
          this.setVelocityX(160);
        } else {
          this.setVelocityX(0);
        }

        if (this.body.blocked.down) {
          this.anims.play("bejiWalk", true);
        }
      } else {
        this.setVelocityX(0);
        if (this.body.blocked.down) {
          this.anims.play("bejiStay", true);
        }
      }
    }
  }
}
