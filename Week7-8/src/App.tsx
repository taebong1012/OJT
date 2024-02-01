import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "@/components/common/Layout";
import Main from "@/pages/Main";
import TutorialGame from "@/pages/TutorialGame";
import VolleyballGame from "@/pages/VolleyballGame";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/tutorial" element={<TutorialGame />} />
        <Route path="/volleyball" element={<VolleyballGame />} />
      </Route>
    </Routes>
  );
}

export default App;
