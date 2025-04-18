import React, { useState } from "react";
import { X } from "lucide-react";
import Tabs from "./Tabs";
import MessagesPanel from "./MessagesPanel";
import CalendarPanel from "./CalendarPanel";
import NotificationsPanel from "./NotificationsPanel";

const NotificationsBar = ({ isOpen, setIsOpen }) => {
  const [activeTab, setActiveTab] = useState("notifications");

  const renderTabContent = () => {
    switch (activeTab) {
      case "messages":
        return <MessagesPanel />;
      case "calendar":
        return <CalendarPanel />;
      default:
        return <NotificationsPanel />;
    }
  };

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full bg-brand-charcoal-shade text-white transition-all duration-300
        ${isOpen ? "w-80" : "w-0 md:w-80"}
        overflow-hidden z-40 flex flex-col md:relative md:flex-shrink-0`}
      >
        <div className="h-full flex flex-col">
          <button
            className="md:hidden text-white self-end"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
          <div className="text-sm">
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <div className="pt-3">{renderTabContent()}</div>
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
