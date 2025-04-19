import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// PrivateRoute.jsx
const PrivateRoute = ({ children }) => {
  const { isAuthChecked, loading } = useAuth();

  // Loading state, show a loading spinner while waiting for auth state
  if (loading) return <div>Loading...</div>;

  // If auth is not checked or user is not authenticated, redirect to auth page
  if (!isAuthChecked) return <Navigate to="/auth" replace />;

  // If everything checks out, render the child components (WebApp, etc.)
  return children;
};

export default PrivateRoute;
