import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Tab from "@/components/common/Tab";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <Header />
      {pathname === "/" && <Tab />}
      <div className="w-full flex justify-center pt-[60px] min-h-[800px]">
        <div className="min-w-[1280px] w-[1280px] flex justify-start items-start">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
