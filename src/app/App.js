import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../routes/AppRoutes";
import { AuthProvider } from "../context/AuthContext";

// Styles
import "../landing/styles/landing.css";
import "../styles/css/index.css";
import "../landing/styles/landing.css";

//App.js
const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
};

const Root = () => <App />;

export default Root;
