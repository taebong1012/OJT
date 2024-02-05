import backgroundImage from "@/assets/volleyball/background.svg";
import groundImage from "@/assets/volleyball/ground.svg";
import bejiPlayImage from "@/assets/volleyball/anim/beji-play.png";
import bejiPlayJson from "@/assets/volleyball/anim/beji-play.json";
import bearkongPlayImage from "@/assets/volleyball/anim/bearkong-play.png";
import bearkongPlayJson from "@/assets/volleyball/anim/bearkong-play.json";
import netImage from "@/assets/volleyball/net.svg";
import whaleImage from "@/assets/volleyball/whale.png";
import ballImage from "@/assets/volleyball/ball.svg";
import bejiWinImage from "@/assets/volleyball/beji-win.svg";
import bearkongWinImage from "@/assets/volleyball/bearkong-win.svg";
import { GameObjects } from "phaser";
import BejiPlayer from "@/components/Volleyball/BejiPlayer";
import Ball from "@/components/Volleyball/Ball";
import Whale from "@/components/Volleyball/Whale";
import BearkongPlayer from "@/components/Volleyball/BearkongPlayer";
import RoundResultModal from "@/components/Volleyball/RoundResultModal";

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
  private bejiScore!: number;
  private bearkongScore!: number;
  private roundNum!: number;

  constructor() {
    super({ key: "volleyBallGame" });
  }

  preload() {
    this.bejiScore = 0;
    this.bearkongScore = 0;
    this.roundNum = 1;

    this.load.image("background", backgroundImage);
    this.load.atlas("bejiPlayer", bejiPlayImage, bejiPlayJson);
    this.load.atlas("bearkongPlayer", bearkongPlayImage, bearkongPlayJson);
    this.load.image("ground", groundImage);
    this.load.image("net", netImage);
    this.load.image("ball", ballImage);
    this.load.image("bearkongWin", bearkongWinImage);
    this.load.image("bejiWin", bejiWinImage);
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
    if (this.bejiPlayer && this.bearkongPlayer && this.ball) {
      this.bejiPlayer.destroy();
      this.bearkongPlayer.destroy();
      this.ball.destroy();
    }

    let count = 3;

    const countdownText = this.add
      .text(400, 300, `${count}`, {
        font: "100px NanumSquareRoundEB",
        color: "#ffffff",
      })
      .setOrigin(0.5);

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
    let isBejiWin!: boolean;
    if (hitX < 400) {
      this.bearkongScore++;
      isBejiWin = false;
    } else {
      this.bejiScore++;
      isBejiWin = true;
    }

    const roundResultModal = new RoundResultModal(
      this,
      400,
      300,
      this.roundNum,
      isBejiWin
    );
    this.scene.add("roundResultModal", roundResultModal);
    this.scene.pause("volleyBallGame");

    /** ??: scene을 pause 해서 this.time.delayedCall로 할 경우 호출되지 않아서 일단 setTimeout으로 설정 */
    setTimeout(() => {
      this.scene.remove("roundResultModal");
      roundResultModal.destroy();
      this.scene.resume("volleyBallGame");
      this.roundNum++;
      this.countdown();
    }, 3000);
  }

  update(): void {
    if (this.bearkongPlayer && this.bejiPlayer) {
      this.bearkongPlayer.update(this.cursors);
      this.bejiPlayer.update(this.keyA, this.keyD, this.keyW);
    }
  }
}
