/** cookie에 아이디를 저장하는 함수
 * @param value: 로그인한 유저의 아이디 string 값
 */
export const setCookieId = (value: string) => {
  document.cookie = `id=${value}; path=/`;
};

/** cookie에 로그인 상태를 저장하는 함수
 * @param value: 로그인의 여부 boolean 값
 */
export const setCookieIsLogin = (value: boolean) => {
  document.cookie = `isLogin=${value}; path=/`;
};

/** cookie에 저장된 로그인 유저의 id를 가져오는 함수
 * @returns 로그인 유저의 id 혹은 없다면 null 리턴
 */
export const getCookieId = (): string | null => {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName.trim() === "id") {
      return cookieValue;
    }
  }
  return null;
};

/** cookie에 저장된 로그인 여부(boolean)를 가져오는 함수
 * @returns 로그인이 되어있다면 true, 쿠키가 없거나 로그인 되어있지 않다면 false 반환
 */
export const getCookieIsLogin = (): boolean => {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName.trim() === "isLogin") {
      return cookieValue === "true";
    }
  }
  return false;
};
