export default class SoundButton extends Phaser.GameObjects.Sprite {
  constructor(scene: Phaser.Scene) {
    super(scene, 760, 40, "soundButton");
    scene.add.existing(this);

    this.setScale(0.3);

    this.scene.sound.setMute(false);
  }
}
