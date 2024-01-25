import Start from "@/pages/Start";
import { Route, Routes } from "react-router-dom";
import Result from "@/pages/Result";
import Main from "@/pages/Main";
import Test from "@/pages/Test";
import PrivateRouter from "@/components/common/PrivateRouter";
import ErrorPage from "@/pages/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRouter authentication={true} />}>
        <Route index element={<Main />} />
        <Route path="/result/:grade" element={<Result />} />
        <Route path="/test/:grade" element={<Test />} />
      </Route>
      <Route path="/start" element={<PrivateRouter authentication={false} />}>
        <Route index element={<Start />} />
      </Route>
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
