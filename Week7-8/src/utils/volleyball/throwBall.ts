type throwBallProps = {
  scene: Phaser.Scene;
  player: Phaser.Physics.Arcade.Sprite;
  ball: Phaser.Physics.Arcade.Image;
  characterName: string;
};

const throwBall = ({ scene, player, ball, characterName }: throwBallProps) => {
  /** 어떤 캐릭터인지에 따라 y좌표 기준점 변경 */
  let referenceY!: number;
  if (characterName === "beji") {
    referenceY = 76;
  } else {
    referenceY = 84;
  }

  scene.sound.add("ballSound").play();

  const ballBounds = (ball as Phaser.Physics.Arcade.Sprite).getBounds();
  const playerBounds = (player as Phaser.Physics.Arcade.Sprite).getBounds();

  const overlapCenterX = ballBounds.centerX - playerBounds.centerX;
  const overlapCenterY = playerBounds.centerY - ballBounds.centerY;

  const throwXPower = overlapCenterX * 5;
  (ball as Phaser.Physics.Arcade.Sprite).setVelocityX(throwXPower);

  if (overlapCenterY < referenceY && overlapCenterY > 20) {
    const throwYPower = Math.abs(overlapCenterX * 5) * -1;
    (ball as Phaser.Physics.Arcade.Sprite).setVelocityY(throwYPower);
  }
};

export default throwBall;
