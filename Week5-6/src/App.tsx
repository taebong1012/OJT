import Start from "@/pages/Start";
import GradeList from "@/pages/GradeList";
import { Route, Routes } from "react-router-dom";
import Result from "@/pages/Result";
import Layout from "@/components/common/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<GradeList />} />
        <Route path="/result/:grade" element={<Result />} />
      </Route>
      <Route path="/start">
        <Route index element={<Start />} />
      </Route>
    </Routes>
  );
}

export default App;
