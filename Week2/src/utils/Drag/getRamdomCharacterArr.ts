type Character = {
  engName: string;
  korName: string;
  comment: string;
  uniqueColor: string;
};

/** 캐릭터 정보가 랜덤으로 들어있는  */
const characterArr: Character[] = [
  {
    korName: "포이",
    engName: "poi",
    comment: "초코숲 장난꾸러기",
    uniqueColor: "#F4B63D",
  },
  {
    korName: "베어콩",
    engName: "bearkong",
    comment: "상상력이 풍부한",
    uniqueColor: "#63B535",
  },
  {
    korName: "베지",
    engName: "beji",
    comment: "사랑둥이 정원사",
    uniqueColor: "#59AFF9",
  },
  {
    korName: "파이",
    engName: "pie",
    comment: "통통튀는 팔방미인",
    uniqueColor: "#ED6F7C",
  },
  {
    korName: "부",
    engName: "boo",
    comment: "밉지 않은 사고뭉치",
    uniqueColor: "#865FB3",
  },
  {
    korName: "코박사",
    engName: "doctorCo",
    comment: "코코블의 메인박사",
    uniqueColor: "#232F44",
  },
];

/** 무작위로 섞은 후에 앞에서부터 4개의 요소만 가져오기 */
const getRandomCharacterArr = () => {
  const randomCharacterArr = characterArr
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);
  return randomCharacterArr;
};

export default getRandomCharacterArr;
