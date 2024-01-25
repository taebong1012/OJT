import Layout from "@/components/common/Layout";
import { getCookieIsLogin } from "@/utils/getSetCookie";
import { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouterProps {
  children?: ReactNode;
  authentication: boolean;
}

const PrivateRouter = ({ authentication }: PrivateRouterProps) => {
  const isAuthenticated = getCookieIsLogin();

  /** 인증이 필요한 페이지라면
   * 로그인이 안되어있으면 로그인/회원가입 페이지로 이동
   */
  if (authentication) {
    return !isAuthenticated ? <Navigate to="/start" /> : <Layout />;
  } else {
    /** 인증하지 않았을 때만 접근 가능한 페이지라면
     * 로그인이 되어있으면 메인으로 이동
     */
    return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
  }
};

export default PrivateRouter;
