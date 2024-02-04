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

    /** 중력의 영향을 받지 않는 땅바닥과 네트 설정 */
    const platforms = this.physics.add.staticGroup();
    platforms.create(400, 580, "ground");
    platforms.create(400, 464, "net");

    /** 중력의 영향을 받지 않는 꾸밈 요소들 설정 */
    const decorations = this.physics.add.staticGroup();
    decorations.add(new Whale(this, 160, 300));

    /** 공 설정 */
    this.ball = new Ball(this, 200, 100);
    this.tweens.add({
      targets: this.ball,
      angle: 360,
      duration: 1500,
      repeat: -1,
      ease: "Linear",
    });

    /** 베지 캐릭터 설정 */
    this.bejiPlayer = new BejiPlayer(this, 200, 443);
    this.bejiPlayer.setCollideWorldBounds(true);
    this.physics.add.collider(this.bejiPlayer, platforms);

    /** 베어콩 캐릭터 설정 */
    this.bearkongPlayer = new BearkongPlayer(this, 600, 443);
    this.bearkongPlayer.setCollideWorldBounds(true);
    this.physics.add.collider(this.bearkongPlayer, platforms);

    this.physics.add.collider(this.ball, platforms);
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

  update(): void {
    this.bearkongPlayer.update(this.cursors);
    this.bejiPlayer.update(this.keyA, this.keyD, this.keyW);
  }

  bejiThrowBall(): void {
    // ball과 bejiPlayer의 경계 상자 가져오기
    const ballBounds = (this.ball as Phaser.Physics.Arcade.Sprite).getBounds();
    const bejiPlayerBounds = (
      this.bejiPlayer as Phaser.Physics.Arcade.Sprite
    ).getBounds();

    // 겹치는 영역의 중심 좌표
    const overlapCenterX = ballBounds.centerX - bejiPlayerBounds.centerX;
    const overlapCenterY = bejiPlayerBounds.centerY - ballBounds.centerY;

    console.log(`Overlap at (${overlapCenterX}, ${overlapCenterY})`);

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

    // 겹치는 영역의 중심 좌표
    const overlapCenterX = ballBounds.centerX - bearkongPlayerBounds.centerX;
    const overlapCenterY = bearkongPlayerBounds.centerY - ballBounds.centerY;

    console.log(`Overlap at (${overlapCenterX}, ${overlapCenterY})`);

    const throwXPower = overlapCenterX * 5;
    (this.ball as Phaser.Physics.Arcade.Sprite).setVelocityX(throwXPower);

    if (overlapCenterY < 84 && overlapCenterY > 20) {
      const throwYPower = Math.abs(overlapCenterX * 5) * -1;
      (this.ball as Phaser.Physics.Arcade.Sprite).setVelocityY(throwYPower);
    }
  }
}
