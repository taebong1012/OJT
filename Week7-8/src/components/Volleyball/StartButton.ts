export default class StartButton extends Phaser.Physics.Arcade.Image {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "gameButton");
    scene.add.existing(this);

    this.setScale(0.7);

    /** 마우스 hover 했을 경우 포인터 커서로 변경 */
    this.setInteractive().on(
      "pointerover",
      () => {
        this.onButtonHover(scene);
      },
      scene
    );

    /** 마우스가 버튼 밖으로 나갔을 경우 했을 경우 기본 커서로 변경 */
    this.setInteractive().on(
      "pointerout",
      () => {
        this.onButtonOut(scene);
      },
      scene
    );
  }

  onButtonHover(scene: Phaser.Scene) {
    scene.input.setDefaultCursor("url(hover-cursor.png), pointer");
  }
  onButtonOut(scene: Phaser.Scene) {
    scene.input.setDefaultCursor("url(default-cursor.png), default");
  }
}
