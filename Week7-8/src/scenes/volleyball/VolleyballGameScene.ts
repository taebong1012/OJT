import backgroundImage from "@/assets/volleyball/background.svg";
import groundImage from "@/assets/volleyball/ground.svg";
import bejiPlayImage from "@/assets/volleyball/anim/beji-play.png";
import bejiPlayJson from "@/assets/volleyball/anim/beji-play.json";
import bearkongPlayImage from "@/assets/volleyball/anim/bearkong-play.png";
import bearkongPlayJson from "@/assets/volleyball/anim/bearkong-play.json";
import netImage from "@/assets/volleyball/net.svg";
import whaleImage from "@/assets/volleyball/whale.png";
import ballImage from "@/assets/volleyball/ball.svg";
import { GameObjects } from "phaser";
import BejiPlayer from "@/components/Volleyball/BejiPlayer";
import Ball from "@/components/Volleyball/Ball";
import Whale from "@/components/Volleyball/Whale";
import BearkongPlayer from "@/components/Volleyball/BearkongPlayer";

export default class VolleyballStartScene extends Phaser.Scene {
  private bejiPlayer!: BejiPlayer;
  private bearkongPlayer!: BearkongPlayer;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private ground!: Phaser.Physics.Arcade.StaticGroup;
  private net!: Phaser.Physics.Arcade.StaticGroup;
  private ball!: GameObjects.GameObject;
  private keyA!: Phaser.Input.Keyboard.Key;
  private keyD!: Phaser.Input.Keyboard.Key;
  private keyW!: Phaser.Input.Keyboard.Key;

  constructor() {
    super({ key: "volleyBallGame" });
  }

  preload() {
    this.load.image("background", backgroundImage);
    this.load.atlas("bejiPlayer", bejiPlayImage, bejiPlayJson);
    this.load.atlas("bearkongPlayer", bearkongPlayImage, bearkongPlayJson);
    this.load.image("ground", groundImage);
    this.load.image("net", netImage);
    this.load.image("ball", ballImage);
    this.load.spritesheet("whale", whaleImage, {
      frameWidth: 320,
      frameHeight: 320,
    });
  }

  create() {
    if (this.input.keyboard) {
      /** 커서 설정 */
      this.cursors = this.input.keyboard.createCursorKeys();

      /** 키보드 키 설정 */
      this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
      this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
      this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    }

    /** 배경 설정 */
    this.add.image(400, 300, "background");

    /** 중력의 영향을 받지 않는 꾸밈 요소들 설정, 공과 상호작용 불가 */
    const decorations = this.physics.add.staticGroup();
    decorations.add(new Whale(this, 160, 300));

    /** 중력의 영향을 받지 않는 땅바닥 설정, 공과 상호작용 */
    this.ground = this.physics.add.staticGroup();
    this.ground.create(400, 580, "ground");

    /** 중력의 영향을 받지 않는 네트 설정, 공과 상호작용 */
    this.net = this.physics.add.staticGroup();
    this.net.create(400, 464, "net");

    /** 카운트 다운 시작 */
    this.countdown();
  }

  countdown(): void {
    let count = 3;

    const countdownText = this.add.text(400, 300, `${count}`, {
      font: "100px NanumSquareRoundEB",
      color: "#ffffff",
    });
    countdownText.setOrigin(0.5);

    const countdownTimer = this.time.addEvent({
      delay: 1000,
      callback: () => {
        count--;

        if (count >= 0) {
          countdownText.setText(`${count}`);
        } else {
          countdownText.destroy();
          countdownTimer.destroy();
          this.startGame();
        }
      },
      callbackScope: this,
      loop: true,
    });
  }

  startGame(): void {
    this.initializeObjects();
    this.setColliders();
  }

  initializeObjects(): void {
    this.bejiPlayer = new BejiPlayer(this, 200, 443);
    this.bearkongPlayer = new BearkongPlayer(this, 600, 443);

    /** 공 설정 */
    /** 공이 생성되는 X 좌표를 랜덤으로 설정. 100~300 사이 혹은 500 ~ 700 사이에서 생성 */
    const ballRandomX =
      Phaser.Math.Between(100, 300) + Phaser.Math.Between(0, 1) * 400;
    this.ball = new Ball(this, ballRandomX, 100);
    this.tweens.add({
      targets: this.ball,
      angle: 360,
      duration: 1500,
      repeat: -1,
      ease: "Linear",
    });
  }

  setColliders(): void {
    this.physics.add.collider(this.bejiPlayer, this.ground);
    this.physics.add.collider(this.bearkongPlayer, this.ground);
    this.physics.add.collider(this.ball, this.net);
    this.physics.add.collider(
      this.ball,
      this.ground,
      this.countScore,
      undefined,
      this
    );
    this.physics.add.collider(
      this.ball,
      this.bejiPlayer,
      this.bejiThrowBall,
      undefined,
      this
    );
    this.physics.add.collider(
      this.ball,
      this.bearkongPlayer,
      this.bearkongThrowBall,
      undefined,
      this
    );
  }

  bejiThrowBall(): void {
    const ballBounds = (this.ball as Phaser.Physics.Arcade.Sprite).getBounds();
    const bejiPlayerBounds = (
      this.bejiPlayer as Phaser.Physics.Arcade.Sprite
    ).getBounds();

    const overlapCenterX = ballBounds.centerX - bejiPlayerBounds.centerX;
    const overlapCenterY = bejiPlayerBounds.centerY - ballBounds.centerY;

    const throwXPower = overlapCenterX * 5;
    (this.ball as Phaser.Physics.Arcade.Sprite).setVelocityX(throwXPower);

    if (overlapCenterY < 76 && overlapCenterY > 20) {
      const throwYPower = Math.abs(overlapCenterX * 5) * -1;
      (this.ball as Phaser.Physics.Arcade.Sprite).setVelocityY(throwYPower);
    }
  }

  bearkongThrowBall(): void {
    const ballBounds = (this.ball as Phaser.Physics.Arcade.Sprite).getBounds();
    const bearkongPlayerBounds = (
      this.bearkongPlayer as Phaser.Physics.Arcade.Sprite
    ).getBounds();

    const overlapCenterX = ballBounds.centerX - bearkongPlayerBounds.centerX;
    const overlapCenterY = bearkongPlayerBounds.centerY - ballBounds.centerY;

    const throwXPower = overlapCenterX * 5;
    (this.ball as Phaser.Physics.Arcade.Sprite).setVelocityX(throwXPower);

    if (overlapCenterY < 84 && overlapCenterY > 20) {
      const throwYPower = Math.abs(overlapCenterX * 5) * -1;
      (this.ball as Phaser.Physics.Arcade.Sprite).setVelocityY(throwYPower);
    }
  }

  countScore(): void {
    const hitX = (this.ball as Phaser.Physics.Arcade.Sprite).getBounds().x;
    if (hitX < 400) {
      console.log("베어콩 승");
    } else {
      console.log("베지 승");
    }
  }

  update(): void {
    if (this.bearkongPlayer && this.bejiPlayer) {
      this.bearkongPlayer.update(this.cursors);
      this.bejiPlayer.update(this.keyA, this.keyD, this.keyW);
    }
  }
}
