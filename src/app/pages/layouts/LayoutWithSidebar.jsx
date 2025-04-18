import React, { useState } from "react";
import { Sidebar } from "../auth/components";
import { Outlet } from "react-router-dom";
import NotificationsBar from "../../components/NotificationBar";
import { Menu, Bell } from "lucide-react";

const LayoutWithSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Top bar with toggle buttons */}
        <div className="flex justify-between items-center p-4 bg-white shadow-md md:hidden z-10">
          <button onClick={() => setIsSidebarOpen(true)}>
            <Menu size={24} />
          </button>
          <button onClick={() => setIsNotificationsOpen(true)}>
            <Bell size={24} />
          </button>
        </div>

        {/* Actual page content */}
        <div className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </div>
      </div>

      {/* Notifications Bar */}
      <NotificationsBar
        isOpen={isNotificationsOpen}
        setIsOpen={setIsNotificationsOpen}
      />
    </div>
  );
};

export default LayoutWithSidebar;
