import React from "react";
import { Routes, Route } from "react-router-dom";

// Import pages
import LandingPage from "../landing/LandingPage";
import AuthPage from "../app/pages/auth/AuthPage";
import WebApp from "../app/pages/WebApp";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/app/*" element={<WebApp />} />
    </Routes>
  );
};

export default AppRoutes;
