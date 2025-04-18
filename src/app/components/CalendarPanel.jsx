import React, { useState, useEffect } from "react";
import { calendarEvents } from "../../utils/mocks/mockCalendarEvents";

const CalendarPanel = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(calendarEvents);

    // Code for when using API
    // fetch(URLhere)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setEvents(data);
    //   });
  }, []);

  return (
    <div>
      {events.map((event) => (
        <div key={event.id} className="hover:bg-brand-charcoal-tint py-3 px-4 border-b border-b-brand-charcoal-light">
          <div className="flex justify-between">
            <strong className="text-sm">{event.title}</strong>
            <p>{event.date}</p>
          </div>
          <div className="flex justify-between">
            <p>{event.location}</p>
            <p>{event.time}</p>
          </div>
          <small>{event.description}</small>
        </div>
      ))}
    </div>
  );
};

export default CalendarPanel;
