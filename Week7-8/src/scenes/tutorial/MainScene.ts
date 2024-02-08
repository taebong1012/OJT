import Phaser, { GameObjects } from "phaser";
import backgroundImage from "@/assets/tutorial/sky.png";
import groundImage from "@/assets/tutorial/platform.png";
import playerImage from "@/assets/tutorial/dude.png";
import starImage from "@/assets/tutorial/star.png";
import bombImage from "@/assets/tutorial/bomb.png";

class MainScene extends Phaser.Scene {
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private player!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  private stars!: GameObjects.Group;
  private bombs!: GameObjects.Group;
  private scoreText!: GameObjects.Text;
  private score!: number;

  constructor() {
    super({ key: "main" });
  }

  preload() {
    this.load.image("sky", backgroundImage);
    this.load.image("ground", groundImage);
    this.load.image("star", starImage);
    this.load.image("bomb", bombImage);
    this.load.spritesheet("player", playerImage, {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {
    /** 배경 설정 */
    this.add.image(400, 300, "sky");

    /** set cursors */
    this.cursors = this.input.keyboard!.createCursorKeys();

    /** 중력의 영향을 받지 않는 땅바닥 설정 */
    const platforms = this.physics.add.staticGroup();

    /** 땅바닥 이미지 추가 */
    platforms.create(400, 568, "ground").setScale(2).refreshBody();
    platforms.create(600, 400, "ground");
    platforms.create(50, 250, "ground");
    platforms.create(750, 220, "ground");

    /** 사용자 캐릭터 설정 */
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

    /** 별들 설정 */
    this.stars = this.physics.add.group({
      key: "star",
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 },
    });

    this.stars.children.iterate((child: GameObjects.GameObject) => {
      const star = child as Phaser.Physics.Arcade.Sprite;
      star.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
      return null;
    });

    this.physics.add.collider(this.player, platforms);
    this.physics.add.collider(this.stars, platforms);

    /** player와 star의 겹침 감지 */
    this.physics.add.overlap(
      this.player,
      this.stars,
      this.collectStar,
      undefined,
      this
    );

    /** 점수 및 점수 텍스트 설정 */
    this.score = 0;

    this.scoreText = this.add.text(16, 16, `Score: ${this.score}`, {
      fontSize: "32px",
      color: "#FFFFFF",
    });

    this.bombs = this.physics.add.group();

    this.physics.add.collider(this.bombs, platforms);
    this.physics.add.collider(
      this.player,
      this.bombs,
      this.hitBomb,
      undefined,
      this
    );
  }

  update() {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.anims.play("left", true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      this.player.anims.play("right", true);
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play("turn");
    }

    if (this.cursors.up.isDown && this.player.body!.touching.down) {
      this.player.setVelocityY(-330);
    }
  }

  collectStar(
    _player:
      | Phaser.Types.Physics.Arcade.GameObjectWithBody
      | Phaser.Tilemaps.Tile,
    star: Phaser.Types.Physics.Arcade.GameObjectWithBody | Phaser.Tilemaps.Tile
  ) {
    (star as Phaser.Physics.Arcade.Sprite).disableBody(true, true);
    this.score += 10;
    this.scoreText.setText(`Score: ${this.score}`);

    /** GameObjects.Group의 멤버 중에서 활성화된 멤버의 수가 0 */
    if (this.stars.countActive(true) === 0) {
      this.stars.children.iterate((child: GameObjects.GameObject) => {
        const star = child as Phaser.Physics.Arcade.Sprite;
        star.enableBody(true, star.x, 0, true, true);
        return null;
      });

      const x =
        this.player.x < 400
          ? Phaser.Math.Between(400, 800)
          : Phaser.Math.Between(0, 400);

      const bomb = this.bombs.create(x, 16, "bomb");
      bomb.setBounce(1);
      bomb.setCollideWorldBounds(true);
      bomb.setVelocityY(Phaser.Math.Between(-200, 200), 20);
    }
  }

  hitBomb(
    player:
      | Phaser.Types.Physics.Arcade.GameObjectWithBody
      | Phaser.Tilemaps.Tile
  ) {
    this.physics.pause();
    (player as Phaser.Types.Physics.Arcade.SpriteWithDynamicBody).setTint(
      0xff0000
    );

    (player as Phaser.Types.Physics.Arcade.SpriteWithDynamicBody).anims.play(
      "turn"
    );
  }
}

export default MainScene;
