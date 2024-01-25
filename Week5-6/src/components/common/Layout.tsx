import Header from "@/components/common/Header";
import Profile from "@/components/common/Profile";
import { Outlet } from "react-router-dom";
import Footer from "@/components/common/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="w-1240 mx-auto px-5 flex gap-10 ">
        <Profile />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
