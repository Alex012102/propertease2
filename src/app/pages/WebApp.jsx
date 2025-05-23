import React from "react";
import { Routes, Route } from "react-router-dom";

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

      {/* Fallback route for unknown paths */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default WebApp;
