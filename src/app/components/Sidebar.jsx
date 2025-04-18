import React from "react";
import { X } from "lucide-react"; // Icons for open/close
import logo from "../../assets/logos/PropertEase-Logo-white_primary.png";
import { Navbar, ProfilePhoto } from ".";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen, children }) => {
  const { logout } = useAuth();
  const navigate = useNavigate(); // Create the navigate function

  const handleLogout = () => {
    logout(); // Call the logout function from AuthContext
    navigate("/auth"); // Redirect to the Auth page
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-all duration-300
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
