import { Route, Routes } from "react-router-dom";
import "./App.css";

import DashboardPage from "./Pages/DashboardPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import SignUpProject from "./Pages/SignUpProject";

function App() {
  return (
    <Routes>
      <>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="project" element={<SignUpProject />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </>
    </Routes>
  );
}

export default App;
