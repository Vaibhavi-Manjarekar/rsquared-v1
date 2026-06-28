import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./Events.module.css";

function Events() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [input, setInput] = useState("");

  const dateKey = date.toDateString();

  const handleAddEvent = () => {
    if (!input.trim()) return;

    setEvents((prev) => {
      const existing = prev[dateKey] || [];
      return {
        ...prev,
        [dateKey]: [...existing, input],
      };
    });

    setInput("");
  };

  const handleDeleteEvent = (index) => {
    setEvents((prev) => {
      const updated = [...(prev[dateKey] || [])];
      updated.splice(index, 1);

      return {
        ...prev,
        [dateKey]: updated,
      };
    });
  };

  return (
    <>
      <div className={styles.eventsHeader}>
        <div className={styles.eventsTitleBox}>
          <h1>Calendar</h1>
          <div className={styles.line}></div>
        </div>
      </div>

      <p className={styles.eventsSubtitle}>
        Check out some events you can look forward to!
      </p>

      <div className={styles.eventsContainer}>
        <div className={styles.calendarBox}>
          <Calendar onChange={setDate} value={date} />
        </div>

        <p className={styles.selectedDate}>
          Selected date: <strong>{dateKey}</strong>
        </p>

        {/* ADD EVENT */}
        <div className={styles.eventInputBox}>
          <input
            type="text"
            placeholder="Add an event..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleAddEvent}>Add</button>
        </div>

        {/* EVENTS LIST */}
        <div className={styles.eventListBox}>
          <h3>Events for this day</h3>

          {events[dateKey] && events[dateKey].length > 0 ? (
            <ul className={styles.eventList}>
              {events[dateKey].map((ev, idx) => (
                <li key={idx} className={styles.eventItem}>
                  <span>{ev}</span>

                  <button
                    className={styles.deleteBtn}
                    onClick={() => handleDeleteEvent(idx)}
                  >
                    🗑
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.noEvents}>No upcoming events</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Events;