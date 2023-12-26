import animalsObjArr from "@/utils/Pick/animalsObjArr";
import foodsObjArr from "@/utils/Pick/foodsObjArr";
import ridesObjArr from "@/utils/Pick/ridesObjArr";
import toolsObjArr from "@/utils/Pick/toolsObjArr";

type obj = {
  svgPath: string;
  type: string;
};

/** 랜덤으로 보기 배열 출제 */
const getRandomArr = () => {
  /** 랜덤 배열 */
  const randomObjArr: obj[] = [];

  /** 선언된 배열들 섞기 */
  const animalArr = animalsObjArr.sort(() => Math.random() - 0.5);
  const rideArr = ridesObjArr.sort(() => Math.random() - 0.5);
  const foodArr = foodsObjArr.sort(() => Math.random() - 0.5);
  const toolArr = toolsObjArr.sort(() => Math.random() - 0.5);

  randomObjArr.push(animalArr[0]);
  randomObjArr.push(animalArr[1]);
  randomObjArr.push(rideArr[0]);
  randomObjArr.push(rideArr[1]);
  randomObjArr.push(foodArr[0]);
  randomObjArr.push(foodArr[1]);
  randomObjArr.push(toolArr[0]);
  randomObjArr.push(toolArr[1]);

  randomObjArr.sort(() => Math.random() - 0.5);

  return randomObjArr;
};

export default getRandomArr;
