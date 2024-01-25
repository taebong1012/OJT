import { setCookieId, setCookieIsLogin } from "@/utils/getSetCookie";

export const doLogout = () => {
  setCookieId("");
  setCookieIsLogin(false);
};
