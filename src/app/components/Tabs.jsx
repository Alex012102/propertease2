import React from "react";
import { Calendar, Bell, MessageSquare } from "lucide-react";

const tabIcons = {
  notifications: <Bell size={20} />,
  messages: <MessageSquare size={20} />,
  calendar: <Calendar size={20} />,
};

const Tabs = ({ activeTab, setActiveTab }) => {
  console.log(activeTab);

  return (
    <div className="flex flex-1 justify-between bg-brand-charcoal-dark px-2 pt-4">
      {["notifications", "messages", "calendar"].map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 rounded-ss-lg rounded-se-lg flex items-center gap-2 hover:bg-brand-charcoal-tint transition-all duration-900 ${
            activeTab === tab ? "bg-brand-charcoal-shade font-semibold" : ""
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tabIcons[tab]}
          <span className={`${activeTab === tab ? "" : "hidden"}`}>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
        </button>
      ))}
    </div>
  );
};

export default Tabs;
