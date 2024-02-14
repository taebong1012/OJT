import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "@/pages/Main";
import Project from "@/pages/Project";
import ErrorPage from "@/pages/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/week/:projectnum" element={<Project />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
