// AppRoutes.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import LandingPage from "../landing/LandingPage";
import AuthPage from "../app/pages/auth/AuthPage";
import WebApp from "../app/pages/WebApp";
import LoadingModal from "../app/components/LoadingModal";

const AppRoutes = () => {
  const { isAuthChecked, loading, user } = useAuth();

  // If auth is loading or check isn't done, show loading screen
  if (loading || !isAuthChecked) return <LoadingModal />;

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthPage />} />

      {/* Protected routes */}
      <Route
        path="/app/*"
        element={
          user ? (
            <WebApp /> // User is authenticated, show the app
          ) : (
            <Navigate to="/auth" replace /> // Redirect to login if not authenticated
          )
        }
      />
    </Routes>
  );
};

export default AppRoutes;
