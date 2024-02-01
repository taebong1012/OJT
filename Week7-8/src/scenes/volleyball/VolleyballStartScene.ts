import backgroundImage from "@/assets/volleyball/background.svg";
import groundImage from "@/assets/volleyball/ground.svg";
import bejiPlayImage from "@/assets/volleyball/anim/beji-play.png";
import bejiPlayJson from "@/assets/volleyball/anim/beji-play.json";
import bearkongPlayImage from "@/assets/volleyball/anim/bearkong-play.png";
import bearkongPlayJson from "@/assets/volleyball/anim/bearkong-play.json";
import netImage from "@/assets/volleyball/net.svg";
import whaleImage from "@/assets/volleyball/whale.png";

export default class VolleyballStartScene extends Phaser.Scene {
  private bejiPlayer!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  private bearkongPlayer!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super({ key: "main" });
  }

  preload() {
    this.load.image("background", backgroundImage);
    this.load.atlas("bejiPlay", bejiPlayImage, bejiPlayJson);
    this.load.atlas("bearkongPlay", bearkongPlayImage, bearkongPlayJson);
    this.load.image("ground", groundImage);
    this.load.image("net", netImage);
    this.load.spritesheet("whale", whaleImage, {
      frameWidth: 320,
      frameHeight: 320,
    });
  }

  create() {
    /** 배경 설정 */
    this.add.image(400, 300, "background");

    /** 커서 설정 */
    this.cursors = this.input.keyboard!.createCursorKeys();

    /** 중력의 영향을 받지 않는 땅바닥 설정 */
    const platforms = this.physics.add.staticGroup();

    platforms.create(400, 580, "ground");
    platforms.create(400, 464, "net");

    /** 중력의 영향을 받지 않는 꾸밈 요소들 설정 */
    const decorations = this.physics.add.staticGroup();

    const whale = decorations.create(160, 300, "whale");
    whale.setScale(0.3);

    // 웨일 애니메이션 설정
    this.anims.create({
      key: "whaleMove",
      frames: this.anims.generateFrameNames("whale", { start: 0, end: 6 }),
      frameRate: 6,
      repeat: -1,
    });

    whale.play("whaleMove");

    /** 베지 캐릭터 설정 */
    this.bejiPlayer = this.physics.add.sprite(
      200,
      443,
      "bejiPlay",
      "beji-1.png"
    );

    this.bejiPlayer.anims.create({
      key: "bejiWalk",
      frames: this.anims.generateFrameNames("bejiPlay", {
        prefix: "beji-",
        start: 1,
        end: 3,
        suffix: ".png",
      }),
      repeat: -1,
      yoyo: true,
      frameRate: 6,
    });

    this.bejiPlayer.anims.create({
      key: "bejiStay",
      frames: this.anims.generateFrameNames("bejiPlay", {
        prefix: "beji-",
        start: 4,
        end: 5,
        suffix: ".png",
      }),
      repeat: -1,
      frameRate: 4,
    });

    this.bejiPlayer.anims.create({
      key: "bejiJump",
      frames: this.anims.generateFrameNames("bejiPlay", {
        prefix: "beji-",
        start: 6,
        end: 8,
        suffix: ".png",
      }),
      frameRate: 8,
    });

    this.bejiPlayer.play("bejiStay");
    this.bejiPlayer.setCollideWorldBounds(true);
    this.physics.add.collider(this.bejiPlayer, platforms);

    /** 베어콩 캐릭터 설정 */
    this.bearkongPlayer = this.physics.add.sprite(
      600,
      443,
      "bearkongPlay",
      "bearkong-1.png"
    );

    this.bearkongPlayer.anims.create({
      key: "bearkongWalk",
      frames: this.anims.generateFrameNames("bearkongPlay", {
        prefix: "bearkong-",
        start: 1,
        end: 3,
        suffix: ".png",
      }),
      repeat: -1,
      yoyo: true,
      frameRate: 6,
    });

    this.bearkongPlayer.anims.create({
      key: "bearkongStay",
      frames: this.anims.generateFrameNames("bearkongPlay", {
        prefix: "bearkong-",
        start: 4,
        end: 5,
        suffix: ".png",
      }),
      repeat: -1,
      frameRate: 4,
    });

    this.bearkongPlayer.anims.create({
      key: "bearkongJump",
      frames: this.anims.generateFrameNames("bearkongPlay", {
        prefix: "bearkong-",
        start: 6,
        end: 8,
        suffix: ".png",
      }),
      frameRate: 8,
    });

    this.bearkongPlayer.play("bearkongStay");
    this.bearkongPlayer.setCollideWorldBounds(true);
    this.physics.add.collider(this.bearkongPlayer, platforms);
  }

  update(): void {
    /** 베지 키보드 입력 설정 */
    const wKey = this.input.keyboard?.addKey("W");
    const aKey = this.input.keyboard?.addKey("A");
    const dKey = this.input.keyboard?.addKey("D");

    // 키보드 입력 감지
    const isWPressed = wKey?.isDown;
    const isAPressed = aKey?.isDown;
    const isDPressed = dKey?.isDown;

    if (isWPressed && this.bejiPlayer.body.blocked.down) {
      this.bejiPlayer.setVelocityY(-500);
      this.bejiPlayer.anims.play("bejiJump");
    } else if (isAPressed) {
      this.bejiPlayer.setVelocityX(-160);

      if (this.bejiPlayer.body.blocked.down) {
        this.bejiPlayer.anims.play("bejiWalk", true);
      }
    } else if (isDPressed) {
      if (this.bejiPlayer.x <= 350) {
        this.bejiPlayer.setVelocityX(160);
      } else {
        this.bejiPlayer.setVelocityX(0);
      }
      if (this.bejiPlayer.body.blocked.down) {
        this.bejiPlayer.anims.play("bejiWalk", true);
      }
    } else {
      this.bejiPlayer.setVelocityX(0);
      if (this.bejiPlayer.body.blocked.down) {
        this.bejiPlayer.anims.play("bejiStay", true);
      }
    }

    /** 베어콩 키보드 입력 설정 */
    if (this.cursors.up.isDown && this.bearkongPlayer.body.blocked.down) {
      this.bearkongPlayer.setVelocityY(-500);
      this.bearkongPlayer.anims.play("bearkongJump");
    } else if (this.cursors.left.isDown) {
      if (this.bearkongPlayer.x >= 452) {
        this.bearkongPlayer.setVelocityX(-160);
      } else {
        this.bearkongPlayer.setVelocityX(0);
      }

      if (this.bearkongPlayer.body.blocked.down) {
        this.bearkongPlayer.anims.play("bearkongWalk", true);
      }
    } else if (this.cursors.right.isDown) {
      this.bearkongPlayer.setVelocityX(160);
      if (this.bearkongPlayer.body.blocked.down) {
        this.bearkongPlayer.anims.play("bearkongWalk", true);
      }
    } else {
      this.bearkongPlayer.setVelocityX(0);
      if (this.bearkongPlayer.body.blocked.down) {
        this.bearkongPlayer.anims.play("bearkongStay", true);
      }
    }
  }
}
