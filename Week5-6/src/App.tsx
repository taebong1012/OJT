import Start from "@/pages/Start";
import { Route, Routes } from "react-router-dom";
import Result from "@/pages/Result";
import Main from "@/pages/Main";
import Test from "@/pages/Test";
import PrivateRouter from "@/components/common/PrivateRouter";

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
    </Routes>
  );
}

export default App;
