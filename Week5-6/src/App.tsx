import Start from "@/pages/Start";
import { Route, Routes } from "react-router-dom";
import Result from "@/pages/Result";
import Layout from "@/components/common/Layout";
import Main from "@/pages/Main";
import Test from "@/pages/Test";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/result/:grade" element={<Result />} />
        <Route path="/test/:grade" element={<Test />} />
      </Route>
      <Route path="/start">
        <Route index element={<Start />} />
      </Route>
    </Routes>
  );
}

export default App;
