import Phaser from "phaser";
import backgroundImage from "@/assets/sky.png";
import groundImage from "@/assets/platform.png";
import playerImage from "@/assets/dude.png";

class MainScene extends Phaser.Scene {
  cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  player!: Phaser.Physics.Arcade.Sprite; // Declare player as a member variable

  constructor() {
    super({ key: "main" });
  }

  preload() {
    this.load.image("sky", backgroundImage);
    this.load.image("ground", groundImage);
    this.load.spritesheet("player", playerImage, {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {
    /** 배경 설정 */
    this.add.image(400, 300, "sky");

    /** 중력의 영향을 받지 않는 땅바닥 설정 */
    const platforms = this.physics.add.staticGroup();

    /** 땅바닥 이미지 추가 */
    platforms.create(400, 568, "ground").setScale(2).refreshBody();
    platforms.create(600, 400, "ground");
    platforms.create(50, 250, "ground");
    platforms.create(750, 220, "ground");

    /** 사용자 캐릭터 추가 */
    this.player = this.physics.add.sprite(100, 450, "player");

    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNames("player", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: "player", frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNames("player", { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    this.physics.add.collider(this.player, platforms);
  }

  update() {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
    }
  }
}

export default MainScene;
