import backgroundImage from "@/assets/volleyball/images/background.svg";
import groundImage from "@/assets/volleyball/images/ground.svg";
import bejiPlayImage from "@/assets/volleyball/anim/beji-play.png";
import bejiPlayJson from "@/assets/volleyball/anim/beji-play.json";
import bearkongPlayImage from "@/assets/volleyball/anim/bearkong-play.png";
import bearkongPlayJson from "@/assets/volleyball/anim/bearkong-play.json";
import netImage from "@/assets/volleyball/images/net.svg";
import whaleImage from "@/assets/volleyball/images/whale.png";
import ballImage from "@/assets/volleyball/images/ball.svg";
import bejiWinImage from "@/assets/volleyball/images/beji-win.svg";
import bearkongWinImage from "@/assets/volleyball/images/bearkong-win.svg";
import pauseButtonImage from "@/assets/volleyball/images/pause-button.png";
import cursorDefault from "@/assets/volleyball/images/cursor-default.png";
import gameBGMusic from "@/assets/volleyball/sounds/gameBGMusic.mp3";
import ballSound from "@/assets/volleyball/sounds/ballSound.mp3";
import jumpSound from "@/assets/volleyball/sounds/jumpSound.mp3";
import pauseSound from "@/assets/volleyball/sounds/pauseSound.mp3";
import countDownSound from "@/assets/volleyball/sounds/countDownSound.wav";
import countDownEndSound from "@/assets/volleyball/sounds/countDownEndSound.wav";
import ballTouchGroundSound from "@/assets/volleyball/sounds/ballTouchGroundSound.mp3";
import BejiPlayer from "@/components/Volleyball/GameScene/BejiPlayer";
import Whale from "@/components/Volleyball/Whale";
import BearkongPlayer from "@/components/Volleyball/GameScene/BearkongPlayer";
import RoundResultModal from "@/components/Volleyball/GameScene/RoundResultModal";
import { pointTextStyle, scoreTextStyle } from "@/utils/phaser/phaserTextStyle";
import PauseButton from "@/components/Volleyball/GameScene/PauseButton";
import initializeObjects from "@/utils/volleyball/initializeObjects";
import throwBall from "@/utils/volleyball/throwBall";
import countDown from "@/utils/volleyball/countDown";

export default class VolleyballStartScene extends Phaser.Scene {
  private bejiPlayer!: BejiPlayer;
  private bearkongPlayer!: BearkongPlayer;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private ground!: Phaser.Physics.Arcade.StaticGroup;
  private net!: Phaser.Physics.Arcade.StaticGroup;
  private ball!: Phaser.Physics.Arcade.Image;
  private keyA!: Phaser.Input.Keyboard.Key;
  private keyD!: Phaser.Input.Keyboard.Key;
  private keyW!: Phaser.Input.Keyboard.Key;
  private bejiScore!: number;
  private bearkongScore!: number;
  private scoreText!: Phaser.GameObjects.Text;
  private roundNum!: number;
  private roundText!: Phaser.GameObjects.Text;

  constructor() {
    super({ key: "volleyBallGame" });
  }

  preload() {
    this.bejiScore = 0;
    this.bearkongScore = 0;
    this.roundNum = 1;

    this.load.audio("gameBGMusic", gameBGMusic);
    this.load.audio("ballSound", ballSound);
    this.load.audio("jumpSound", jumpSound);
    this.load.audio("pauseSound", pauseSound);
    this.load.audio("countDownSound", countDownSound);
    this.load.audio("countDownEndSound", countDownEndSound);
    this.load.audio("ballTouchGroundSound", ballTouchGroundSound);
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
    this.load.spritesheet("pauseButton", pauseButtonImage, {
      frameWidth: 146,
      frameHeight: 146,
    });
  }

  create() {
    /** 커서 설정 */
    this.input.setDefaultCursor(`url(${cursorDefault}), default`);

    if (this.input.keyboard) {
      /** 커서 설정 */
      this.cursors = this.input.keyboard.createCursorKeys();

      /** 키보드 키 설정 */
      this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
      this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
      this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    }

    /** 원래 음악 모두 제거 후 배경음악 설정 */
    this.sound.stopAll();
    this.sound.add("gameBGMusic", { loop: true }).setVolume(0.6).play();

    /** 배경 설정 */
    this.add.image(400, 300, "background");

    /** 일시정지 버튼 설정 */
    new PauseButton(this);

    new Whale(this);

    /** 중력의 영향을 받지 않는 땅바닥 설정, 공과 상호작용 */
    this.ground = this.physics.add.staticGroup();
    this.ground.create(400, 580, "ground");

    /** 중력의 영향을 받지 않는 네트 설정, 공과 상호작용 */
    this.net = this.physics.add.staticGroup();
    this.net.create(400, 464, "net");

    /** 라운드와 점수 출력 */
    this.roundText = new Phaser.GameObjects.Text(
      this,
      400,
      40,
      `${this.roundNum} 라운드`,
      pointTextStyle
    ).setOrigin(0.5, 0.5);

    this.scoreText = new Phaser.GameObjects.Text(
      this,
      400,
      74,
      `${this.bejiScore} : ${this.bearkongScore}`,
      scoreTextStyle
    ).setOrigin(0.5, 0.5);

    this.add.existing(this.roundText);
    this.add.existing(this.scoreText);

    this.setGame();
  }

  /** 게임 준비 */
  async setGame() {
    /** 카운트 다운 후에 게임 시작 */
    await countDown({
      scene: this,
      bejiPlayer: this.bejiPlayer,
      bearkongPlayer: this.bearkongPlayer,
      ball: this.ball,
    });

    /** 오브젝트들 생성 */
    const { bejiPlayer, bearkongPlayer, ball } = initializeObjects(this);
    this.bejiPlayer = bejiPlayer;
    this.bearkongPlayer = bearkongPlayer;
    this.ball = ball;

    /** 오브젝트 충돌 설정 */
    this.setColliders();
  }

  setColliders(): void {
    this.physics.add.collider(this.bejiPlayer, this.ground);
    this.physics.add.collider(this.bearkongPlayer, this.ground);
    this.physics.add.collider(this.ball, this.net);

    /** 공과 바닥의 충돌 감지 후 점수 갱신 및 라운드 결과 모달 팝업 */
    this.physics.add.collider(
      this.ball,
      this.ground,
      this.countScore,
      undefined,
      this
    );

    /** 공과 베지 충돌 감지 후 x와 y좌표에 따라서 공의 방향 조정 */
    this.physics.add.collider(
      this.ball,
      this.bejiPlayer,
      () => {
        throwBall({
          scene: this,
          player: this.bejiPlayer,
          ball: this.ball,
          characterName: "beji",
        });
      },
      undefined,
      this
    );

    /** 공과 베어콩 충돌 감지 후 x와 y좌표에 따라서 공의 방향 조정 */
    this.physics.add.collider(
      this.ball,
      this.bearkongPlayer,
      () => {
        throwBall({
          scene: this,
          player: this.bearkongPlayer,
          ball: this.ball,
          characterName: "bearkong",
        });
      },
      undefined,
      this
    );
  }

  countScore(): void {
    this.sound.add("ballTouchGroundSound").play();

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
      /** 라운드 결과를 출력하는 모달 제거, 파괴하여 재생성 시 key 중복 방지 */
      this.scene.remove("roundResultModal");
      roundResultModal.destroy();

      if (this.bearkongScore >= 5 || this.bejiScore >= 5) {
        /** 베지 혹은 베어콩의 점수가 5점이라면
         * 플레이어별 점수와 라운드 수를 가지고
         * 결과 scene으로 넘어가기 */
        this.scene.start("volleyBallResult", {
          bejiScore: this.bejiScore,
          bearkongScore: this.bearkongScore,
        });
      } else {
        /** 5점이 된 플레이어가 아무도 없다면 라운드결과모달을 지우고 다음 경기 재개 */
        this.scene.resume("volleyBallGame");
        this.roundNum++;
        this.roundText.setText(`${this.roundNum} 라운드`);
        this.scoreText.setText(`${this.bejiScore} : ${this.bearkongScore}`);

        /** 다음 라운드 게임 준비 */
        this.setGame();
      }
    }, 3000);
  }

  update(): void {
    if (this.bearkongPlayer && this.bejiPlayer) {
      this.bearkongPlayer.update(this.cursors);
      this.bejiPlayer.update(this.keyA, this.keyD, this.keyW);
    }
  }
}
