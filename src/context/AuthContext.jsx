import React, { createContext, useContext, useState, useEffect } from "react";
import supabase from "../config/supabaseClient";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      console.log("Session from Supabase:", session); // Debug log
      setIsAuthChecked(!!session);
      setLoading(false);
    };

    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        console.log("Auth state changed:", session); // Debug log
        setIsAuthChecked(!!session);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthChecked, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
