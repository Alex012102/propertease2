import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../routes/AppRoutes";
import { AuthProvider } from "../context/AuthContext";

// Styles
import "../landing/styles/landing.css";
import "../styles/css/index.css";
import "../landing/styles/landing.css";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
};

const Root = () => <App />;

export default Root;
