import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import LayoutWithSidebar from "./layouts/LayoutWithSidebar";

// Pages
import {
  Dashboard,
  Maintenance,
  Properties,
  Receipts,
  Leases,
  Reports,
  Settings,
  Account,
  NotFound,
} from "./index";

const WebApp = () => {
  const { isAuthChecked, loading } = useAuth();

  // Prevent redirecting until auth is checked
  if (loading) return <div>Loading...</div>; // If still loading auth state, show loading

  if (!isAuthChecked) return <Navigate to="/auth" replace />; // If not authenticated, redirect to login

  return (
    <Routes>
      <Route element={<LayoutWithSidebar />}>
        {/* These are the actual routes for the web app */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/receipts" element={<Receipts />} />
        <Route path="/leases" element={<Leases />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/account" element={<Account />} />
      </Route>
      {/* This is a fallback route for any unknown paths */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default WebApp;
