import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import DashboardPage from "./Pages/DashboardPage";
import IntegrationPage from "./Pages/IntegrationPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import SignUpProject from "./Pages/SignUpProject";
import HomePage from "./Pages/HomePage";
import AppgregatePage from "./Pages/AppgregatePage";
import HistoryPage from "./Pages/HistoryPage";
import IntegrationPlatformPage from "./Pages/IntegrationPlatformPage";


function App() {
  const [status, setStatus] = useState("");
  const [auth, setAuth] = useState("");

  useEffect(() => {
    setAuth(sessionStorage.getItem("Auth Token"));
    console.log("session=", sessionStorage.getItem("Auth Token"));
  }, [sessionStorage.getItem("Auth Token")]);
  return (
    <Routes>
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="project" element={<SignUpProject />} />
        <Route path="appgregate" element={<AppgregatePage />} />
        <Route path="history" element={<HistoryPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="integration" element={<IntegrationPage />} />
        <Route path="integration/:platform" element={<IntegrationPlatformPage />} />

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </>
    </Routes>
  );
}

export default App;
