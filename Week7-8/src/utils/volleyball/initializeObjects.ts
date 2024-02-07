import Ball from "@/components/Volleyball/GameScene/Ball";
import BearkongPlayer from "@/components/Volleyball/GameScene/BearkongPlayer";
import BejiPlayer from "@/components/Volleyball/GameScene/BejiPlayer";

const initializeObjects = (scene: Phaser.Scene) => {
  const bejiPlayer = new BejiPlayer(scene, 200, 443);
  const bearkongPlayer = new BearkongPlayer(scene, 600, 443);

  /** 공이 생성되는 X 좌표를 랜덤으로 설정. 100~300 사이 혹은 500 ~ 700 사이에서 생성 */
  const ballRandomX =
    Phaser.Math.Between(100, 300) + Phaser.Math.Between(0, 1) * 400;
  const ball = new Ball(scene, ballRandomX, 100);
  scene.tweens.add({
    targets: ball,
    angle: 360,
    duration: 1500,
    repeat: -1,
    ease: "Linear",
  });

  return { bejiPlayer, bearkongPlayer, ball };
};

export default initializeObjects;
