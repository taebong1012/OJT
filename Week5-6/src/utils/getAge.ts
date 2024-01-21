/** 생년 월일을 통해서 현재일의 만나이를 계산하는 함수
 * @param {string} birth - "YYYY-MM-dd" 형식의 생년월일
 * @return {number} - 현재 일의 만 나이
 */
const getAge = (birth: string): number => {
  const birthDate = new Date(birth);
  const currentDate = new Date();

  // 현재일을 기준으로 생일이 지났는지 여부 확인
  const hasBirthdayOccurred =
    currentDate.getMonth() > birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() >= birthDate.getDate());

  // 만 나이 계산
  const age =
    currentDate.getFullYear() -
    birthDate.getFullYear() -
    (hasBirthdayOccurred ? 0 : 1);

  return age;
};

export default getAge;
