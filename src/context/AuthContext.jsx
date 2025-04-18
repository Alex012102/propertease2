import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import mockUser from "../utils/mocks/mockUser"; // Only used in development/testing

// Create Auth
const AuthContext = createContext();

//Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else if (process.env.NODE_ENV === "development") {
      // Auto-login mock user in development mode
      setUser(mockUser);
      localStorage.setItem("user", JSON.stringify(mockUser));
    }

    setIsAuthChecked(true);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/app");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/auth");
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated, isAuthChecked }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
