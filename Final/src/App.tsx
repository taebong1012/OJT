import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "@/pages/Main";
import Specific from "@/pages/Specific";
import ErrorPage from "@/pages/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/week/:projectnum" element={<Specific />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
