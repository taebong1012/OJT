export default class BearkongPlayer extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "bearkongPlayer");
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.anims.create({
      key: "bearkongWalk",
      frames: this.anims.generateFrameNames("bearkongPlayer", {
        prefix: "bearkong-",
        start: 1,
        end: 3,
        suffix: ".png",
      }),
      repeat: -1,
      yoyo: true,
      frameRate: 6,
    });

    this.anims.create({
      key: "bearkongStay",
      frames: this.anims.generateFrameNames("bearkongPlayer", {
        prefix: "bearkong-",
        start: 4,
        end: 5,
        suffix: ".png",
      }),
      repeat: -1,
      frameRate: 4,
    });

    this.anims.create({
      key: "bearkongJump",
      frames: this.anims.generateFrameNames("bearkongPlayer", {
        prefix: "bearkong-",
        start: 6,
        end: 8,
        suffix: ".png",
      }),
      frameRate: 8,
    });

    this.anims.play("bearkongStay");
  }

  update(cursors: Phaser.Types.Input.Keyboard.CursorKeys): void {
    console.log("베어콩 업데이트");

    /** 베어콩 키보드 입력 설정 */
    if (cursors.up.isDown && this.body && this.body.blocked.down) {
      this.setVelocityY(-500);
      this.anims.play("bearkongJump");
    } else if (cursors.left.isDown) {
      if (this.x >= 452) {
        this.setVelocityX(-160);
      } else {
        this.setVelocityX(0);
      }

      if (this.body && this.body.blocked.down) {
        this.anims.play("bearkongWalk", true);
      }
    } else if (cursors.right.isDown) {
      this.setVelocityX(160);
      if (this.body && this.body.blocked.down) {
        this.anims.play("bearkongWalk", true);
      }
    } else {
      this.setVelocityX(0);
      if (this.body && this.body.blocked.down) {
        this.anims.play("bearkongStay", true);
      }
    }
  }
}
