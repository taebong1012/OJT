import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "@/Pages/Main";
import Specific from "@/Pages/Specific";
import ErrorPage from "@/Pages/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/week/:week" element={<Specific />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
