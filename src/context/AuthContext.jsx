import React, { createContext, useState, useEffect, useContext } from "react";
import supabase from "../config/supabaseClient";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [profile, setProfile] = useState(null); // Default to null, not []

  const fetchUserProfile = async (userId) => {
    const { data: profile, error } = await supabase
      .from("accounts")
      .select("*")
      .eq("user_id", userId)
      .single();

    if (error) {
      console.error("Error fetching profile:", error);
      return null;
    }

    return profile;
  };

  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        setUser(session.user);
        setIsAuthChecked(true); // ✅ set when session exists
      }

      const { data: authListener } = supabase.auth.onAuthStateChange(
        async (_event, session) => {
          setUser(session?.user || null);
          setIsAuthChecked(true);
        }
      );

      return () => {
        authListener?.unsubscribe();
      };
    };

    fetchSession();
  }, []);

  useEffect(() => {
    if (user?.id) {
      const getProfile = async () => {
        const profile = await fetchUserProfile(user.id);
        if (profile) {
          setProfile(profile);
        }
        setLoading(false); // ✅ Stop loading after profile is loaded
      };

      getProfile();
    } else {
      setLoading(false); // ✅ Also stop loading if user is null
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ user, loading, isAuthChecked, profile, setProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
