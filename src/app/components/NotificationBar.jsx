import React from "react";
import { X } from "lucide-react";

const NotificationsBar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full bg-gray-900 text-white transition-all duration-300
        ${isOpen ? "w-48" : "w-0 md:w-48"}
        overflow-hidden z-40 flex flex-col md:relative md:flex-shrink-0`}
      >
        <div className="p-4 h-full flex flex-col">
          <button
            className="md:hidden text-white self-end"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
          <div className="mt-4 text-sm">
            <p>🔔 No new notifications.</p>
          </div>
        </div>
      </div>

      {/* Overlay on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default NotificationsBar;
