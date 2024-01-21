import React from "react";
import Header from "@/components/common/Header";
import Profile from "@/components/common/Profile";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <div className="w-1240 mx-auto px-5 flex gap-10 ">
        <Profile />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
