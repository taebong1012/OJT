type countDownProps = {
  scene: Phaser.Scene;
  bejiPlayer: Phaser.Physics.Arcade.Sprite;
  bearkongPlayer: Phaser.Physics.Arcade.Sprite;
  ball: Phaser.Physics.Arcade.Image;
};

const countDown = async ({
  scene,
  bejiPlayer,
  bearkongPlayer,
  ball,
}: countDownProps) => {
  if (bejiPlayer && bearkongPlayer && ball) {
    bejiPlayer.destroy();
    bearkongPlayer.destroy();
    ball.destroy();
  }

  let count = 3;

  const countdownText = scene.add
    .text(400, 300, `${count}`, {
      font: "100px NanumSquareRoundEB",
      color: "#ffffff",
    })
    .setOrigin(0.5);
  scene.sound.add("countDownSound").play();

  const countdownTimer = scene.time.addEvent({
    delay: 1000,
    callback: () => {
      count--;

      if (count >= 0) {
        if (count == 0) {
          scene.sound.add("countDownEndSound").play();
        } else {
          scene.sound.add("countDownSound").play();
        }

        /** 카운트 다운 텍스트 교체 */
        countdownText.setText(`${count}`);
      } else {
        countdownText.destroy();
        countdownTimer.destroy();
      }
    },
    callbackScope: this,
    loop: true,
  });
};

export default countDown;
