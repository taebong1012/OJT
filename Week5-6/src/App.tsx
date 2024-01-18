import Header from "@/components/common/Header";
import Start from "@/pages/Start";
import GradeList from "@/pages/GradeList";
import { Outlet, Route, Routes } from "react-router-dom";
import Profile from "@/components/common/Profile";

function App() {
  const Layout = () => {
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

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<GradeList />} />
      </Route>
      <Route path="/start">
        <Route index element={<Start />} />
      </Route>
    </Routes>
  );
}

export default App;
