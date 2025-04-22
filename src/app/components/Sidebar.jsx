import React from "react";
import { X } from "lucide-react";
import { Navbar, ProfilePhoto } from ".";
import LoadingModal from "./LoadingModal";
import { useNavigate } from "react-router-dom";
import supabase from "../../config/supabaseClient";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/logos/PropertEase-Logo-white_primary.png";

const Sidebar = ({ isOpen, setIsOpen, children }) => {
  const navigate = useNavigate(); // Create the navigate function

  const { loading, error, profile } = useAuth();

  if (loading) return <LoadingModal />;

  if (error) return <div>Error: {error}</div>;

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    navigate("/auth");
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-brand-charcoal-shade text-white transition-all duration-300
      ${isOpen ? "w-48" : "w-0 md:w-48"}
      overflow-hidden z-40 md:relative md:flex-shrink-0 flex flex-col`}
    >
      <div className="p-4 h-full flex flex-col items-center text-center">
        <button
          className="md:hidden text-white self-end"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>
        <img
          src={logo}
          className="hidden md:flex w-[8.5rem] m-auto mt-5"
          alt="propertease"
        />
        <ProfilePhoto />
        {profile && (
          <p className="mt-2">
            {profile.first_name} {profile.last_name}
          </p>
        )}
        <Navbar />
        <div className="flex-grow" />
        <p
          className="items-baseline mb-4 cursor-pointer hover:text-red-500"
          onClick={handleLogout}
        >
          Log Out
        </p>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
