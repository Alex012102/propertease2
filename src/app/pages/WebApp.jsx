import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Context
import { useAuth } from "../../context/AuthContext";

// Components
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
} from "./index"

const WebApp = () => {
  const { user, isAuthChecked } = useAuth();

  // Prevent redirecting until auth is checked
  if (!isAuthChecked) return <div>Loading...</div>;

  if (!user) return <Navigate to="/auth" replace />;

  return (
    <Routes>
      <Route element={<LayoutWithSidebar />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/receipts" element={<Receipts />} />
        <Route path="/leases" element={<Leases />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/account" element={<Account />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default WebApp;
