import React from "react";
import PrivateRoute from "./PrivateRoute";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../landing/LandingPage";
import AuthPage from "../app/pages/auth/AuthPage";
import WebApp from "../app/pages/WebApp";

// AppRoutes.js
const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthPage />} />

      {/* Protected routes */}
      <Route
        path="/app/*"
        element={
          <PrivateRoute>
            <WebApp /> {/* This is the protected area */}
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
