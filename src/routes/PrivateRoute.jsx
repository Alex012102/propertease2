import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoadingModal from "../app/components/LoadingModal";

// PrivateRoute.jsx
const PrivateRoute = ({ children }) => {
  const { user, isAuthChecked, loading } = useAuth();

  if (loading || !isAuthChecked) {
    return <LoadingModal />; // Optional loading screen during auth state check
  }

  if (!user) {
    return <Navigate to="/auth" replace />; // Redirect to auth page if not authenticated
  }

  return children; // Render children if authenticated
};

export default PrivateRoute;
