import React, { useState, useEffect } from "react";
import { mockNotifications } from "../../utils/mocks/mockNotifications";
import {
  Banknote,
  // BanknoteArrowDown,
  Hammer,
  ScanSearch,
} from "lucide-react";

const notificationIcons = {
  receivable: <Banknote size={28} />,
  // payable: <BanknoteArrowDown />,
  maintenance: <Hammer size={28} />,
  inspection: <ScanSearch size={28} />,
};

const NotificationsPanel = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    setNotifications(mockNotifications);

    // Code for when using API
    // fetch(URLhere)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setEvents(data);
    //   });
  }, []);

  return (
    <div>
      {notifications.map((item) => (
        <div
          key={item.id}
          className="hover:bg-brand-charcoal-tint py-3 px-4 border-b border-b-brand-charcoal-light"
        >
          <div className="flex mb-2 space-x-3 items-center">
            {notificationIcons[item.type]}
            <div className="flex flex-col">
              <strong
                className={`${
                  item.isRead ? "text-sm" : "text-brand-primary text-sm"
                } `}
              >
                {item.title}
              </strong>
              <p className="text-xs">{item.timestamp}</p>
            </div>
          </div>
          <small className="line-clamp-2">{item.message}</small>
        </div>
      ))}
    </div>
  );
};

export default NotificationsPanel;
